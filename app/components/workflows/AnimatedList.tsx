import React, {
  Fragment,
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import clsx from "clsx";

export const WorkflowAnimatedImage = ({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={clsx(
        "min-h-[50vh] w-full sticky top-[25vh] left-0 transition-all duration-500 col-span-1 col-end-2 row-span-1 row-end-1 flex justify-center items-center",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

interface WorkflowAnimatedContentProps extends HTMLAttributes<HTMLDivElement> {
  activeIndex: number;
  index: number;
}

export const WorkflowAnimatedContent = React.forwardRef<
  HTMLElement,
  WorkflowAnimatedContentProps
>(({ children, className, activeIndex, index, ...rest }, ref) => {
  return (
    <article
      className={clsx(
        "h-[50vh] transition-all duration-500 col-start-2 flex flex-col justify-center gap-4",
        className
      )}
      style={{
        opacity: activeIndex === index ? 1 : 0,
      }}
      ref={ref}
      {...rest}
    >
      {children}
    </article>
  );
});

export const WorkflowAnimatedContentHeading = ({
  children,
}: PropsWithChildren) => {
  return <h4 className="text-lg lg:text-4xl">{children}</h4>;
};

export const WorkflowAnimatedContentParagraph = ({
  children,
}: PropsWithChildren) => {
  return <p className="text-sm lg:text-base">{children}</p>;
};

interface WorkflowsAnimatedListProps {
  list: { id: number; heading: string; paragraph: string; src: string }[];
}

export const WorkflowsAnimatedList = ({ list }: WorkflowsAnimatedListProps) => {
  const { refs, activeIndex } = useAnimatedPosition();

  return (
    <div className="grid grid-cols-[1.3fr_1fr] lg:gap-x-10 xl:gap-x-20">
      {list.map((el, index) => {
        const isActive = index === activeIndex;
        return (
          <Fragment key={el.id}>
            <WorkflowAnimatedImage
              className={clsx({
                "opacity-0": !isActive,
                "opacity-100": isActive,
              })}
            >
              <div
                className={clsx("w-full aspect-square rounded-lg", {
                  "bg-blue-500": index % 2 === 0,
                  "bg-green-500": index % 2 !== 0,
                })}
              />
            </WorkflowAnimatedImage>

            <WorkflowAnimatedContent
              activeIndex={activeIndex}
              index={index}
              ref={(el) => {
                if (!el) return;
                refs.current[index] = el;
              }}
            >
              <WorkflowAnimatedContentHeading>
                {el.heading}
              </WorkflowAnimatedContentHeading>

              <WorkflowAnimatedContentParagraph>
                {el.paragraph}
              </WorkflowAnimatedContentParagraph>
            </WorkflowAnimatedContent>
          </Fragment>
        );
      })}
    </div>
  );
};

export const WorkflowsAnimatedMobileList = ({
  list,
}: WorkflowsAnimatedListProps) => {
  const { refs, activeIndex } = useAnimatedPosition();

  const onClick = (index: number) => {
    refs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="h-[30vh] w-full sticky top-[75px] transition-all duration-500">
        {list.map((el, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={el.id}
              className={clsx(
                "absolute top-0 bottom-0 left-0 right-0 rounded-lg",
                {
                  "bg-blue-500": index % 2 === 0,
                  "bg-green-500": index % 2 !== 0,
                  "opacity-0": !isActive,
                  "opacity-100": isActive,
                }
              )}
            />
          );
        })}
      </div>

      {list.map((el, index) => {
        const isActive = index === activeIndex;
        return (
          <button
            key={el.id}
            ref={(el) => {
              if (!el) return;
              refs.current[index] = el;
            }}
            className={clsx(
              "rounded-lg flex flex-col gap-2 bg-zinc-900/50 border p-4 md:p-6",
              {
                "border-primary-500": isActive,
                "border-neutral-950": !isActive,
              }
            )}
            onClick={() => onClick(index)}
          >
            <article>
              <WorkflowAnimatedContentHeading>
                {el.heading}
              </WorkflowAnimatedContentHeading>

              <WorkflowAnimatedContentParagraph>
                {el.paragraph}
              </WorkflowAnimatedContentParagraph>
            </article>
          </button>
        );
      })}
    </div>
  );
};

function useAnimatedPosition() {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef<HTMLElement[]>([]);

  const handleScroll = () => {
    let closest = null;
    let closestDistance = Infinity;

    contentRefs.current.forEach((ref, index) => {
      const rect = ref.getBoundingClientRect();
      const distance = Math.abs(
        window.innerHeight / 2 - (rect.top + rect.height / 2)
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closest = index;
      }
    });

    setActiveIndex(closest ?? 0);
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { refs: contentRefs, activeIndex };
}

import React, {
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
        "bg-white rounded-lg min-h-[50vh] w-full sticky top-[25vh] left-0 transition-all duration-500 col-span-1 col-end-2 row-span-1 row-end-1 flex justify-center items-center p-16",
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
  return <h4 className="text-4xl">{children}</h4>;
};

export const WorkflowAnimatedContentParagraph = ({
  children,
}: PropsWithChildren) => {
  return <p className="">{children}</p>;
};

export const WorkflowsAnimatedList = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
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

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="grid grid-cols-[1.3fr_1fr] gap-x-20">
      <WorkflowAnimatedImage style={{ opacity: activeIndex === 0 ? 1 : 0 }}>
        <div className="w-full bg-green-400 aspect-square rounded-lg" />
      </WorkflowAnimatedImage>

      <WorkflowAnimatedContent
        activeIndex={activeIndex}
        index={0}
        ref={(el) => {
          if (!el) return;
          contentRefs.current[0] = el;
        }}
      >
        <WorkflowAnimatedContentHeading>
          Lorem ipsum dolor sit amet.
        </WorkflowAnimatedContentHeading>

        <WorkflowAnimatedContentParagraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          assumenda aut autem consequuntur debitis dignissimos distinctio dolore
          dolorum est in inventore, ipsam necessitatibus, nesciunt officiis
          pariatur placeat reiciendis, ut vel.
        </WorkflowAnimatedContentParagraph>
      </WorkflowAnimatedContent>

      <WorkflowAnimatedImage style={{ opacity: activeIndex === 1 ? 1 : 0 }}>
        <div className="w-full bg-blue-400 aspect-square rounded-lg" />
      </WorkflowAnimatedImage>

      <WorkflowAnimatedContent
        activeIndex={activeIndex}
        index={1}
        ref={(el) => {
          if (!el) return;
          contentRefs.current[1] = el;
        }}
      >
        <WorkflowAnimatedContentHeading>
          Lorem ipsum dolor.
        </WorkflowAnimatedContentHeading>

        <WorkflowAnimatedContentParagraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          assumenda aut autem consequuntur debitis dignissimos distinctio dolore
          dolorum est in inventore, ipsam necessitatibus, nesciunt officiis
          pariatur placeat reiciendis, ut vel.
        </WorkflowAnimatedContentParagraph>
      </WorkflowAnimatedContent>

      <WorkflowAnimatedImage style={{ opacity: activeIndex === 2 ? 1 : 0 }}>
        <div className="w-full bg-red-400 aspect-square rounded-lg" />
      </WorkflowAnimatedImage>

      <WorkflowAnimatedContent
        activeIndex={activeIndex}
        index={2}
        ref={(el) => {
          if (!el) return;
          contentRefs.current[2] = el;
        }}
      >
        <WorkflowAnimatedContentHeading>
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </WorkflowAnimatedContentHeading>

        <WorkflowAnimatedContentParagraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          assumenda aut autem consequuntur debitis dignissimos distinctio dolore
          dolorum est in inventore, ipsam necessitatibus, nesciunt officiis
          pariatur placeat reiciendis, ut vel.
        </WorkflowAnimatedContentParagraph>
      </WorkflowAnimatedContent>
    </div>
  );
};

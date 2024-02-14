import React, { useEffect, useState } from "react";
import clsx from "clsx";

export const InfiniteCardsCarousel = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    type: string;
    description: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "120s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "160s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={clsx(
        "scroller relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={clsx(
          "flex min-w-full shrink-0 gap-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className="bg-zinc-900/50 w-[350px] max-w-full relative rounded-lg border border-neutral-950 hover:border-neutral-900 flex-shrink-0 p-6 md:w-[450px]"
            key={item.type}
          >
            <article>
              <h5 className="text-white capitalize">
                {item.type.split("_").join(" ")}
              </h5>
              <p className="text-sm">{item.description}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};

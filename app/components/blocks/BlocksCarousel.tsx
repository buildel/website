import React from "react";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface BlocksCarouselProps {
  direction?: "ltr" | "rtl";
}

export const BlocksCarousel: React.FC<BlocksCarouselProps> = ({
  direction = "ltr",
}) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, direction, align: "end" }, [
    Autoplay({ delay: 1500 }),
  ]);

  return (
    <div className="overflow-hidden w-full max-w-[3000px]" ref={emblaRef}>
      <div className="flex" dir={direction}>
        {[...Array(15)].map((_, index) => (
          <Slide key={index} />
        ))}
      </div>
    </div>
  );
};

function Slide() {
  return (
    <div className="flex-grow h-[150px] p-4 rounded-lg bg-zinc-900/50 border border-neutral-950 hover:border-neutral-900 lg:p-6 mr-4 transition w-[250px] min-w-[250px] md:w-[400px] md:min-w-[400px] ">
      BLOCK
    </div>
  );
}

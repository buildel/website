import React from "react";
import { InfiniteCardsCarousel } from "~/components/blocks/BlocksCarousel";

const blocks = [
  {
    name: "Charles Dickens",
  },
  {
    name: "Charles Dickens",
  },
  {
    name: "Charles Dickens",
  },
  {
    name: "Charles Dickens",
  },
  {
    name: "Charles Dickens",
  },
];

export const BlocksSection: React.FC = () => {
  return (
    <section>
      <header className="mb-4 lg:mb-14 text-center p-4">
        <h2 className="text-4xl max-w-[800px] mx-auto text-center mb-2">
          Over 30 blocks
        </h2>
        <p className="text-sm md:text-base max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fuga
          pariatur repellendus. Ad asperiores beatae facilis id, illo molestiae
          qui.
        </p>
      </header>

      <div className="relative flex flex-col gap-3">
        <InfiniteCardsCarousel items={blocks} direction="right" speed="slow" />

        <InfiniteCardsCarousel items={blocks} direction="left" speed="normal" />
      </div>
    </section>
  );
};

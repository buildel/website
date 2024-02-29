import { useLoaderData } from "@remix-run/react";
import { loader } from "~/routes/new";
import { useMemo, useState } from "react";
import { Tab } from "~/components/shared/Tab";
import { Button } from "~/components/shared/Button";

const categories = ["Communication", "Audio", "Text"] as const;
type Category = (typeof categories)[number];

export const Blocks = () => {
  const { blockTypes } = useLoaderData<typeof loader>();

  const [activeCategory, setActiveCategory] =
    useState<Category>("Communication");

  const filteredBlocks = useMemo(() => {
    return blockTypes.filter((block) => {
      if (activeCategory === "Communication") {
        return block.groups.includes("llms");
      }
      if (activeCategory === "Audio") {
        return block.groups.includes("audio");
      }
    });
  }, [blockTypes, activeCategory]);

  console.log("filtered", filteredBlocks);

  console.log(blockTypes);

  return (
    <section className="layout flex flex-col items-center py-20">
      <h2 className="h2-mobile lg:h2-desktop text-neutral-950">
        Over <span className="gradient-text">20 blocks</span> to fulfill your
        needs
      </h2>

      <div className="flex items-center p-1 rounded-full bg-neutral-50 mt-10">
        {categories.map((category, index) => (
          <Tab
            key={index}
            gradientText
            active={category === activeCategory}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Tab>
        ))}
      </div>

      <div className="w-3/4 min-h-[250px] grid grid-cols-2 gap-x-5 gap-y-10 mt-10">
        {filteredBlocks.map((block) => (
          <div key={block.type} className="text-neutral-950">
            <p className="capitalize text-xl font-primaryExtraBold">
              {block.type.split("_").join(" ")}
            </p>
            <p className="font-secondary mt-3">{block.description}</p>
          </div>
        ))}
      </div>

      <Button mode="dark" href="/docs">
        Read docs
      </Button>
    </section>
  );
};

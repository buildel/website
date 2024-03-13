import { useLoaderData } from "@remix-run/react";
import { loader } from "~/routes/_index";
import { motion } from "framer-motion";
import { listing, listItem } from "~/components/sections/blocks/animations";
import { Button } from "~/components/shared/Button";
import { urls } from "~/utils/urls";

export const Blocks = () => {
  const { blockTypes } = useLoaderData<typeof loader>();

  return (
    <section className="layout flex flex-col items-start lg:items-center py-20">
      <h2 className="h2-mobile lg:h2-desktop text-neutral-950">
        Over <span className="gradient-text">20 blocks</span> to fulfill your
        needs
      </h2>

      <motion.div
        variants={listing}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full grid lg:w-3/4 min-h-[250px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 mb-10"
      >
        {blockTypes.map((block) => (
          <motion.div
            variants={listItem}
            key={block.type}
            className="block-item text-neutral-950 p-4 bg-neutral-50 rounded-lg"
          >
            <p className="capitalize text-xl font-primaryExtraBold">
              {block.type.split("_").join(" ")}
            </p>
            <p className="font-secondary mt-3">{block.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <Button mode="dark" externalHref={urls.documentation.blocks}>
        Read docs
      </Button>
    </section>
  );
};

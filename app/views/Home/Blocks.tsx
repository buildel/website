import { BlockCarousel } from "~/components/sections/blocks/Blocks";
import {
  SectionWrapper,
  SectionHeading,
} from "~/components/layout/Layout.components";
import { useState } from "react";
import { BlockTypeApi } from "~/api/blockTypesApi";
import { useEffect } from "react";
import { BlockType } from "~/api/blockTypes.types";

export function Blocks() {
  const [blocks, setBlocks] = useState<BlockType[]>([]);

  useEffect(() => {
    const blockTypesApi = new BlockTypeApi();
    blockTypesApi.getBlockTypes().then((res) => {
      setBlocks(res.data);
    });
  }, []);

  return (
    <SectionWrapper className="relative min-h-[220px] md:min-h-[300px] flex flex-col items-center justify-center gap-10 py-20 md:py-40">
      <SectionHeading className="text-center max-w-[440px]">
        Over <span className="gradient-text">{blocks.length} blocks </span>
        to fulfill your needs
      </SectionHeading>

      <div className="hidden md:block absolute z-[12] bottom-0 left-0 top-0 w-[250px] lg:w-[400px] bg-gradient-to-r from-white to-transparent pointer-events-none" />

      <div className="hidden md:block absolute z-[12] bottom-0 right-0 top-0 w-[250px] lg:w-[400px] bg-gradient-to-l from-white to-transparent pointer-events-none" />

      <BlockCarousel blocks={blocks} />
    </SectionWrapper>
  );
}

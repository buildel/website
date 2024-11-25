import {
  BlockCarousel,
  BlockCarouselProps,
} from "~/components/sections/blocks/Blocks";
import {
  SectionWrapper,
  SectionHeading,
} from "~/components/layout/Layout.components";

export function Blocks({ blocks }: BlockCarouselProps) {
  return (
    <SectionWrapper className="min-h-[220px] md:min-h-[300px] flex flex-col items-center justify-center gap-10 py-20 md:py-40">
      <SectionHeading className="text-center max-w-[440px]">
        Over <span className="gradient-text">{blocks.length} blocks </span>
        to fulfill your needs
      </SectionHeading>

      <BlockCarousel blocks={blocks} />
    </SectionWrapper>
  );
}

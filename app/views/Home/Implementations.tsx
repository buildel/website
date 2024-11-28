import {
  implementationCarousel,
  ImplementationCarousel,
} from "~/components/sections/implementations/Implementations.components";
import {
  SectionWrapper,
  SectionTLCross,
  SectionTRCross,
} from "~/components/layout/Layout.components";

export function ImplementationSection() {
  return (
    <SectionWrapper className="relative py-14 md:py-16 border-b">
      <div className="layout absolute w-full h-full border-x top-0 left-1/2 -translate-x-1/2 z-[10]">
        <SectionTLCross />
        <SectionTRCross />
      </div>

      <ImplementationCarousel implementations={implementationCarousel} />

      <div className="hidden absolute bottom-0 left-0 top-0 md:block w-[150px] lg:w-[300px] bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 top-0 w-[150px] lg:w-[300px] bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </SectionWrapper>
  );
}

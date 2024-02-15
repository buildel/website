import React from "react";
import {
  Section,
  SectionHeader,
  SectionHeading,
  SectionSubheading,
  TextAccent,
} from "~/components/layout/Layout.components";
interface ElSectionProps {}

export const ElSection: React.FC<ElSectionProps> = () => {
  return (
    <Section className="relative">
      <SectionHeader className="text-center mb-10 lg:mb-14">
        <SectionHeading className="relative text-3xl md:text-5xl mb-2">
          Use <TextAccent>EL</TextAccent> to build workflows
        </SectionHeading>
        <SectionSubheading className="text-sm md:text-base max-w-3xl mx-auto">
          You can use EL to build sophisticated workflows that fulfill all your
          needs. No need to write code, just ask EL to do it for you.
        </SectionSubheading>
      </SectionHeader>

      <div className="items-center flex justify-center mt-8 p-4 overflow-hidden">
        <img src="/assets/EL.png" className="rounded-lg" />
      </div>
    </Section>
  );
};

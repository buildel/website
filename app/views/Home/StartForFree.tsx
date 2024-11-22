import { Button } from "~/components/shared/New-button";
import { BasicLink } from "~/components/shared/BasicLink";
import {
  Section,
  SectionHeading,
  SectionWrapper,
  SectionTLCross,
  SectionTRCross,
} from "~/components/layout/Layout.components";

export function StartForFreeSection() {
  return (
    <SectionWrapper className="border-b">
      <Section className="border-x bg-secondary flex flex-col items-center justify-center py-14 md:py-20">
        <SectionHeading className="text-center mb-6">
          <span>
            Get Started for <span className="gradient-text">Free</span>
          </span>
        </SectionHeading>

        <p className="text-xl md:text-2xl text-center max-w-[800px] mb-6">
          Start for free with BuildEL and effortlessly create advanced AI
          solutions without coding.
        </p>

        <Button asChild size="xl">
          <BasicLink to="https://app.buildel.ai" target="_blank">
            Start for free
          </BasicLink>
        </Button>
        <SectionTLCross />
        <SectionTRCross />
      </Section>
    </SectionWrapper>
  );
}

import { Section, SectionWrapper } from "~/components/layout/Layout.components";
import {
  HeroButtonsWrapper,
  HeroContentInnerWrapper,
  HeroContentWrapper,
  HeroHeading,
  HeroSubheading,
} from "~/components/sections/hero/Hero.components";
import { BasicLink } from "~/components/shared/BasicLink";
import { Button } from "~/components/shared/Button";

import { PricingList } from "~/views/Pricing/Pricing.components";

export const Hero = () => {
  return (
    <SectionWrapper className="border-b overflow-hidden">
      <Section className="relative flex gap-20 md:gap-10 items-center justify-between pt-[140px] pb-20 md:pt-[160px] border-x flex-col md:flex-row">
        <img
          alt="background dots"
          src="/new/dots.png"
          className="absolute top-0 left-0 right-0 bottom-0 h-full w-full pointer-events-none"
        />
        <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-white to-transparent pointer-events-none" />

        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-white to-transparent pointer-events-none" />

        <div className="absolute bottom-0 left-0 top-0 w-[200px] bg-gradient-to-r from-white to-transparent pointer-events-none" />

        <div className="absolute bottom-0 right-0 top-0 w-[200px] bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <HeroContentWrapper className="relative">
          <HeroContentInnerWrapper>
            <HeroHeading className="text-center max-w-[500px] md:text-left">
              Get Started with Completely{" "}
              <span className="gradient-text">Free</span> Access{" "}
            </HeroHeading>

            <HeroSubheading className="sm:max-w-[460px] text-center md:text-left">
              Open for everyone, from solo creators to large enterprises!
            </HeroSubheading>

            <HeroButtonsWrapper>
              <Button asChild size="xl">
                <BasicLink to="https://app.buildel.ai/register" target="_blank">
                  Get started free
                </BasicLink>
              </Button>

              <Button asChild variant="outline" size="xl">
                <BasicLink
                  to="https://forms.gle/ZYJKCNuX4XySTdMz7"
                  target="_blank"
                >
                  Book a demo
                </BasicLink>
              </Button>
            </HeroButtonsWrapper>
          </HeroContentInnerWrapper>
        </HeroContentWrapper>

        <div className="relative grow">
          <PricingList />
        </div>
      </Section>
    </SectionWrapper>
  );
};

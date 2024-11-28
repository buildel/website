import { BasicLink } from "~/components/shared/BasicLink";
import { AnimatedWords } from "~/components/sections/hero/Hero";
import { Button } from "~/components/shared/Button";
import { SectionWrapper, Section } from "~/components/layout/Layout.components";
import {
  HeroButtonsWrapper,
  HeroContentInnerWrapper,
  HeroContentWrapper,
  HeroHeading,
  HeroSubheading,
} from "~/components/sections/hero/Hero.components";

export const Hero = () => {
  return (
    <SectionWrapper className="overflow-hidden border-b">
      <Section className="relative flex gap-4 sm:gap-6 md:gap-8 items-center justify-between pt-[160px] pb-20 md:pt-[200px] md:pb-[140px] border-x flex-col">
        <img
          alt="background dots"
          src="/new/dots.png"
          className="absolute top-0 left-0 right-0 bottom-0 h-full w-full pointer-events-none"
        />
        <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-white to-transparent pointer-events-none" />

        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-white to-transparent pointer-events-none" />

        <div className="absolute bottom-0 left-0 top-0 w-[200px] bg-gradient-to-r from-white to-transparent pointer-events-none" />

        <div className="absolute bottom-0 right-0 top-0 w-[200px] bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <HeroContentWrapper className="relative items-center">
          <HeroContentInnerWrapper className="items-center justify-center">
            <HeroHeading className="text-center max-w-[500px] w-full block">
              <span className="block">News for </span>
              <AnimatedWords words={["marketeers", "engineers", "sales"]} />
            </HeroHeading>

            <HeroSubheading className="sm:max-w-[460px] text-center mx-auto">
              The latest news from BuildEL
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
      </Section>
    </SectionWrapper>
  );
};

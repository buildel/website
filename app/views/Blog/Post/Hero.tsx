import { AnimatedWords } from "~/components/sections/hero/Hero";
import { SectionWrapper, Section } from "~/components/layout/Layout.components";
import {
  HeroContentInnerWrapper,
  HeroContentWrapper,
  HeroHeading,
  HeroSubheading,
} from "~/components/sections/hero/Hero.components";

export const Hero = ({
  date,
  title: { text, animatedText },
}: {
  date: string;
  title: { text: string; animatedText?: string };
}) => {
  return (
    <SectionWrapper className="overflow-hidden">
      <Section className="relative flex gap-4 sm:gap-6 md:gap-8 items-center justify-between pt-[160px] md:pt-[200px] md:pb-[140px] flex-col">
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
            <HeroSubheading className="sm:max-w-[460px] text-center mx-auto">
              {date}
            </HeroSubheading>

            <HeroHeading className="text-center max-w-[650px] w-full block md:text-6xl">
              {`${text} `}
              {animatedText && (
                <AnimatedWords words={[animatedText, animatedText]} />
              )}
            </HeroHeading>
          </HeroContentInnerWrapper>
        </HeroContentWrapper>
      </Section>
    </SectionWrapper>
  );
};

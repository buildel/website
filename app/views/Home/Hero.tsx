import { Suspense, lazy } from "react";
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
import { WhatsNewBadge } from "~/components/badges/WhatsNew";

const LazyWorkflowImage = lazy(() =>
  import("~/components/icons/Workflow").then((module) => ({
    default: module.Workflow,
  }))
);

export const Hero = () => {
  return (
    <SectionWrapper className="border-b overflow-hidden">
      <Section className="relative flex gap-4 sm:gap-6 md:gap-8 items-center justify-between py-14 md:py-20 border-x flex-col md:flex-row">
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
          <BasicLink
            to="/blog/buildel-0_5"
            className="w-fit block mx-auto md:ml-0"
          >
            <WhatsNewBadge>Whats new? v0.5 is out!</WhatsNewBadge>
          </BasicLink>

          <HeroContentInnerWrapper>
            <HeroHeading className=" text-center max-w-[300px] md:text-left md:max-w-[360px]">
              <span>AI Automation for </span>
              <AnimatedWords
                words={["everybody", "sales", "engineers", "marketeers", "you"]}
              />
            </HeroHeading>

            <HeroSubheading className="sm:max-w-[460px] text-center md:text-left">
              Boost Efficiency & Automate Tasks: Build Your AI Dream Team in
              Minutes without Writing a Line of Code
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

        <div className="relative">
          <Suspense fallback="">
            <LazyWorkflowImage className="min-w-[350px] min-h-[350px] sm:min-w-[450px] sm:min-h-[450px] md:min-w-[553px] md:min-h-[552px]" />
          </Suspense>
        </div>
      </Section>
    </SectionWrapper>
  );
};

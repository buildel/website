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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/shared/Carousel";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";

const LazyMarketeersWorkflowImage = lazy(() =>
  import("~/components/icons/MarketeersWorkflow").then((module) => ({
    default: module.MarketeersWorkflow,
  }))
);

const LazyEngineersWorkflowImage = lazy(() =>
  import("~/components/icons/EngineersWorkflow").then((module) => ({
    default: module.MarketeersWorkflow,
  }))
);

const LazySalesWorkflowImage = lazy(() =>
  import("~/components/icons/SalesWorkflow").then((module) => ({
    default: module.MarketeersWorkflow,
  }))
);

const slides = [
  { id: 1, component: LazyMarketeersWorkflowImage },
  { id: 2, component: LazyEngineersWorkflowImage },
  { id: 3, component: LazySalesWorkflowImage },
];

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
            <HeroHeading className="text-center max-w-[220px] md:text-left md:max-w-[300px]">
              <span>AI Agents for </span>
              <AnimatedWords words={["marketeers", "engineers", "sales"]} />
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

        <div className="relative w-[350px] h-[350px] md:w-[553px] md:h-[552px] sm:w-[450px] sm:h-[450px]">
          <Suspense fallback="">
            <Carousel
              opts={{
                align: "center",
                loop: true,
                dragFree: false,
              }}
              plugins={[
                Fade(),
                Autoplay({
                  delay: 3000,
                  stopOnFocusIn: false,
                  stopOnMouseEnter: false,
                  stopOnInteraction: false,
                  active: true,
                }),
              ]}
            >
              <CarouselContent className="w-[350px] h-[350px] md:w-[553px] md:h-[552px] sm:w-[450px] sm:h-[450px]">
                {slides.map(({ id, component: Component }) => (
                  <CarouselItem
                    key={id}
                    className="basis-full flex justify-center w-full h-full"
                  >
                    <Component className="w-full h-full" />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </Suspense>
        </div>
      </Section>
    </SectionWrapper>
  );
};

import { cn } from "~/lib/utils";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "~/components/shared/Carousel";
import { BasicLink } from "~/components/shared/BasicLink";
import { Section } from "~/components/layout/Layout.components";
import { useCallback, useEffect, useState } from "react";
import { Button } from "~/components/shared/Button";
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const implementationCarousel = [
  {
    id: "2",
    heading: "Time Reporting Agent",
    content:
      "EL Chrono cut reporting time by 50% with a Slack bot for effortless hour logging.",
    logo: "/assets/clients/Chrono-logo.svg",
  },
  {
    id: "6",
    heading: "Virtual Compliance Officer",
    content:
      "EY enhanced customer support by 60% with a bot that leverages a vast client database to answer user inquiries.",
    logo: "/assets/clients/EY-logo.svg",
  },
  {
    id: "4",
    heading: "Release Note Automation",
    content:
      "BuildEL improved release note preparation with a bot that analyzes recent commits and generates LinkedIn posts.",
    logo: "/buildel-by-elp-logo-black.svg",
  },

  {
    id: "1",
    heading: "Multilingual Website Translation",
    content:
      "BuildEL implemented automation for HubSpot page translations, streamlining the creation of new multilingual content.",
    logo: "/assets/clients/HubSpot_logo.svg",
  },
  {
    id: "3",
    heading: "Invoice Management",
    content:
      "ELPassion enhanced invoicing efficiency by 40% using a bot that automates invoice analysis.",
    logo: "/assets/clients/elp_logo_default.svg",
  },
  {
    id: "5",
    heading: "Podcast Transcription",
    content:
      "Iteracja Podcast streamlined transcription of audio content with a workflow that generates SRT files from uploaded podcasts using Deepgram.",
    logo: "/assets/clients/Iteracja.svg",
  },
];

interface ImplementationCarouselProps {
  implementations: typeof implementationCarousel;
}

export function ImplementationCarousel({
  implementations,
}: ImplementationCarouselProps) {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const onPrev = () => {
    api?.scrollPrev();
  };

  const onNext = () => {
    api?.scrollNext();
  };

  const onSelect = useCallback((api: CarouselApi | null) => {
    if (!api) return;

    setCanScrollNext(api.canScrollNext());
    setCanScrollPrev(api.canScrollPrev());
    setScrollSnaps(api.scrollSnapList());
    setActiveIndex(api.selectedScrollSnap());
  }, []);

  const onDotClick = (index: number) => {
    if (!api) return;

    api.scrollTo(index);
  };

  useEffect(() => {
    if (!api) return;

    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <>
      <Section className="mb-3 flex justify-center md:justify-end gap-2">
        <Button
          size="sm"
          variant="ghost"
          disabled={!canScrollPrev}
          onClick={onPrev}
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button
          size="sm"
          variant="ghost"
          disabled={!canScrollNext}
          onClick={onNext}
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </Section>

      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
        }}
        className="w-full relative z-[11]"
      >
        <CarouselContent className="ml-6 mr-8 lg:ml-40 lg:mr-40">
          {implementations.map(({ heading, id, content, logo }) => (
            <CarouselItem
              key={id}
              className="basis-full md:basis-1/2 2xl:basis-1/3 4xl:basis-1/5 pl-4 lg:pl-6"
            >
              <BasicLink to="#">
                <ImplementationCarouselItem>
                  <ImplementationCarouselContentWrapper>
                    <ImplementationCarouselItemHeading className="mb-2">
                      {heading}
                    </ImplementationCarouselItemHeading>
                    <ImplementationCarouselItemContent>
                      {content}
                    </ImplementationCarouselItemContent>
                  </ImplementationCarouselContentWrapper>

                  <ImplementationCarouselItemLogo src={logo} alt={heading} />
                </ImplementationCarouselItem>
              </BasicLink>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Section className="mt-4 min-h-[10px]">
        <div className="md:mr-2 w-full flex justify-center md:justify-end gap-2">
          {scrollSnaps.length > 1
            ? scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Go to slide ${index + 1}`}
                  className={cn(
                    "rounded-full w-2.5 h-2.5 border-2 transition",
                    {
                      "border-input hover:border-foreground/50":
                        index !== activeIndex,
                      "border-foreground/50": index === activeIndex,
                    }
                  )}
                  onClick={() => onDotClick(index)}
                />
              ))
            : null}
        </div>
      </Section>
    </>
  );
}

export function ImplementationCarouselContentWrapper({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col gap-1 md:gap-3", className)} {...rest} />
  );
}

export function ImplementationCarouselItemLogo({
  className,
  src,
  ...rest
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src={src}
      height={24}
      className={cn(
        "opacity-20 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition h-6 max-w-fit object-contain object-left",
        className
      )}
      {...rest}
    />
  );
}

type ImplementationCarouselItemProps = React.HTMLAttributes<HTMLDivElement>;

export function ImplementationCarouselItem({
  className,
  children,
  ...rest
}: ImplementationCarouselItemProps) {
  return (
    <article
      className={cn(
        "min-h-[200px] md:min-h-[210px] 2xl:min-h-[235px] border bg-white rounded-xl p-4 lg:p-6 flex flex-col gap-2 justify-between group ",
        className
      )}
      {...rest}
    >
      {children}
    </article>
  );
}

export function ImplementationCarouselItemHeading({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-foreground font-semibold text-lg md:text-xl",
        className
      )}
      {...rest}
    >
      {children}
    </h3>
  );
}

export function ImplementationCarouselItemContent({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-sm md:text-base text-neutral-500 font-light line-clamp-3",
        className
      )}
      {...rest}
    >
      {children}
    </p>
  );
}

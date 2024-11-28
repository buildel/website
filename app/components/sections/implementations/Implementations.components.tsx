import { cn } from "~/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/shared/Carousel";
import { BasicLink } from "~/components/shared/BasicLink";

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
  return (
    <Carousel
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
      className={cn(
        "opacity-20 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition h-6 w-fit",
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
        "min-h-[200px] md:min-h-[210px] 2xl:min-h-[235px] border bg-white rounded-xl p-4 lg:p-6 flex flex-col gap-2 justify-between group",
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
        "text-sm md:text-base text-neutral-500 font-light",
        className
      )}
      {...rest}
    >
      {children}
    </p>
  );
}

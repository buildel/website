import { cn } from "~/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/shared/Carousel";
import { BasicLink } from "~/components/shared/BasicLink";

export function ImplementationHeading({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <h3 className={cn("text-muted-foreground text-base", className)} {...rest}>
      {children}
    </h3>
  );
}

export function ImplementationCarousel() {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-full relative z-[11]"
    >
      <CarouselContent className="ml-10 mr-8 lg:ml-40 lg:mr-40">
        {Array.from({ length: 8 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="basis-full md:basis-1/2 2xl:basis-1/3 4xl:basis-1/5 pl-4 lg:pl-6"
          >
            <BasicLink to="#">
              <ImplementationCarouselItem>
                <ImplementationCarouselContentWrapper>
                  <ImplementationCarouselItemHeading className="mb-3">
                    Turn Yourself into a Lego Figure
                  </ImplementationCarouselItemHeading>
                  <ImplementationCarouselItemContent>
                    BuildEL is a platform that allows you to create your own AI
                    workflows without writing a single line of code.
                  </ImplementationCarouselItemContent>
                </ImplementationCarouselContentWrapper>

                <ImplementationCarouselItemLogo />
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
  ...rest
}: React.HTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src={`/assets/clients/elp_logo_default.svg`}
      className={cn(
        "opacity-20 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition h-5 w-fit",
        className
      )}
      alt="EL Passion logo"
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
        "min-h-[160px] md:min-h-[210px] border bg-white rounded-xl p-4 lg:p-6 flex flex-col justify-between group",
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

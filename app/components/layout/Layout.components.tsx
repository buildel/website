import { forwardRef } from "react";
import { cn } from "~/lib/utils";
import { X } from "lucide-react";

export const SectionWrapper = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(
  (
    {
      children,
      className,

      ...rest
    },
    ref
  ) => {
    return (
      <div ref={ref} className={cn("", className)} {...rest}>
        {children}
      </div>
    );
  }
);

SectionWrapper.displayName = "SectionWrapper";

export function Section({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section className={cn("layout z-10 relative", className)} {...rest}>
      {children}
    </section>
  );
}

export function SectionHeading({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "text-3xl md:text-4xl font-bold text-foreground",
        className
      )}
      {...rest}
    >
      {children}
    </h2>
  );
}

export function SectionTLCross({
  className,
  ...rest
}: React.HTMLAttributes<SVGAElement>) {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <X
      className={cn(
        "hidden lg:block absolute top-0 left-0 z-[10] text-muted-foreground rotate-45 -translate-x-1/2 -translate-y-1/2",
        className
      )}
      {...rest}
    />
  );
}

export function SectionTRCross({
  className,
  ...rest
}: React.HTMLAttributes<SVGAElement>) {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <X
      className={cn(
        "hidden lg:block absolute top-0 right-0 z-[10] text-muted-foreground rotate-45 translate-x-1/2 -translate-y-1/2",
        className
      )}
      {...rest}
    />
  );
}

export function MainWrapper({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <main
      className={cn("bg-white w-full min-h-[100dvh] pt-[64px]", className)}
      {...rest}
    >
      {children}
    </main>
  );
}

import { cn } from "~/lib/utils";

export function HeroButtonsWrapper({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center gap-2 sm:gap-4", className)}
      {...rest}
    >
      {children}
    </div>
  );
}

export function HeroSubheading({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-base md:text-lg text-muted-foreground", className)}
      {...rest}
    >
      {children}
    </p>
  );
}

export function HeroHeading({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "text-4xl md:text-5xl font-bold text-foreground md:leading-[64px]",
        className
      )}
      {...rest}
    >
      {children}
    </h1>
  );
}

export function HeroContentWrapper({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col gap-3", className)} {...rest}>
      {children}
    </div>
  );
}

export function HeroContentInnerWrapper({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 md:gap-6 items-center md:items-start",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

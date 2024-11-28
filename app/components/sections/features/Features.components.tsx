import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "~/lib/utils";
import { Section, SectionHeading } from "~/components/layout/Layout.components";

export function ParallaxImage({
  className,
  targetRef,
  range = [200, -250],
  ...rest
}: React.ImgHTMLAttributes<HTMLImageElement> & {
  targetRef?: React.RefObject<HTMLDivElement>;
  className?: string;
  range?: number[];
}) {
  const { scrollYProgress } = useScroll({ target: targetRef });
  const y = useTransform(scrollYProgress, [0, 1], range);

  return (
    <div className={cn(className)}>
      <motion.img
        style={{ y: y }}
        className="shadow-2xl rounded-2xl w-full"
        {...rest}
      />
    </div>
  );
}

export function FeaturesImage({
  className,
  ...rest
}: React.ImgHTMLAttributes<HTMLImageElement> & { className?: string }) {
  return <img className={cn("w-full", className)} {...rest} />;
}

export function FeaturesListItem({
  className,
  ...rest
}: React.HTMLAttributes<HTMLLIElement>) {
  return (
    <li
      className={cn(
        "text-base md:text-lg text-muted-foreground ml-5",
        className
      )}
      {...rest}
    />
  );
}

export function FeaturesList({
  className,
  ...rest
}: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      className={cn("flex flex-col gap-1 md:gap-3 list-disc", className)}
      {...rest}
    />
  );
}

export function FeaturesHeading({
  className,
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <SectionHeading className={cn("max-w-[600px]", className)} {...rest} />
  );
}

export function FeaturesSection({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Section
      className={cn(
        "border-x grid grid-cols-1 md:grid-cols-[2fr_3fr] items-center gap-10 md:gap-4 py-[100px] md:py-[200px] lg:gap-20",
        className
      )}
      {...rest}
    />
  );
}

export function FeaturesContentWrapper({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col gap-4 md:gap-8", className)} {...rest} />
  );
}

export function FeaturesImagesWrapper({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(className)} {...rest} />;
}

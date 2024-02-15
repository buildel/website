import React, { PropsWithChildren } from "react";
import clsx from "clsx";

export const SectionWrapper: React.FC<
  PropsWithChildren<SectionWrapperProps>
> = ({ children, className }) => {
  return (
    <div className={clsx("p-4 md:p-6 mx-auto max-w-7xl", className)}>
      {children}
    </div>
  );
};

interface SectionProps {
  className?: string;
}

export const Section: React.FC<PropsWithChildren<SectionProps>> = ({
  children,
  className,
}) => {
  return <section className={className}>{children}</section>;
};

interface SectionHeaderProps {
  className?: string;
}

export const SectionHeader: React.FC<PropsWithChildren<SectionHeaderProps>> = ({
  className,
  children,
}) => {
  return <header className={clsx("text-center", className)}>{children}</header>;
};

interface TextAccentProps {
  className?: string;
}

export const TextAccent: React.FC<PropsWithChildren<TextAccentProps>> = ({
  children,
  className,
}) => {
  return (
    <span className={clsx("text-secondary-500", className)}>{children}</span>
  );
};

interface SectionHeadingProps {
  className?: string;
}

export const SectionHeading: React.FC<
  PropsWithChildren<SectionHeadingProps>
> = ({ children, className }) => {
  return (
    <h2 className={clsx("text-3xl md:text-5xl mb-2", className)}>{children}</h2>
  );
};

interface SectionSubheadingProps {
  className?: string;
}

export const SectionSubheading: React.FC<
  PropsWithChildren<SectionSubheadingProps>
> = ({ children, className }) => {
  return (
    <p className={clsx("text-sm md:text-base max-w-3xl mx-auto", className)}>
      {children}
    </p>
  );
};

interface SectionWrapperProps extends PropsWithChildren {
  className?: string;
}

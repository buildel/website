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

export const Section: React.FC<PropsWithChildren> = ({ children }) => {
  return <section>{children}</section>;
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

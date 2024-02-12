import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Hero } from "~/components/hero/Hero";
import { Navigation } from "~/components/layout/Navigation";
import { Logo } from "~/icons/Logo";
import { PropsWithChildren } from "react";
import { ClientsBanner } from "~/components/clients/ClientsBanner";
import clsx from "clsx";
import { Button } from "~/components/buttons/Button";
import { Interfaces } from "~/components/interfaces/Interfaces";

export const meta: MetaFunction = () => {
  return [
    { title: "Buildel" },
    { name: "description", content: "Build your own AI app without hassle." },
  ];
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,700&display=swap",
    },
  ];
};
export default function Index() {
  return (
    <main className="min-h-[200vh]">
      <div className="border-b border-neutral-950 sticky top-0 left-0 z-20 w-full bg-dark">
        <SectionWrapper>
          <header className="flex gap-4 justify-between items-center">
            <Logo className="h-[12px]" />

            <div className="flex items-center gap-6">
              <Navigation />

              <Button variant="basic" type="filled" className="!py-2">
                Sign up
              </Button>
            </div>
          </header>
        </SectionWrapper>
      </div>

      <div className="relative py-10 lg:py-20">
        <DotsMask />

        <SectionWrapper className="relative">
          <CircleMask />

          <Hero />
        </SectionWrapper>
      </div>

      <SectionWrapper className="lg:p-12">
        <ClientsBanner />
      </SectionWrapper>

      <SectionWrapper className="my-10 lg:my-20">
        <Interfaces />
      </SectionWrapper>
    </main>
  );
}

interface SectionWrapperProps extends PropsWithChildren {
  className?: string;
}

function SectionWrapper({ children, className }: SectionWrapperProps) {
  return (
    <div className={clsx("p-4 md:p-6 mx-auto max-w-7xl", className)}>
      {children}
    </div>
  );
}

function DotsMask() {
  return (
    <div className="pointer-events-none absolute z-1 left-0 right-0 top-0 bottom-0 bg-hero-pattern bg-no-repeat bg-mask" />
  );
}

function CircleMask() {
  return (
    <div className="hidden pointer-events-none test-mask z-0 w-[800px] h-[800px] absolute -left-1/4 -top-1/3  bg-no-repeat md:block" />
  );
}

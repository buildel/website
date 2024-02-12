import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Hero } from "~/components/hero/Hero";
import { Navigation } from "~/components/layout/Navigation";
import { Logo } from "~/icons/Logo";
import React, { PropsWithChildren } from "react";
import { ClientsBanner } from "~/components/clients/ClientsBanner";
import clsx from "clsx";
import { Button } from "~/components/buttons/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
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
            <Logo className="text-white w-[84px] min-w-[84px]" />

            <div className="flex items-center gap-6">
              <Navigation />

              <Button variant="basic" type="filled" className="!py-2">
                Sign up
              </Button>
            </div>
          </header>
        </SectionWrapper>
      </div>

      <div className="relative py-10 lg:py-20 xl:py-24">
        <div className="absolute z-1 left-0 right-0 top-0 bottom-0 bg-hero-pattern bg-no-repeat bg-mask" />
        <SectionWrapper>
          <Hero />
        </SectionWrapper>
      </div>

      <div className="bg-neutral-950">
        <SectionWrapper className="lg:p-12">
          <ClientsBanner />
        </SectionWrapper>
      </div>
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

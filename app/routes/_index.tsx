import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Header } from "~/components/layout/Header";
import { Hero } from "~/components/hero/Hero";
import { Navigation } from "~/components/layout/Navigation";
import { Logo } from "~/icons/Logo";
import { PropsWithChildren } from "react";
import { ClientsBanner } from "~/components/clients/ClientsBanner";
import clsx from "clsx";

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
      <div className="border-b border-neutral-950 sticky top-0 left-0 w-full bg-dark">
        <SectionWrapper>
          <Header>
            <Logo className="text-white w-[84px] min-w-[84px]" />

            <div className="flex gap-6">
              <Navigation />

              <div className="flex gap-2">
                <button>CTA1</button>
                <button>CTA2</button>
              </div>
            </div>
          </Header>
        </SectionWrapper>
      </div>

      <SectionWrapper className="my-10 lg:my-20 xl:my-24">
        <Hero />
      </SectionWrapper>

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

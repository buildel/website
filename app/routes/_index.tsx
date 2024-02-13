import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Hero } from "~/components/hero/Hero";
import { Navigation } from "~/components/layout/Navigation";
import { Logo } from "~/icons/Logo";
import { PropsWithChildren } from "react";
import { ClientsBanner } from "~/components/clients/ClientsBanner";
import clsx from "clsx";
import { Button } from "~/components/buttons/Button";
import { Interfaces } from "~/components/interfaces/Interfaces";
import { Discord } from "~/icons/Discord";
import { Code } from "~/icons/Code";
import { Workflows } from "~/components/workflows/Workflows";
import { BlocksCarousel } from "~/components/blocks/BlocksCarousel";

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
    <>
      <div className="border-b border-neutral-900 sticky top-0 left-0 z-20 w-full bg-dark">
        <SectionWrapper>
          <header className="flex gap-4 justify-between items-center">
            <Logo className="h-[12px]" />

            <div className="flex items-center gap-6">
              <Navigation />

              <Button variant="basic" type="filled" className="!py-1">
                Sign up
              </Button>
            </div>
          </header>
        </SectionWrapper>
      </div>

      <main>
        <DotsMask />

        <div className="relative py-10 lg:py-20">
          <SectionWrapper className="relative">
            <CircleMask />

            <Hero />
          </SectionWrapper>
        </div>

        <SectionWrapper className="lg:p-12">
          <ClientsBanner />
        </SectionWrapper>

        <div className="colored-gradient my-10 lg:my-20">
          <SectionWrapper className="py-10 lg:pt-20 lg:pb-24">
            <Interfaces />
          </SectionWrapper>
        </div>

        {/*<div className="test mt-10 lg:mt-20">*/}
        {/*  <SectionWrapper className="py-10 lg:py-24 h-[50vh]">*/}
        {/*    <p>aaa</p>*/}
        {/*  </SectionWrapper>*/}
        {/*</div>*/}

        <SectionWrapper className="py-10 lg:pt-20 lg:pb-24">
          <section>
            <header className="text-center">
              <h2 className="text-3xl md:text-5xl mb-2">
                From idea to production, fast.
              </h2>
              <p className="text-sm md:text-base max-w-3xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                fuga pariatur repellendus. Ad asperiores beatae facilis id, illo
                molestiae qui.
              </p>
            </header>

            <div className="relative mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:mt-16">
              <div className="hidden pointer-events-none radial-mask z-0 w-[800px] aspect-square lg:w-[1000px] absolute top-1/4 right-1/2 translate-x-1/2 bg-no-repeat md:block" />

              <article className="relative p-4 rounded-lg bg-zinc-900/50 border border-neutral-950 hover:border-neutral-900 lg:p-6">
                <header className="mb-2 flex flex-col gap-2">
                  <Code className="w-6 h-6" />
                  <h3 className="text-xl">No Code Required</h3>
                </header>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores, laborum veritatis? Delectus excepturi nostrum
                  quaerat.
                </p>
              </article>

              <article className="relative p-4 rounded-lg bg-zinc-900/50 border border-neutral-950 hover:border-neutral-900 lg:p-6">
                <header className="mb-2 flex flex-col gap-2">
                  <Code className="w-6 h-6" />
                  <h3 className="text-xl">Pre-built Use Cases</h3>
                </header>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores, laborum veritatis? Delectus excepturi nostrum
                  quaerat.
                </p>
              </article>

              <article className="relative p-4 rounded-lg bg-zinc-900/50 border border-neutral-950 hover:border-neutral-900 lg:p-6">
                <header className="mb-2 flex flex-col gap-2">
                  <Code className="w-6 h-6" />
                  <h3 className="text-xl">White-Glove Support</h3>
                </header>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores, laborum veritatis? Delectus excepturi nostrum
                  quaerat.
                </p>
              </article>

              <article className="relative p-4 rounded-lg bg-zinc-900/50 border border-neutral-950 hover:border-neutral-900 lg:p-6">
                <header className="mb-2 flex flex-col gap-2">
                  <Code className="w-6 h-6" />
                  <h3 className="text-xl">White-Glove Support</h3>
                </header>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores, laborum veritatis? Delectus excepturi nostrum
                  quaerat.
                </p>
              </article>

              <article className="relative p-4 rounded-lg bg-zinc-900/50 border border-neutral-950 hover:border-neutral-900 lg:p-6">
                <header className="mb-2 flex flex-col gap-2">
                  <Code className="w-6 h-6" />
                  <h3 className="text-xl">White-Glove Support</h3>
                </header>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores, laborum veritatis? Delectus excepturi nostrum
                  quaerat.
                </p>
              </article>

              <article className="relative p-4 rounded-lg bg-zinc-900/50 border border-neutral-950 hover:border-neutral-900 lg:p-6">
                <header className="mb-2 flex flex-col gap-2">
                  <Code className="w-6 h-6" />
                  <h3 className="text-xl">White-Glove Support</h3>
                </header>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores, laborum veritatis? Delectus excepturi nostrum
                  quaerat.
                </p>
              </article>
            </div>
          </section>
        </SectionWrapper>

        <div className="one-step-gradient">
          <SectionWrapper className="py-10 lg:pt-20 lg:pb-24">
            <section className="relative">
              <header className="text-center mb-10 lg:mb-14">
                <h2 className="relative text-3xl md:text-5xl mb-2">
                  Something about <span className="text-secondary-500">EL</span>
                </h2>
                <p className="text-sm md:text-base max-w-3xl mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                  fuga pariatur repellendus. Ad asperiores beatae facilis id,
                  illo molestiae qui.
                </p>
              </header>

              <div className="h-[50vh] bg-zinc-900/80 border border-neutral-950 rounded-lg">
                aaa
              </div>
            </section>
          </SectionWrapper>
        </div>

        <div className="bg-zinc-900 border-b border-neutral-950">
          <SectionWrapper className="py-10 lg:py-24">
            <section className="grid gap-4 grid-cols-1 lg:grid-cols-[1fr_300px] items-center">
              <h2 className="text-2xl md:text-4xl">
                <span className="font-bold">Join our growing community.</span>{" "}
                Find inspiration, support and connect with other builders.
              </h2>

              <a
                href="#"
                className="lg:ml-auto lg:mr-0 bg-white px-5 py-3 rounded text-dark w-fit flex gap-2 items-center lg:text-xl transition"
              >
                <Discord className="w-6 h-6 lg:w-8 lg:h-8" /> Join on Discord
              </a>
            </section>
          </SectionWrapper>
        </div>

        <div className="my-10 lg:my-20 relative ">
          <div className="h-[60vh] w-full absolute top-1/2 left-0 right-0 -translate-y-1/2  z-0 colored-gradient" />

          <SectionWrapper className="relative py-10 lg:pt-20 lg:pb-24">
            <Workflows />
          </SectionWrapper>
        </div>

        <div className="bg-zinc-900 my-10 lg:my-20 py-10 lg:py-24">
          <section>
            <header className="mb-4 lg:mb-14 text-center p-4">
              <h2 className="text-4xl max-w-[800px] mx-auto text-center mb-2">
                Over 30 blocks
              </h2>
              <p className="text-sm md:text-base max-w-3xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                fuga pariatur repellendus. Ad asperiores beatae facilis id, illo
                molestiae qui.
              </p>{" "}
            </header>

            <div className="relative flex flex-col gap-3">
              <BlocksCarousel />

              <BlocksCarousel direction="rtl" />

              <div className="pointer-events-none h-full w-[20%] max-w-[500px] absolute top-0 bottom-0 left-0 bg-gradient-to-r from-zinc-900" />
              <div className="pointer-events-none h-full w-[20%] max-w-[500px] absolute top-0 bottom-0 right-0 bg-gradient-to-l from-zinc-900 " />
            </div>
          </section>
        </div>

        <SectionWrapper className="my-4 lg:my-20 xl:my-24">
          <section className="flex flex-col gap-3 items-center lg:gap-8">
            <header>
              <h2 className="text-4xl max-w-[800px] mx-auto text-center">
                Stop struggling with your scripts Start creating workflows 10X
                faster — with n8n
              </h2>
            </header>

            <Button>Start building for free</Button>
          </section>
        </SectionWrapper>
      </main>

      <footer className="h-[20vh] border-t border-neutral-950">
        <SectionWrapper className="py-10 lg:py-24">
          <p>FOOTER</p>
        </SectionWrapper>
      </footer>
    </>
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
    <div className="pointer-events-none absolute z-1 left-0 right-0 top-0 bottom-0 bg-hero-pattern bg-no-repeat dots-mask" />
  );
}

function CircleMask() {
  return (
    <div className="hidden pointer-events-none radial-mask z-0 w-[800px] h-[800px] absolute -left-1/4 -top-1/3 bg-no-repeat md:block" />
  );
}

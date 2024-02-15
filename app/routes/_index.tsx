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
import { BlocksSection } from "~/components/blocks/BlocksSection";
import { json } from "@remix-run/node";
import { BlockTypeApi } from "~/api/blockTypesApi";
import { Puzzle } from "~/icons/Puzzle";
import { DocumentChart } from "~/icons/DocumentChart";
import { ChatBubble } from "~/icons/ChatBubble";
import { LockClosed } from "~/icons/LockClosed";
import { GlobeEurope } from "~/icons/GlobeEurope";
import { Meteors } from "~/components/meteors/Meteors";

export const meta: MetaFunction = () => {
  return [
    { title: "Buildel" },
    { name: "description", content: "Build your own AI app without hassle." },
  ];
};

export async function loader() {
  const blockTypesApi = new BlockTypeApi();
  const res = await blockTypesApi.getBlockTypes();

  return json({ blockTypes: res.data });
}

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
            <Logo className="h-[24px]" />

            <div className="flex items-center gap-6">
              <Navigation />

              <a href="https://app.buildel.ai">
                <Button
                  variant="basic"
                  type="filled"
                  className="!py-1"
                  tabIndex={-1}
                >
                  Sign up
                </Button>
              </a>
            </div>
          </header>
        </SectionWrapper>
      </div>

      <main>
        <DotsMask />

        <div className="overflow-hidden">
          <div className="relative py-10 lg:py-20">
            <SectionWrapper className="relative">
              <CircleMask />

              <Hero />
            </SectionWrapper>
          </div>

          <SectionWrapper className="lg:p-12">
            <ClientsBanner />
          </SectionWrapper>
        </div>

        <div className="colored-gradient my-10 lg:my-20">
          <SectionWrapper className="py-10 lg:pt-20 lg:pb-24">
            <Interfaces />
          </SectionWrapper>
        </div>

        <SectionWrapper className="py-10 lg:pt-20 lg:pb-24">
          <section>
            <header className="text-center">
              <h2 className="text-3xl md:text-5xl mb-2">
                From idea to production, fast.
              </h2>

              <p className="text-sm md:text-base max-w-3xl mx-auto">
                Whether crafting a basic application or architecting an advanced
                AI-driven solution, Buildel supports your development journey at
                every step
              </p>
            </header>

            <div className="relative mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:mt-16">
              <div className="hidden pointer-events-none radial-mask z-0 w-[800px] aspect-square lg:w-[1000px] absolute top-1/4 right-1/2 translate-x-1/2 bg-no-repeat md:block" />

              <article className="group overflow-hidden relative p-4 rounded-lg bg-zinc-900/50 border border-neutral-950 hover:border-neutral-900 lg:p-6">
                <header className="relative z-10 mb-2 flex flex-col gap-2">
                  <Puzzle className="w-6 h-6 mb-2" />

                  <h3 className="text-xl">No Code Required</h3>

                  <p>
                    You don't need to write a single line of code. Just pick and
                    connect the blocks and you are good to go.
                  </p>
                </header>

                <div className="hidden group-hover:block">
                  <Meteors />
                </div>
              </article>

              <article className="group overflow-hidden relative p-4 rounded-lg bg-zinc-900/50 border border-neutral-950 hover:border-neutral-900 lg:p-6">
                <header className="relative z-10 mb-2 flex flex-col gap-2">
                  <DocumentChart className="w-6 h-6 mb-2" />

                  <h3 className="text-xl">Pre-built Use Cases</h3>
                  <p>
                    We have pre-built use cases that you can use to get started
                    quickly.
                  </p>
                </header>

                <div className="hidden group-hover:block">
                  <Meteors />
                </div>
              </article>

              <article className="group overflow-hidden relative p-4 rounded-lg bg-zinc-900/50 border border-neutral-950 hover:border-neutral-900 lg:p-6">
                <header className="relative z-10 mb-2 flex flex-col gap-2">
                  <LockClosed className="w-6 h-6 mb-2" />

                  <h3 className="text-xl">Bring Your Own Keys</h3>
                  <p>
                    You can use your own API keys for the blocks that need them.
                  </p>
                </header>

                <div className="hidden group-hover:block">
                  <Meteors />
                </div>
              </article>

              <article className="group overflow-hidden relative p-4 rounded-lg bg-zinc-900/50 border border-neutral-950 hover:border-neutral-900 lg:p-6">
                <header className="relative z-10 mb-2 flex flex-col gap-2">
                  <Code className="w-6 h-6 mb-2" />

                  <h3 className="text-xl">Open Source</h3>
                  <p>
                    Buildel is open source. You can host it for free on your own
                    and contribute to it.
                  </p>
                </header>

                <div className="hidden group-hover:block">
                  <Meteors />
                </div>
              </article>

              <article className="group overflow-hidden relative p-4 rounded-lg bg-zinc-900/50 border border-neutral-950 hover:border-neutral-900 lg:p-6">
                <header className="relative z-10 mb-2 flex flex-col gap-2">
                  <GlobeEurope className="w-6 h-6 mb-2" />

                  <h3 className="text-xl">Multiple Providers</h3>
                  <p>
                    We support multiple providers for the same type of block.
                    Use OpenAI, Google, Mistral and many more.
                  </p>
                </header>

                <div className="hidden group-hover:block">
                  <Meteors />
                </div>
              </article>

              <article className="group overflow-hidden relative p-4 rounded-lg bg-zinc-900/50 border border-neutral-950 hover:border-neutral-900 lg:p-6">
                <header className="relative z-10 mb-2 flex flex-col gap-2">
                  <ChatBubble className="w-6 h-6 mb-2" />

                  <h3 className="text-xl">Different Interfaces</h3>
                  <p>
                    You can build different interfaces for the same workflow.
                    Use chat, api, or any other interface.
                  </p>
                </header>

                <div className="hidden group-hover:block">
                  <Meteors />
                </div>
              </article>
            </div>
          </section>
        </SectionWrapper>

        <div className="one-step-gradient">
          <SectionWrapper className="py-10 lg:pt-20 lg:pb-24">
            <section className="relative">
              <header className="text-center mb-10 lg:mb-14">
                <h2 className="relative text-3xl md:text-5xl mb-2">
                  Use <span className="text-secondary-500">EL</span> to build
                  workflows
                </h2>
                <p className="text-sm md:text-base max-w-3xl mx-auto">
                  You can use EL to build sophisticated workflows that fulfill
                  all your needs. No need to write code, just ask EL to do it
                  for you.
                </p>
                <div className="items-center flex justify-center mt-8 p-4 overflow-hidden">
                  <img src="/assets/EL.png" className="rounded-lg" />
                </div>
              </header>

              {/* <div className="h-[50vh] bg-zinc-900/80 border border-neutral-950 rounded-lg">
                aaa
              </div> */}
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
                href="https://discord.gg/Yzex6E7e"
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
          <BlocksSection />
        </div>

        <SectionWrapper className="my-4 lg:my-20 xl:my-24">
          <section className="flex flex-col gap-3 items-center lg:gap-8">
            <header>
              <h2 className="text-4xl max-w-[800px] mx-auto text-center">
                Bring your AI ideas to life with Buildel
              </h2>
            </header>

            <Button>Start building for free</Button>
          </section>
        </SectionWrapper>
      </main>

      <footer className="border-t border-neutral-950">
        <SectionWrapper className="py-10 lg:py-16">
          <Logo className="w-[80px] text-neutral-100" />

          <p className="text-xs mt-2 max-w-[400px] text-neutral-200">
            Boost Efficiency & Automate Tasks: Build Your AI Dream Team in
            Minutes without Writing a Line of Code
          </p>

          <a
            href="https://discord.gg/Yzex6E7e"
            target="_blank "
            className="text-neutral-200 hover:text-neutral-100"
          >
            <Discord className="w-5 h-5 mt-3" />
          </a>
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

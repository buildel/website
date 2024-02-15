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
import { PropertiesSection } from "~/components/properites/PropertiesSection";
import { SectionWrapper } from "~/components/layout/Layout.components";

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
          <PropertiesSection />
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

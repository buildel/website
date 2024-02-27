import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Hero } from "~/components/hero/Hero";
import { ClientsBanner } from "~/components/clients/ClientsBanner";
import { Button } from "~/components/buttons/Button";
import { Interfaces } from "~/components/interfaces/Interfaces";
import { Workflows } from "~/components/workflows/Workflows";
import { BlocksSection } from "~/components/blocks/BlocksSection";
import { BlockTypeApi } from "~/api/blockTypesApi";
import { PropertiesSection } from "~/components/properites/PropertiesSection";
import { SectionWrapper } from "~/components/layout/Layout.components";
import { LegacyHeader } from "~/components/layout/LegacyHeader";
import { ElSection } from "~/components/el/ElSection";
import { CommunitySection } from "~/components/community/CommunitySection";
import { Footer } from "~/components/layout/Footer";

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
          <LegacyHeader />
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
            <ElSection />
          </SectionWrapper>
        </div>

        <div className="bg-zinc-900 border-b border-neutral-950">
          <SectionWrapper className="py-10 lg:py-24">
            <CommunitySection />
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

      <div className="border-t border-neutral-950">
        <SectionWrapper className="py-10 lg:py-16">
          <Footer />
        </SectionWrapper>
      </div>
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

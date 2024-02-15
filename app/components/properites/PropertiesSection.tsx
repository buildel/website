import React, { PropsWithChildren } from "react";
import { Puzzle } from "~/icons/Puzzle";
import { Meteors } from "~/components/meteors/Meteors";
import { DocumentChart } from "~/icons/DocumentChart";
import { LockClosed } from "~/icons/LockClosed";
import { Code } from "~/icons/Code";
import { GlobeEurope } from "~/icons/GlobeEurope";
import { ChatBubble } from "~/icons/ChatBubble";
import {
  Section,
  SectionHeader,
  SectionHeading,
  SectionSubheading,
} from "~/components/layout/Layout.components";

export const PropertiesSection: React.FC = () => {
  return (
    <Section>
      <SectionHeader>
        <SectionHeading>From idea to production, fast.</SectionHeading>

        <SectionSubheading>
          Whether crafting a basic application or architecting an advanced
          AI-driven solution, Buildel supports your development journey at every
          step
        </SectionSubheading>
      </SectionHeader>

      <div className="relative mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:mt-16">
        <div className="hidden pointer-events-none radial-mask z-0 w-[800px] aspect-square lg:w-[1000px] absolute top-1/4 right-1/2 translate-x-1/2 bg-no-repeat md:block" />

        <PropertyCard>
          <PropertyCardHeader>
            <Puzzle className="w-6 h-6 mb-2" />

            <PropertyCardHeading>No Code Required</PropertyCardHeading>

            <PropertyCardDescription>
              You don't need to write a single line of code. Just pick and
              connect the blocks and you are good to go.
            </PropertyCardDescription>
          </PropertyCardHeader>

          <div className="hidden group-hover:block">
            <Meteors />
          </div>
        </PropertyCard>

        <PropertyCard>
          <PropertyCardHeader>
            <DocumentChart className="w-6 h-6 mb-2" />

            <PropertyCardHeading>Pre-built Use Cases</PropertyCardHeading>
            <PropertyCardDescription>
              We have pre-built use cases that you can use to get started
              quickly.
            </PropertyCardDescription>
          </PropertyCardHeader>

          <div className="hidden group-hover:block">
            <Meteors />
          </div>
        </PropertyCard>

        <PropertyCard>
          <PropertyCardHeader>
            <LockClosed className="w-6 h-6 mb-2" />

            <PropertyCardHeading>Bring Your Own Keys</PropertyCardHeading>

            <PropertyCardDescription>
              You can use your own API keys for the blocks that need them.
            </PropertyCardDescription>
          </PropertyCardHeader>

          <div className="hidden group-hover:block">
            <Meteors />
          </div>
        </PropertyCard>

        <PropertyCard>
          <PropertyCardHeader>
            <Code className="w-6 h-6 mb-2" />

            <PropertyCardHeading>Open Source</PropertyCardHeading>
            <PropertyCardDescription>
              Buildel is open source. You can host it for free on your own and
              contribute to it.
            </PropertyCardDescription>
          </PropertyCardHeader>

          <div className="hidden group-hover:block">
            <Meteors />
          </div>
        </PropertyCard>

        <PropertyCard>
          <PropertyCardHeader>
            <GlobeEurope className="w-6 h-6 mb-2" />

            <PropertyCardHeading>Multiple Providers</PropertyCardHeading>
            <PropertyCardDescription>
              We support multiple providers for the same type of block. Use
              OpenAI, Google, Mistral and many more.
            </PropertyCardDescription>
          </PropertyCardHeader>

          <div className="hidden group-hover:block">
            <Meteors />
          </div>
        </PropertyCard>

        <PropertyCard>
          <PropertyCardHeader>
            <ChatBubble className="w-6 h-6 mb-2" />

            <PropertyCardHeading>Different Interfaces</PropertyCardHeading>
            <PropertyCardDescription>
              You can build different interfaces for the same workflow. Use
              chat, api, or any other interface.
            </PropertyCardDescription>
          </PropertyCardHeader>

          <div className="hidden group-hover:block">
            <Meteors />
          </div>
        </PropertyCard>
      </div>
    </Section>
  );
};

function PropertyCard({ children }: PropsWithChildren) {
  return (
    <article className="group overflow-hidden relative p-4 rounded-lg bg-zinc-900/50 border border-neutral-950 hover:border-neutral-900 lg:p-6">
      {children}
    </article>
  );
}

function PropertyCardHeader({ children }: PropsWithChildren) {
  return (
    <header className="relative z-10 mb-2 flex flex-col gap-2">
      {children}
    </header>
  );
}

function PropertyCardHeading({ children }: PropsWithChildren) {
  return <h3 className="text-xl">{children}</h3>;
}

function PropertyCardDescription({ children }: PropsWithChildren) {
  return <p className="text-neutral-100">{children}</p>;
}

import { Header } from "~/components/layout/Header";
import { JoinCommunity } from "~/components/sections/community/JoinCommunity";
import { Integration } from "~/components/sections/integration/Integration";
import { Footer } from "~/components/layout/Footer";
import { Button } from "~/components/shared/New-button";
import { AnimatedWords } from "~/components/sections/hero/Hero";
import { cn } from "~/lib/utils";
import { Workflow } from "~/components/icons/Workflow";
import { BasicLink, BasicLinkProps } from "~/components/shared/BasicLink";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/shared/Carousel";
import { X } from "lucide-react";
import { TabGroup, useTabsContext } from "~/components/tabs/TabGroup";
import { Tab, TabButton, TabButtonProps } from "~/components/tabs/Tab";
import { useLoaderData } from "@remix-run/react";
import { loader } from "~/routes/_index";
import { BlockType } from "~/api/blockTypes.types";
import Autoplay from "embla-carousel-autoplay";
import { useScroll, motion, useTransform } from "framer-motion";
import { forwardRef } from "react";

export const NewHome = () => (
  <MainWrapper>
    <Header />

    <Hero />

    <ImplementationSection />

    <Workflows />

    <StartWithTemplates />

    <KnowledgeBaseSection />

    <ExperimentsSection />

    <GraphSection />

    <StartForFreeSection />

    <Blocks />

    <JoinCommunity />

    <Integration />

    <Footer />
  </MainWrapper>
);

const clients = [
  { name: "EL Passion", logo: "elp_logo_default.svg" },
  { name: "EY", logo: "EY-logo.svg" },
];

export function Clients() {
  return (
    <SectionWrapper className="border-b">
      <Section className="py-10 border-x">
        <ClientsHeading>
          Trusted by multiple clients from various industries with individual
          needs
        </ClientsHeading>

        <motion.ul
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
                bounce: 0,
                ease: "easeInOut",
              },
            },
          }}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-3 lg:justify-center lg:flex lg:items-center mt-10 gap-11 lg:gap-x-14 w-full overflow-x-auto overflow-y-hidden"
        >
          {clients.map((client, index) => (
            <motion.li
              key={`${client.name}-${index}`}
              className="h-full"
              variants={{
                hidden: { y: 100 },
                visible: { y: 0, transition: { bounce: 0, ease: "easeInOut" } },
              }}
            >
              <img
                src={`/assets/clients/${client.logo}`}
                className="opacity-20 hover:opacity-100 transition-opacity h-10"
                alt={client.name}
              />
            </motion.li>
          ))}
        </motion.ul>
      </Section>
    </SectionWrapper>
  );
}

export function ClientsHeading({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-base text-muted-foreground text-center", className)}
      {...rest}
    >
      {children}
    </h3>
  );
}

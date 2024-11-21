import { Header } from "~/components/layout/Header";
import { TryWorkflows } from "~/components/sections/workflows/TryWorkflows";
import { AskToBuildWorkflow } from "~/components/sections/workflows/AskToBuildWorkflow";
import { Benefits } from "~/components/sections/benefits/Benefits";
import { Blocks } from "~/components/sections/blocks/Blocks";
import { JoinCommunity } from "~/components/sections/community/JoinCommunity";
import { Integration } from "~/components/sections/integration/Integration";
import { Footer } from "~/components/layout/Footer";
import { Button } from "~/components/shared/Button";
import {
  HeroContainer,
  HeroHeader,
  AnimatedWords,
  HeroSubheader,
} from "~/components/sections/hero/Hero";
import { cn } from "~/utils/cn";
import { Workflow } from "~/components/icons/Workflow";
import { motion } from "framer-motion";

export const NewHome = () => (
  <MainWrapper>
    <Header />
    <Hero />
    <Clients />
    {/*<TryWorkflows />*/}
    {/*<AskToBuildWorkflow />*/}
    {/*<Benefits />*/}
    {/*<Blocks />*/}
    <JoinCommunity />
    <Integration />
    <Footer />
  </MainWrapper>
);

const Hero = () => {
  return (
    <SectionWrapper className="border-b">
      <Section className="flex gap-4 items-center justify-between py-20 relative border-x">
        <img
          alt="background dots"
          src="/new/dots.png"
          className="absolute top-0 left-0 right-0 bottom-0 h-full w-full pointer-events-none"
        />
        <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-white to-transparent pointer-events-none" />

        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-white to-transparent pointer-events-none" />

        <div className="absolute bottom-0 left-0 top-0 w-[200px] bg-gradient-to-r from-white to-transparent pointer-events-none" />

        <div className="absolute bottom-0 right-0 top-0 w-[200px] bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <HeroContentWrapper className="relative">
          <HeroHeading className="max-w-[360px]">
            <span>AI Automation for </span>
            <AnimatedWords
              words={["everybody", "sales", "engineers", "marketeers", "you"]}
            />
          </HeroHeading>

          <HeroSubheading className="max-w-[460px]">
            Boost Efficiency & Automate Tasks: Build Your AI Dream Team in
            Minutes without Writing a Line of Code
          </HeroSubheading>

          <HeroButtonsWrapper>
            <Button mode="dark" externalHref="https://app.buildel.ai/register">
              Get started free
            </Button>

            <Button
              mode="dark"
              variant="secondary"
              externalHref="https://forms.gle/ZYJKCNuX4XySTdMz7"
            >
              Book a demo
            </Button>
          </HeroButtonsWrapper>
        </HeroContentWrapper>

        <div className="relative">
          <Workflow />
        </div>
      </Section>
    </SectionWrapper>
    // <HeroContainer>
    //   <HeroHeader>
    //     AI Automation for <br />
    //     <AnimatedWords
    //       words={["everybody", "sales", "engineers", "marketeers", "you"]}
    //     />
    //   </HeroHeader>
    //
    //   <HeroSubheader>
    //     Boost Efficiency & Automate Tasks: Build Your AI Dream Team in Minutes
    //     without Writing a Line of Code
    //   </HeroSubheader>
    //   <div className="flex items-center gap-x-4 mt-10">
    //     <Button mode="dark" externalHref="https://app.buildel.ai/register">
    //       Start building ✨
    //     </Button>
    //     <Button
    //       mode="dark"
    //       variant="secondary"
    //       externalHref="https://forms.gle/ZYJKCNuX4XySTdMz7"
    //     >
    //       Book a demo
    //     </Button>
    //   </div>
    // </HeroContainer>
  );
};

export function HeroButtonsWrapper({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center gap-4", className)} {...rest}>
      {children}
    </div>
  );
}

export function HeroSubheading({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-lg text-neutral-850", className)} {...rest}>
      {children}
    </p>
  );
}

export function HeroHeading({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "text-5xl font-bold text-neutral-950 leading-[64px]",
        className
      )}
      {...rest}
    >
      {children}
    </h1>
  );
}

export function HeroContentWrapper({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...rest}>
      {children}
    </div>
  );
}

export function SectionWrapper({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("", className)} {...rest}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section className={cn("layout", className)} {...rest}>
      {children}
    </section>
  );
}

export function MainWrapper({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <main
      className={cn("bg-white w-full min-h-[100dvh] pt-[64px]", className)}
      {...rest}
    >
      {children}
    </main>
  );
}

const clients = [
  { name: "EL Passion", logo: "elp_logo_default.svg" },
  { name: "EY", logo: "EY-logo.svg" },
];

export function Clients() {
  return (
    <div className="flex flex-col layout py-10 items-start lg:items-center z-[2] relative">
      <h3 className="text-base text-neutral-700 text-center">
        Trusted by multiple clients from various industries with individual
        needs
      </h3>
      <motion.ul
        variants={{
          visible: {
            transition: { staggerChildren: 0.1, bounce: 0, ease: "easeInOut" },
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
    </div>
  );
}

export function ClientsHeading({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-base text-neutral-700 text-center", className)}
      {...rest}
    >
      {children}
    </h3>
  );
}

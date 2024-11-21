import { Header } from "~/components/layout/Header";
import { JoinCommunity } from "~/components/sections/community/JoinCommunity";
import { Integration } from "~/components/sections/integration/Integration";
import { Footer } from "~/components/layout/Footer";
import { Button } from "~/components/shared/New-button";
import { AnimatedWords } from "~/components/sections/hero/Hero";
import { cn } from "~/lib/utils";
import { Workflow } from "~/components/icons/Workflow";
import { motion } from "framer-motion";
import { BasicLink, BasicLinkProps } from "~/components/shared/BasicLink";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/shared/Carousel";
import { X } from "lucide-react";
import { TabGroup, useTabsContext } from "~/components/tabs/TabGroup";
import { Tab, TabButton, TabButtonProps } from "~/components/tabs/Tab";

export const NewHome = () => (
  <MainWrapper>
    <Header />
    <Hero />
    <ImplementationSection />
    {/*<Clients />*/}
    <Workflows />

    <SectionWrapper className="border-b">
      <Section className="border-x min-h-[300px]">
        <SectionTLCross />
        <SectionTRCross />
      </Section>
    </SectionWrapper>
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
      <Section className="relative flex gap-4 items-center justify-between py-20 border-x">
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
          <BasicLink to="/blog/buildel-0_5">
            <WhatsNewBadge>Whats new? v0.5 is out!</WhatsNewBadge>
          </BasicLink>

          <HeroContentInnerWrapper>
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
              <Button asChild size="xl">
                <BasicLink to="https://app.buildel.ai/register" target="_blank">
                  Get started free
                </BasicLink>
              </Button>

              <Button asChild variant="outline" size="xl">
                <BasicLink
                  to="https://forms.gle/ZYJKCNuX4XySTdMz7"
                  target="_blank"
                >
                  Book a demo
                </BasicLink>
              </Button>
            </HeroButtonsWrapper>
          </HeroContentInnerWrapper>
        </HeroContentWrapper>

        <div className="relative">
          <Workflow />
        </div>
      </Section>
    </SectionWrapper>
  );
};

export function ImplementationSection() {
  return (
    <SectionWrapper className="relative pb-20 pt-10 border-b">
      <div className="layout absolute w-full h-full border-x top-0 left-1/2 -translate-x-1/2 z-[10]">
        <SectionTLCross />
        <SectionTRCross />
      </div>

      <ImplementationHeading className="relative mx-auto w-fit font-normal mb-10">
        Take a look at some of the implementations
      </ImplementationHeading>

      <ImplementationCarousel />

      <div className="hidden absolute bottom-0 left-0 top-0 md:block w-[150px] lg:w-[300px] bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 top-0 w-[150px] lg:w-[300px] bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </SectionWrapper>
  );
}

export function ImplementationHeading({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <h3 className={cn("text-muted-foreground text-base", className)} {...rest}>
      {children}
    </h3>
  );
}

function ImplementationCarousel() {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-full relative z-[11]"
    >
      <CarouselContent className="ml-10 mr-8 lg:ml-40 lg:mr-40">
        {Array.from({ length: 8 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="basis-full md:basis-1/2 2xl:basis-1/3 4xl:basis-1/5 pl-4 lg:pl-6"
          >
            <BasicLink to="#">
              <ImplementationCarouselItem>
                <ImplementationCarouselContentWrapper>
                  <ImplementationCarouselItemHeading className="mb-3">
                    Turn Yourself into a Lego Figure
                  </ImplementationCarouselItemHeading>
                  <ImplementationCarouselItemContent>
                    BuildEL is a platform that allows you to create your own AI
                    workflows without writing a single line of code.
                  </ImplementationCarouselItemContent>
                </ImplementationCarouselContentWrapper>

                <ImplementationCarouselItemLogo />
              </ImplementationCarouselItem>
            </BasicLink>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

function ImplementationCarouselContentWrapper({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col gap-3", className)} {...rest} />;
}

function ImplementationCarouselItemLogo({
  className,
  ...rest
}: React.HTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src={`/assets/clients/elp_logo_default.svg`}
      className={cn(
        "opacity-20 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition h-5 w-fit",
        className
      )}
      alt="EL Passion logo"
      {...rest}
    />
  );
}

type ImplementationCarouselItemProps = React.HTMLAttributes<HTMLDivElement>;

function ImplementationCarouselItem({
  className,
  children,
  ...rest
}: ImplementationCarouselItemProps) {
  return (
    <article
      className={cn(
        "min-h-[210px] border bg-white rounded-xl p-4 lg:p-6 flex flex-col justify-between group",
        className
      )}
      {...rest}
    >
      {children}
    </article>
  );
}

export function ImplementationCarouselItemHeading({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-foreground font-semibold text-xl", className)}
      {...rest}
    >
      {children}
    </h3>
  );
}

export function ImplementationCarouselItemContent({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-base text-neutral-500 font-light", className)}
      {...rest}
    >
      {children}
    </p>
  );
}

export function WhatsNewBadge({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "bg-white shadow-xl w-fit rounded-lg text-sm px-2 py-0.5 flex items-center gap-1 border text-muted-foreground",
        className
      )}
      {...rest}
    >
      <div className="bg-indigo-700/10 w-3 h-3 rounded-full flex justify-center items-center">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-700 animate-pulse" />
      </div>

      {children}
    </div>
  );
}

const workflows = [
  {
    id: "1",
    name: "Simple Chat",
    icon: "✨",
    description:
      "You can create a simple chat workflow with BuildEL. It is a simple chatbot that can be embedded on your website.",
    link: "#",
    linkText: "Explore interfaces",
  },
];

export function Workflows() {
  return (
    <SectionWrapper className="relative border-b">
      <Section className="w-full bottom-0 border-x py-20">
        <SectionTLCross />
        <SectionTRCross />

        <TabGroup defaultActiveTab="1">
          <div className="relative bg-secondary rounded-3xl shadow-2xl min-h-[35vh] border max-w-6xl mx-auto overflow-hidden">
            <Tab tabId="1">
              <iframe
                src="https://app.buildel.ai/webchats/43/pipelines/495?alias=latest"
                height="600"
                title="chat"
                className="w-full"
              />
            </Tab>
            <Tab tabId="2">
              <iframe
                src="https://app.buildel.ai/forms/43/pipelines/495?alias=latest"
                className="w-full bg-muted"
                height="600"
                title="chat"
              />
            </Tab>
            <Tab tabId="3">
              <iframe
                src="https://app.buildel.ai/webchats/43/pipelines/495?alias=latest"
                height="600"
                title="chat"
                className="w-full"
              />
            </Tab>
            <Tab tabId="4">
              <iframe
                src="https://app.buildel.ai/forms/43/pipelines/495?alias=latest"
                className="w-full bg-muted"
                height="600"
                title="chat"
              />
            </Tab>

            <div className="w-full border-t p-6 lg:p-10 bg-white">
              <div className="flex gap-4 items-center justify-center mb-6 lg:mb-10">
                <WorkflowTabButton tabId="1">
                  ✨<span>Simple Chat</span>
                </WorkflowTabButton>
                <WorkflowTabButton tabId="2">
                  💾
                  <span>RAG's</span>
                </WorkflowTabButton>
                <WorkflowTabButton tabId="3">
                  🔀
                  <span>Multiple models</span>
                </WorkflowTabButton>
                <WorkflowTabButton tabId="4">
                  ⚙️
                  <span>API tools</span>
                </WorkflowTabButton>
              </div>

              <Tab tabId="1">
                <WorkflowTabContent>
                  You can create a simple chat workflow with BuildEL. It is a
                  simple chatbot that can be embedded on your website.
                </WorkflowTabContent>

                <WorkflowTabLink to="#">Explore interfaces</WorkflowTabLink>
              </Tab>

              <Tab tabId="2">
                <WorkflowTabContent>
                  Turn workflows into complete apps with data tables and branded
                  interfaces purpose-built for automation.
                </WorkflowTabContent>

                <WorkflowTabLink to="#">Explore interfaces</WorkflowTabLink>
              </Tab>

              <Tab tabId="3">
                <WorkflowTabContent>
                  Turn workflows into complete apps with data tables and branded
                  interfaces purpose-built for automation.
                </WorkflowTabContent>

                <WorkflowTabLink to="#">Explore interfaces</WorkflowTabLink>
              </Tab>

              <Tab tabId="4">
                <WorkflowTabContent>
                  Turn workflows into complete apps with data tables and branded
                  interfaces purpose-built for automation.
                </WorkflowTabContent>

                <WorkflowTabLink to="#">Explore interfaces</WorkflowTabLink>
              </Tab>
            </div>
          </div>
        </TabGroup>
      </Section>
    </SectionWrapper>
  );
}

function WorkflowTabLink({ className, children, ...rest }: BasicLinkProps) {
  return (
    <BasicLink
      className={cn(
        "w-fit block mx-auto text-xl underline hover:no-underline",
        className
      )}
      {...rest}
    >
      {children}
    </BasicLink>
  );
}

function WorkflowTabContent({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <p
      className={cn(
        "text-center text-foreground mx-auto text-xl max-w-[650px] mb-4",
        className
      )}
      {...rest}
    >
      {children}
    </p>
  );
}

function WorkflowTabButton({
  tabId,
  children,
  className,
  ...props
}: TabButtonProps) {
  const { activeTabId } = useTabsContext();

  return (
    <Button
      asChild
      variant={activeTabId === tabId ? "default" : "ghost"}
      size="xl"
      className={cn("rounded-xl", className)}
      {...props}
    >
      <TabButton tabId={tabId}>{children}</TabButton>
    </Button>
  );
}

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
    <p className={cn("text-lg text-muted-foreground", className)} {...rest}>
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
        "text-5xl font-bold text-foreground leading-[64px]",
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
    <div className={cn("flex flex-col gap-3", className)} {...rest}>
      {children}
    </div>
  );
}

export function HeroContentInnerWrapper({
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
    <section className={cn("layout z-10 relative", className)} {...rest}>
      {children}
    </section>
  );
}

export function SectionTLCross({
  className,
  ...rest
}: React.HTMLAttributes<SVGAElement>) {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <X
      className={cn(
        "absolute top-0 left-0 z-[10] text-muted-foreground rotate-45 -translate-x-1/2 -translate-y-1/2",
        className
      )}
      {...rest}
    />
  );
}

export function SectionTRCross({
  className,
  ...rest
}: React.HTMLAttributes<SVGAElement>) {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <X
      className={cn(
        "absolute top-0 right-0 z-[10] text-muted-foreground rotate-45 translate-x-1/2 -translate-y-1/2",
        className
      )}
      {...rest}
    />
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

import { Header } from "~/components/layout/Header";
import { Clients } from "~/components/sections/hero/Clients";
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

export const Home = () => (
  <main className="bg-white w-full h-full">
    <Header />
    <Hero />
    <Clients />
    <TryWorkflows />
    <AskToBuildWorkflow />
    <Benefits />
    <Blocks />
    <JoinCommunity />
    <Integration />
    <Footer />
  </main>
);

const Hero = () => {
  return (
    <HeroContainer>
      <HeroHeader>
        AI Automation for <br />
        <AnimatedWords
          words={["everybody", "sales", "engineers", "marketeers", "you"]}
        />
      </HeroHeader>

      <HeroSubheader>
        Boost Efficiency & Automate Tasks: Build Your AI Dream Team in Minutes
        without Writing a Line of Code
      </HeroSubheader>
      <div className="flex items-center gap-x-4 mt-10">
        <Button mode="dark" externalHref="https://app.buildel.ai/register">
          Start building ✨
        </Button>
        <Button
          mode="dark"
          variant="secondary"
          externalHref="https://forms.gle/ZYJKCNuX4XySTdMz7"
        >
          Book a demo
        </Button>
      </div>
    </HeroContainer>
  );
};

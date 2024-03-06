import { Header } from "~/components/layout/Header";
import { Hero } from "~/components/sections/hero/Hero";
import { Clients } from "~/components/sections/hero/Clients";
import { TryWorkflows } from "~/components/sections/workflows/TryWorkflows";
import { AskToBuildWorkflow } from "~/components/sections/workflows/AskToBuildWorkflow";
import { Benefits } from "~/components/sections/benefits/Benefits";
import { Blocks } from "~/components/sections/blocks/Blocks";
import { JoinCommunity } from "~/components/sections/community/JoinCommunity";
import { Integration } from "~/components/sections/integration/Integration";
import { Footer } from "~/components/layout/Footer";

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

import { Hero } from "~/components/sections/hero/Hero";
import { Clients } from "~/components/sections/hero/Clients";
import { TryWorkflows } from "~/components/sections/workflows/TryWorkflows";
import { Header } from "~/components/layout/Header";
import { AskToBuildWorkflow } from "~/components/sections/workflows/AskToBuildWorkflow";

export default function Index() {
  return (
    <main className="bg-white w-full h-full">
      <Header />
      <Hero />
      <Clients />
      <TryWorkflows />
      <AskToBuildWorkflow />
    </main>
  );
}

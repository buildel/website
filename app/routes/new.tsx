import { Hero } from "~/components/sections/hero/Hero";
import { Clients } from "~/components/sections/hero/Clients";
import { TryWorkflows } from "~/components/sections/workflows/TryWorkflows";
import { Header } from "~/components/layout/Header";
import { AskToBuildWorkflow } from "~/components/sections/workflows/AskToBuildWorkflow";
import { Benefits } from "~/components/sections/benefits/Benefits";
import { Blocks } from "~/components/sections/blocks/Blocks";
import { BlockTypeApi } from "~/api/blockTypesApi";
import { json } from "@remix-run/node";

export async function loader() {
  const blockTypesApi = new BlockTypeApi();
  const res = await blockTypesApi.getBlockTypes();

  return json({ blockTypes: res.data });
}

export default function Index() {
  return (
    <main className="bg-white w-full h-full">
      <Header />
      <Hero />
      <Clients />
      <TryWorkflows />
      <AskToBuildWorkflow />
      <Benefits />
      <Blocks />
    </main>
  );
}

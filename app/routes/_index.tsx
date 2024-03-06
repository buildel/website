import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Hero } from "~/components/sections/hero/Hero";
import { Header } from "~/components/layout/Header";
import { Clients } from "~/components/sections/hero/Clients";
import { TryWorkflows } from "~/components/sections/workflows/TryWorkflows";
import { AskToBuildWorkflow } from "~/components/sections/workflows/AskToBuildWorkflow";
import { Benefits } from "~/components/sections/benefits/Benefits";
import { Blocks } from "~/components/sections/blocks/Blocks";
import { JoinCommunity } from "~/components/sections/community/JoinCommunity";
import { Integration } from "~/components/sections/integration/Integration";
import { Footer } from "~/components/layout/Footer";
import { BlockTypeApi } from "~/api/blockTypesApi";

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
}

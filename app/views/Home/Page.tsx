import { Header } from "~/components/layout/Header";
import { JoinCommunity } from "~/components/sections/community/JoinCommunity";
import { Integration } from "~/components/sections/integration/Integration";
import { Footer } from "~/components/layout/Footer";
import { StartWithTemplates } from "~/views/Home/StartWithTemplates";
import { StartForFreeSection } from "~/views/Home/StartForFree";
import { MainWrapper } from "~/components/layout/Layout.components";
import {
  ExperimentsSection,
  GraphSection,
  KnowledgeBaseSection,
} from "~/views/Home/Features";
import { ImplementationSection } from "~/views/Home/Implementations";
import { Hero } from "~/views/Home/Hero";
import { Workflows } from "~/views/Home/Workflows";
import { Blocks } from "~/views/Home/Blocks";
import { useLoaderData } from "@remix-run/react";
import { loader } from "~/routes/_index";

export const Home = () => {
  const { blockTypes } = useLoaderData<typeof loader>();
  return (
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

      <Blocks blocks={blockTypes} />

      <JoinCommunity />

      <Integration />

      <Footer />
    </MainWrapper>
  );
};

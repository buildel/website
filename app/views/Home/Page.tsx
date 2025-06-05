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

export const Home = () => {
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

      <Blocks />

      <JoinCommunity />

      <Integration />

      <Footer />
    </MainWrapper>
  );
};

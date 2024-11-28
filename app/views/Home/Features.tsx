import { Button } from "~/components/shared/Button";
import { BasicLink } from "~/components/shared/BasicLink";
import {
  SectionWrapper,
  SectionTLCross,
  SectionTRCross,
} from "~/components/layout/Layout.components";
import {
  FeaturesListItem,
  FeaturesHeading,
  FeaturesImage,
  FeaturesImagesWrapper,
  FeaturesList,
  FeaturesSection,
  FeaturesContentWrapper,
  ParallaxImage,
} from "~/components/sections/features/Features.components";

export function ExperimentsSection() {
  return (
    <SectionWrapper className="border-b">
      <FeaturesSection className="bg-indigo-500/5">
        <FeaturesContentWrapper>
          <FeaturesHeading>
            Validate your workflow with BuildEL experiments
          </FeaturesHeading>

          <FeaturesList>
            <FeaturesListItem>
              Experiment with workflows to ensure they perform as expected
            </FeaturesListItem>

            <FeaturesListItem>
              Get immediate insights and results from your experiments
            </FeaturesListItem>

            <FeaturesListItem>
              Quickly adjust and refine workflows based on experimental outcomes
            </FeaturesListItem>
          </FeaturesList>

          <Button asChild size="lg" className="w-fit">
            <BasicLink to="https://app.buildel.ai" target="_blank">
              Explore Experiments
            </BasicLink>
          </Button>
        </FeaturesContentWrapper>

        <FeaturesImagesWrapper>
          <FeaturesImage src="/new/experiments.webp" alt="experiments" />
        </FeaturesImagesWrapper>

        <SectionTLCross />
        <SectionTRCross />
      </FeaturesSection>
    </SectionWrapper>
  );
}

export function GraphSection() {
  return (
    <SectionWrapper className="border-b">
      <FeaturesSection className="md:grid-cols-[3fr_2fr]">
        <FeaturesImagesWrapper className="order-2 md:order-1">
          <FeaturesImage src="/new/graph.webp" alt="graph" />
          <ParallaxImage
            src="/new/graph-node.webp"
            className="hidden md:block absolute top-1/2 md:w-[250px] lg:w-[300px] left-0 -translate-y-1/2 -rotate-12"
            alt="graph summary"
            range={[200, -150]}
          />
        </FeaturesImagesWrapper>

        <FeaturesContentWrapper className="order-1 md:order-2">
          <FeaturesHeading>Visualize your data with BuildEL</FeaturesHeading>

          <FeaturesList>
            <FeaturesListItem>
              Easily understand complex data relationships through visual
              representations
            </FeaturesListItem>
            <FeaturesListItem>
              Navigate through the graph to see how your data points are
              interrelated
            </FeaturesListItem>
            <FeaturesListItem>
              Easily find where specific documents are positioned within the
              graph
            </FeaturesListItem>
            <FeaturesListItem>
              Click on nodes to access detailed information and insights about
              each data point
            </FeaturesListItem>
          </FeaturesList>

          <Button asChild size="lg" className="w-fit">
            <BasicLink to="https://app.buildel.ai" target="_blank">
              Start Exploring
            </BasicLink>
          </Button>
        </FeaturesContentWrapper>

        <SectionTLCross />
        <SectionTRCross />
      </FeaturesSection>
    </SectionWrapper>
  );
}

export function KnowledgeBaseSection() {
  return (
    <SectionWrapper className="border-b overflow-hidden">
      <FeaturesSection>
        <FeaturesContentWrapper>
          <FeaturesHeading>
            The fastest way to plug AI into your own data
          </FeaturesHeading>

          <FeaturesList>
            <FeaturesListItem>Chat with your own data/tools</FeaturesListItem>
            <FeaturesListItem>Plug into your own products</FeaturesListItem>
            <FeaturesListItem>
              Use any model (including self-hosted)
            </FeaturesListItem>
            <FeaturesListItem>Instant AI Insights</FeaturesListItem>
            <FeaturesListItem>Effortless Integration</FeaturesListItem>
          </FeaturesList>

          <Button asChild size="lg" className="w-fit">
            <BasicLink to="https://app.buildel.ai" target="_blank">
              Integrate Your Data
            </BasicLink>
          </Button>
        </FeaturesContentWrapper>

        <FeaturesImagesWrapper>
          <FeaturesImage src="/new/kb.webp" alt="workflow" />
          <ParallaxImage
            src="/new/chat.webp"
            className="absolute top-1/2 w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] right-0 md:-translate-y-1/2 rotate-12"
            alt="usage example"
          />
        </FeaturesImagesWrapper>
      </FeaturesSection>
    </SectionWrapper>
  );
}

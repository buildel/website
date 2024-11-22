import { Button } from "~/components/shared/New-button";
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
      <FeaturesSection className="bg-secondary">
        <FeaturesContentWrapper>
          <FeaturesHeading>
            Validate your workflow with BuildEL experiments
          </FeaturesHeading>

          <FeaturesList>
            <FeaturesListItem>
              Validate your workflow with BuildEL experiments
            </FeaturesListItem>

            <FeaturesListItem>
              Create custom visualizations with your data
            </FeaturesListItem>

            <FeaturesListItem>
              Validate your workflow with BuildEL experiments
            </FeaturesListItem>

            <FeaturesListItem>
              Create custom visualizations with your data
            </FeaturesListItem>
          </FeaturesList>

          <Button asChild size="lg" className="w-fit">
            <BasicLink to="https://app.buildel.ai" target="_blank">
              Explore
            </BasicLink>
          </Button>
        </FeaturesContentWrapper>

        <FeaturesImagesWrapper>
          <FeaturesImage src="/new/experiments.png" alt="experiments" />
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
          <FeaturesImage src="/new/graph.png" alt="graph" />
          <ParallaxImage
            src="/new/graph-node.png"
            className="hidden md:block absolute top-1/2 md:w-[250px] lg:w-[300px] left-0 -translate-y-1/2 -rotate-12"
            alt="graph summary"
            range={[200, -150]}
          />
        </FeaturesImagesWrapper>

        <FeaturesContentWrapper className="order-1 md:order-2">
          <FeaturesHeading>Visualize your data with BuildEL</FeaturesHeading>

          <FeaturesList>
            <FeaturesListItem>
              Create custom visualizations with your data
            </FeaturesListItem>
            <FeaturesListItem>
              Use the power of AI to understand your data
            </FeaturesListItem>
          </FeaturesList>

          <Button asChild size="lg" className="w-fit">
            <BasicLink to="https://app.buildel.ai" target="_blank">
              Explore
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
          </FeaturesList>

          <Button asChild size="lg" className="w-fit">
            <BasicLink to="https://app.buildel.ai" target="_blank">
              Explore
            </BasicLink>
          </Button>
        </FeaturesContentWrapper>

        <FeaturesImagesWrapper>
          <FeaturesImage src="/new/kb.png" alt="workflow" />
          <ParallaxImage
            src="/new/chat.png"
            className="absolute top-1/2 w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] right-0 md:-translate-y-1/2 rotate-12"
            alt="usage example"
          />
        </FeaturesImagesWrapper>
      </FeaturesSection>
    </SectionWrapper>
  );
}

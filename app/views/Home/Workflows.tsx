import { TabGroup } from "~/components/tabs/TabGroup";
import { Tab } from "~/components/tabs/Tab";

import {
  WorkflowTabButton,
  WorkflowTabButtonHeading,
  WorkflowTabButtonParagraph,
} from "~/components/sections/workflows/Workflows.components";
import {
  SectionWrapper,
  Section,
  SectionTRCross,
  SectionTLCross,
  SectionHeading,
} from "~/components/layout/Layout.components";
import { ClientOnly } from "remix-utils/client-only";

export function Workflows() {
  return (
    <SectionWrapper className="relative border-b">
      <Section className="w-full bottom-0 border-x !px-1 sm:!px-4 md:!px-6 py-14 md:py-20">
        <SectionHeading className="text-center mb-10 md:mb-14 max-w-[360px] md:max-w-[450px] mx-auto">
          Try out <span className="gradient-text">BuildEL</span> interfaces
        </SectionHeading>
        <SectionTLCross />
        <SectionTRCross />

        <TabGroup defaultActiveTab="1">
          <div className="relative bg-secondary rounded-3xl shadow-2xl min-h-[35vh] border max-w-6xl mx-auto overflow-hidden">
            <ClientOnly
              fallback={<div className="h-[500px] md:h-[600px] w-full" />}
            >
              {() => (
                <div className="px-1">
                  <Tab tabId="1">
                    <iframe
                      src="https://app.buildel.ai/webchats/2/pipelines/2?alias=latest"
                      title="chat"
                      className="w-full h-[500px] md:h-[600px]"
                    />
                  </Tab>
                  <Tab tabId="2">
                    <iframe
                      src="https://app.buildel.ai/forms/2/pipelines/3?alias=latest"
                      className="w-full h-[500px] md:h-[600px]"
                      title="chat"
                    />
                  </Tab>
                </div>
              )}
            </ClientOnly>

            <div className="w-full border-t p-4 lg:p-10 bg-white">
              <div className="flex flex-col gap-2 md:gap-4 md:flex-row items-center justify-center">
                <WorkflowTabButton tabId="1">
                  <WorkflowTabButtonHeading>Webchat</WorkflowTabButtonHeading>

                  <WorkflowTabButtonParagraph>
                    Integrate a chatbot seamlessly into your website.
                  </WorkflowTabButtonParagraph>

                  <WorkflowTabButtonParagraph>
                    Easily create any type of Buildel workflow and embed it on
                    your site, just like in this example.
                  </WorkflowTabButtonParagraph>
                </WorkflowTabButton>

                <WorkflowTabButton tabId="2" className="">
                  <WorkflowTabButtonHeading>
                    Form Interface
                  </WorkflowTabButtonHeading>

                  <WorkflowTabButtonParagraph>
                    Easily collect user inputs with a customizable form
                    interface. Create dynamic forms for any Buildel workflow and
                    integrate them directly into your platform.
                  </WorkflowTabButtonParagraph>
                </WorkflowTabButton>
              </div>
            </div>
          </div>
        </TabGroup>
      </Section>
    </SectionWrapper>
  );
}

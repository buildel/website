import { TabGroup } from "~/components/tabs/TabGroup";
import { Tab } from "~/components/tabs/Tab";

import {
  WorkflowTabButton,
  WorkflowTabContent,
  WorkflowTabLink,
} from "~/components/sections/workflows/Workflows.components";
import {
  SectionWrapper,
  Section,
  SectionTRCross,
  SectionTLCross,
} from "~/components/layout/Layout.components";

export function Workflows() {
  return (
    <SectionWrapper className="relative border-b">
      <Section className="w-full bottom-0 border-x py-14 md:py-20">
        <SectionTLCross />
        <SectionTRCross />

        <TabGroup defaultActiveTab="1">
          <div className="relative bg-secondary rounded-3xl shadow-2xl min-h-[35vh] border max-w-6xl mx-auto overflow-hidden">
            <Tab tabId="1">
              <iframe
                src="https://app.buildel.ai/webchats/60/pipelines/556?alias=latest"
                title="chat"
                className="w-full h-[400px] md:h-[600px]"
              />
            </Tab>
            <Tab tabId="2">
              <iframe
                src="https://app.buildel.ai/forms/43/pipelines/495?alias=latest"
                className="w-full h-[400px] md:h-[600px]"
                title="chat"
              />
            </Tab>
            <Tab tabId="3">
              <iframe
                src="https://app.buildel.ai/webchats/43/pipelines/495?alias=latest"
                className="w-full h-[400px] md:h-[600px]"
                title="chat"
              />
            </Tab>
            <Tab tabId="4">
              <iframe
                src="https://app.buildel.ai/forms/43/pipelines/495?alias=latest"
                className="w-full h-[400px] md:h-[600px]"
                title="chat"
              />
            </Tab>

            <div className="w-full border-t p-6 lg:p-10 bg-white">
              <div className="flex gap-2 md:gap-4 items-center justify-center mb-4 md:mb-6 lg:mb-10 overflow-x-auto">
                <WorkflowTabButton tabId="1">
                  ✨<span>Simple Chat</span>
                </WorkflowTabButton>
                <WorkflowTabButton tabId="2">
                  💾
                  <span>RAG's</span>
                </WorkflowTabButton>
                <WorkflowTabButton tabId="3">
                  🔀
                  <span>Multiple models</span>
                </WorkflowTabButton>
                <WorkflowTabButton tabId="4">
                  ⚙️
                  <span>API tools</span>
                </WorkflowTabButton>
              </div>

              <Tab tabId="1">
                <WorkflowTabContent>
                  You can create a simple chat workflow with BuildEL. It is a
                  simple chatbot that can be embedded on your website.
                </WorkflowTabContent>

                <WorkflowTabLink to="#">Explore interfaces</WorkflowTabLink>
              </Tab>

              <Tab tabId="2">
                <WorkflowTabContent>
                  Turn workflows into complete apps with data tables and branded
                  interfaces purpose-built for automation.
                </WorkflowTabContent>

                <WorkflowTabLink to="#">Explore interfaces</WorkflowTabLink>
              </Tab>

              <Tab tabId="3">
                <WorkflowTabContent>
                  Turn workflows into complete apps with data tables and branded
                  interfaces purpose-built for automation.
                </WorkflowTabContent>

                <WorkflowTabLink to="#">Explore interfaces</WorkflowTabLink>
              </Tab>

              <Tab tabId="4">
                <WorkflowTabContent>
                  Turn workflows into complete apps with data tables and branded
                  interfaces purpose-built for automation.
                </WorkflowTabContent>

                <WorkflowTabLink to="#">Explore interfaces</WorkflowTabLink>
              </Tab>
            </div>
          </div>
        </TabGroup>
      </Section>
    </SectionWrapper>
  );
}

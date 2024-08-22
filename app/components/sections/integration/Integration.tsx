import { Tab } from "~/components/shared/Tab";
import { useEffect, useState } from "react";
import { CodeSnippetSection } from "~/components/sections/integration/CodeSnippetSection";
import {
  clientSDK,
  embed,
  openAI,
} from "~/components/sections/integration/integrations";

enum IntegrationTab {
  ClientSDK = "JS Client SDK",
  Embed = "Embed on website",
  OpenAI = "OpenAI-compliant interface",
}

const tabs = [
  IntegrationTab.ClientSDK,
  IntegrationTab.Embed,
  IntegrationTab.OpenAI,
];

export const Integration = () => {
  const [activeTab, setActiveTab] = useState<IntegrationTab>(
    IntegrationTab.ClientSDK
  );

  const [activeTechnology, setActiveTechnology] = useState<string>("NextJS");

  useEffect(() => {
    if (activeTab === IntegrationTab.ClientSDK) {
      setActiveTechnology("NextJS");
    }
    if (activeTab === IntegrationTab.Embed) {
      setActiveTechnology("HTML");
    }
    if (activeTab === IntegrationTab.OpenAI) {
      setActiveTechnology("openai");
    }
  }, [activeTab]);

  const switchTab = (tab: IntegrationTab) => setActiveTab(tab);

  return (
    <section className="bg-dark-background w-full flex flex-col items-center py-24">
      <div className="flex flex-col items-center px-4 lg:px-0 w-full">
        <h2 className="h2-mobile lg:h2-desktop">
          Integrate <span className="gradient-text">BuildEL</span> into your app
        </h2>
        <p className="text-white/60 mt-5 font-secondary">
          Seamlessly Integrate Workflows to elevate User Experience and
          Streamline Operations
        </p>

        <div className="p-1 rounded-full flex items-center bg-black mt-10 mb-3 w-full lg:w-auto overflow-x-auto">
          {tabs.map((tab) => (
            <Tab
              key={tab}
              active={tab === activeTab}
              onClick={() => switchTab(tab)}
              mode="dark"
              gradientText
            >
              {tab}
            </Tab>
          ))}
        </div>
      </div>

      {activeTab === IntegrationTab.ClientSDK && (
        <CodeSnippetSection
          {...clientSDK}
          activeTab={activeTechnology}
          onTabChange={setActiveTechnology}
        />
      )}
      {activeTab === IntegrationTab.Embed && (
        <CodeSnippetSection
          {...embed}
          activeTab={activeTechnology}
          onTabChange={setActiveTechnology}
        />
      )}

      {activeTab === IntegrationTab.OpenAI && (
        <CodeSnippetSection
          {...openAI}
          activeTab={activeTechnology}
          onTabChange={setActiveTechnology}
        />
      )}
    </section>
  );
};

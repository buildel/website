import { Tab } from "~/components/shared/Tab";
import { useEffect, useState } from "react";
import { CodeSnippetSection } from "~/components/sections/integration/CodeSnippetSection";

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
    <section className="bg-dark-background w-full flex flex-col items-center py-24 px-4 lg:px-0">
      <h2 className="h2-desktop">
        Integrate <span className="gradient-text">Buildel</span> into your app
      </h2>
      <p className="text-white/60 mt-5 font-secondary">
        Seamlessly Integrate Workflows to elevate User Experience and Streamline
        Operations
      </p>

      <div className="p-1 rounded-full flex items-center bg-black mt-10 mb-3">
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

      {activeTab === IntegrationTab.ClientSDK && (
        <CodeSnippetSection
          title={
            <h3 className="h3-desktop">
              Access Buildel API easily with our{" "}
              <span className="gradient-text">client SDK</span>
            </h3>
          }
          imageDirectory="snippets/js-client-sdk"
          subtitle="You can use EL to build sophisticated workflows that fulfill all your needs. No need to write code, just ask EL to do it for you."
          cta={{ label: "See documentation", href: "/docs" }}
          technologiesTabs={["NextJS", "Remix"]}
          activeTab={activeTechnology}
          onTabChange={setActiveTechnology}
        />
      )}
      {activeTab === IntegrationTab.Embed && (
        <CodeSnippetSection
          title={
            <h3 className="h3-desktop">
              Embed Buildel Chat directly on{" "}
              <span className="gradient-text">your website</span>
            </h3>
          }
          subtitle="It allows for a straightforward integration, offering your visitors the convenience of engaging with Buildel Chat directly on your site."
          imageDirectory="snippets/embed"
          cta={{ label: "See documentation", href: "/docs" }}
          technologiesTabs={["HTML", "React"]}
          activeTab={activeTechnology}
          onTabChange={setActiveTechnology}
        />
      )}

      {activeTab === IntegrationTab.OpenAI && (
        <CodeSnippetSection
          title={
            <h3 className="h3-desktop">
              Connect to Buildel through an{" "}
              <span className="gradient-text">OpenAI compliant interface</span>
            </h3>
          }
          subtitle="It allows for a straightforward integration, offering your visitors the convenience of engaging with Buildel Chat directly on your site."
          imageDirectory="snippets/openai-interface"
          cta={{ label: "See documentation", href: "/docs" }}
          technologiesTabs={["openai-interface"]}
          activeTab={activeTechnology}
          onTabChange={setActiveTechnology}
        />
      )}
    </section>
  );
};

import React from "react";
import { TabGroup } from "~/components/tabs/TabGroup";
import { Tab, TabButton } from "~/components/tabs/Tab";
import { InterfaceTabButton } from "~/components/interfaces/InterfaceTabButton";
interface InterfacesProps {}

export const Interfaces: React.FC<InterfacesProps> = () => {
  return (
    <section>
      <header className="text-center">
        <h2 className="text-3xl md:text-5xl mb-2">
          Try <span className="text-secondary-500">Buildel</span> Interfaces
        </h2>
        <p className="text-sm md:text-base max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fuga
          pariatur repellendus. Ad asperiores beatae facilis id, illo molestiae
          qui.
        </p>
      </header>

      <div className="mt-10 lg:mt-14">
        <TabGroup defaultActiveTab="chat">
          <div className="w-full grid grid-cols-4 gap-2 mb-8 lg:mb-10">
            <InterfaceTabButton tabId="chat">Chat</InterfaceTabButton>
            <InterfaceTabButton tabId="memory">Memory</InterfaceTabButton>
            <InterfaceTabButton tabId="providers">Providers</InterfaceTabButton>
            <InterfaceTabButton tabId="api-tools">Api Tools</InterfaceTabButton>
          </div>

          <Tab tabId="chat">
            <ChatInterface />
          </Tab>
          <Tab tabId="memory">memory</Tab>
          <Tab tabId="api-tools">api-tools</Tab>
        </TabGroup>
      </div>
    </section>
  );
};

function ChatInterface() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <div className="w-full rounded-lg bg-zinc-900 border border-neutral-950 h-[30vh]">
        <p>aa</p>
      </div>

      <div className="w-full rounded-lg bg-zinc-900 border border-neutral-950">
        <p>aa</p>
      </div>
    </div>
  );
}

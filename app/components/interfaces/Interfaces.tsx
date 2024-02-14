import React, { useEffect } from "react";
import { TabGroup } from "~/components/tabs/TabGroup";
import { Tab, TabButton } from "~/components/tabs/Tab";
import { InterfaceTabButton } from "~/components/interfaces/InterfaceTabButton";
interface InterfacesProps {}
import { BuildelRunStatus, BuildelSocket } from "@buildel/buildel";
export const Interfaces: React.FC<InterfacesProps> = () => {
  useEffect(() => {
    const organizationId = 27;
    const authUrl = "/buildel/auth";
    const buildel = new BuildelSocket(organizationId, { authUrl });

    const run = buildel.run(75, {
      onBlockOutput: (
        blockId: string,
        outputName: string,
        payload: unknown
      ) => {
        console.log(
          `Output from block ${blockId}, output ${outputName}:`,
          payload
        );
      },
      onBlockStatusChange: (blockId: string, isWorking: boolean) => {
        console.log(`Block ${blockId} is ${isWorking ? "working" : "stopped"}`);
      },
      onStatusChange: (status: BuildelRunStatus) => {
        console.log(`Status changed: ${status}`);
      },
      onBlockError: (blockId: string, errors: string[]) => {
        console.log(`Block ${blockId} errors: ${errors}`);
      },
    });

    buildel.connect().then(() => run.start());

    return () => {
      buildel.disconnect();
    };
  }, []);

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
          <div className="w-full grid grid-cols-4 gap-2 mb-8 lg:mb-12">
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
      <div className="w-full rounded-lg bg-dark/60 h-[30vh]">
        <p>aa</p>
      </div>

      <div className="w-full rounded-lg bg-dark/60">
        <p>aa</p>
      </div>
    </div>
  );
}

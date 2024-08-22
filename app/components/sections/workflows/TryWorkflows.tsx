import { Chat } from "~/icons/Chat";
import { Brain } from "~/icons/Brain";
import { Hierarchy } from "~/icons/Hierarchy";
import { API } from "~/icons/API";
import { Tab } from "~/components/shared/Tab";
import { useState } from "react";
import { BuildelProvider } from "~/components/buildel/BuildelSocket";
import {
  chatWorkflowConfig,
  memoryWorkflowConfig,
  multipleChatsWorkflowConfig,
  toolsWorkflowConfig,
} from "~/components/interfaces/WorkflowConfigs";
import { ChatInterface } from "~/components/sections/workflows/ChatInterface";
import { Workflow } from "~/utils/enums";

export const TryWorkflows = () => {
  const [workflow, setWorkFlow] = useState(Workflow.Chat);

  const getIconClassNames = (workflow: Workflow, active: boolean) => {
    let className = "text-lg ";
    if (workflow === Workflow.Chat && active) {
      className += "text-accent-blue";
    }
    if (workflow === Workflow.Memory && active) {
      className += "text-[#BB2BFF]";
    }
    if (workflow === Workflow.MultipleModels && active) {
      className += "text-orange-600";
    }
    if (workflow === Workflow.APITools && active) {
      className += "text-green-600";
    }

    return className;
  };

  const switchWorkflow = (workflow: Workflow) => {
    setWorkFlow(workflow);
  };

  const getConfig = (workflow: Workflow) => {
    if (workflow === Workflow.Chat) return chatWorkflowConfig;
    if (workflow === Workflow.Memory) return memoryWorkflowConfig;
    if (workflow === Workflow.MultipleModels) {
      return multipleChatsWorkflowConfig;
    }
    if (workflow === Workflow.APITools) {
      return toolsWorkflowConfig;
    }
    return chatWorkflowConfig;
  };

  const tabs = [
    {
      name: Workflow.Chat,
      icon: (
        <Chat
          className={getIconClassNames(workflow, workflow === Workflow.Chat)}
        />
      ),
    },
    {
      name: Workflow.Memory,
      icon: (
        <Brain
          className={getIconClassNames(workflow, workflow === Workflow.Memory)}
        />
      ),
    },
    {
      name: Workflow.MultipleModels,
      icon: (
        <Hierarchy
          className={getIconClassNames(
            workflow,
            workflow === Workflow.MultipleModels
          )}
        />
      ),
    },
    {
      name: Workflow.APITools,
      icon: (
        <API
          className={getIconClassNames(
            workflow,
            workflow === Workflow.APITools
          )}
        />
      ),
    },
  ];

  return (
    <section className="w-full h-auto lg:min-h-[100vh] bg-grey-background flex flex-col md:items-center py-6 lg:py-20">
      <h2 className="text-neutral-950 h2-desktop ml-4 lg:ml-0">
        Try BuildEL workflows
      </h2>

      <nav className="pl-4 lg:pl-0 mt-4 lg:mt-16 flex items-center w-full lg:w-auto overflow-x-auto overflow-y-hidden">
        {tabs.map((tab) => (
          <Tab
            key={tab.name}
            mode="light"
            className="w-max lg:w-[170px]"
            icon={tab.icon}
            active={workflow === tab.name}
            onClick={() => switchWorkflow(tab.name)}
          >
            {tab.name}
          </Tab>
        ))}
      </nav>

      <BuildelProvider>
        <ChatInterface
          key={workflow}
          config={getConfig(workflow)}
          currentWorkflow={workflow}
        />
      </BuildelProvider>
    </section>
  );
};

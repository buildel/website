import React, { useMemo, useRef, useState } from "react";
import { InterfaceTabButton } from "~/components/interfaces/InterfaceTabButton";
import { Tab } from "~/components/tabs/Tab";
import { TabGroup } from "~/components/tabs/TabGroup";
import { BuildelProvider, usePipelineRun } from "../buildel/BuildelSocket";
import {
  IWorkflowConfig,
  chatWorkflowConfig,
  memoryWorkflowConfig,
  multipleChatsWorkflowConfig,
  toolsWorkflowConfig,
} from "./WorkflowConfigs";
import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect";
import { IMessage, MessageRole } from "~/components/interfaces/chat.types";
import cloneDeep from "lodash.clonedeep";
import { v4 as uuidv4 } from "uuid";
import {
  ChatGeneratingAnimation,
  ChatHeader,
  ChatHeading,
  ChatMessagesWrapper,
  ChatStatus,
  ChatWrapper,
  IntroPanel,
} from "~/components/interfaces/Chat.components";
import { ChatInput } from "~/components/interfaces/ChatInput";
import clsx from "clsx";
import { ChatMessages } from "~/components/interfaces/ChatMessages";
import { useResize } from "../useResize";
import {
  Section,
  SectionHeader,
  SectionHeading,
  SectionSubheading,
} from "~/components/layout/Layout.components";
import { Block } from "~/components/sections/workflows/Block";

interface InterfacesProps {}

export const Interfaces: React.FC<InterfacesProps> = () => {
  return (
    <Section>
      <SectionHeader>
        <SectionHeading>Try Buildel Workflows</SectionHeading>
        <SectionSubheading></SectionSubheading>
      </SectionHeader>

      <div className="mt-10 lg:mt-14">
        <BuildelProvider>
          <TabGroup defaultActiveTab="chat">
            <div className="w-full grid grid-cols-4 gap-2 mb-8 lg:mb-12">
              <InterfaceTabButton tabId="chat">Chat</InterfaceTabButton>
              <InterfaceTabButton tabId="memory">Memory</InterfaceTabButton>
              <InterfaceTabButton tabId="multiple-models">
                Multiple Models
              </InterfaceTabButton>
              <InterfaceTabButton tabId="api-tools">
                Api Tools
              </InterfaceTabButton>
            </div>

            <Tab tabId="chat">
              <ChatInterface config={chatWorkflowConfig} />
            </Tab>
            <Tab tabId="memory">
              <ChatInterface config={memoryWorkflowConfig} />
            </Tab>
            <Tab tabId="multiple-models">
              <ChatInterface config={multipleChatsWorkflowConfig} />
            </Tab>
            <Tab tabId="api-tools">
              <ChatInterface config={toolsWorkflowConfig} />
            </Tab>
          </TabGroup>
        </BuildelProvider>
      </div>
    </Section>
  );
};

function ChatInterface({ config }: { config: IWorkflowConfig }) {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [blockStates, setBlockStates] = useState<Map<string, boolean>>(() => {
    const blockStates = new Map<string, boolean>();
    config.config.blocks.forEach((block) => {
      blockStates.set(block.name, false);
    });
    return blockStates;
  });

  const onBlockOutput = (
    blockId: string,
    _outputName: string,
    payload: unknown
  ) => {
    // todo: just text_output for now
    if (!blockId.includes(config.interface_config.output)) return;

    setMessages((prev) => {
      const tmpPrev = cloneDeep(prev);
      const lastMessage = tmpPrev[tmpPrev.length - 1];

      if (lastMessage && lastMessage.role === "ai") {
        tmpPrev[tmpPrev.length - 1].message += (
          payload as { message: string }
        ).message;

        return tmpPrev;
      }

      return [
        ...prev,
        {
          id: uuidv4(),
          role: "ai",
          message: (payload as { message: string }).message,
          created_at: new Date(),
        },
      ];
    });
  };

  const onBlockStatusChange = (blockId: string, isWorking: boolean) => {
    if (blockId.includes(config.interface_config.input) && isWorking) {
      setIsGenerating(true);
    }
    // @todo handle this chat block name
    if (blockId.includes(config.interface_config.chat) && !isWorking) {
      setIsGenerating(false);
    }

    setBlockStates((prev) => {
      const newBlockStates = new Map(prev);
      newBlockStates.set(blockId, isWorking);
      return newBlockStates;
    });
  };

  const { status, push } = usePipelineRun({
    onBlockOutput,
    onBlockStatusChange,
    runId: config.runId,
  });

  const handlePush = (message: string) => {
    if (!message.trim()) return;

    const newMessage = {
      message,
      id: uuidv4(),
      role: "user" as MessageRole,
      created_at: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);

    push(config.interface_config.input + ":input", message);
  };

  return (
    <div className="grid grid-rows-[350px_350px] grid-cols-1 md:grid-cols-2 md:grid-rows-[450px] gap-4">
      <div className="w-full rounded-lg h-full">
        <SimpleWorkflowRenderer config={config} blockStates={blockStates} />
      </div>

      <div className="w-full rounded-lg bg-dark/80 h-full">
        <ChatWrapper className="h-full !py-4 relative">
          <ChatHeader className="mb-1">
            <div className="flex gap-2 items-center">
              <ChatHeading>{config.name}</ChatHeading>
              <ChatStatus connectionStatus={status} />
            </div>
          </ChatHeader>

          <ChatMessagesWrapper>
            <ChatMessages messages={messages} />

            <ChatGeneratingAnimation
              messages={messages}
              isGenerating={isGenerating}
            />
          </ChatMessagesWrapper>

          <ChatInput
            onSubmit={handlePush}
            disabled={status !== "running"}
            generating={isGenerating}
          />

          <IntroPanel className={clsx({ hidden: !!messages.length })} />
        </ChatWrapper>
      </div>
    </div>
  );
}

interface SimpleWorkflowRendererProps {
  config: IWorkflowConfig;
  blockStates: Map<string, boolean>;
}
export function SimpleWorkflowRenderer({
  config,
  blockStates,
}: SimpleWorkflowRendererProps) {
  const { blocks, connections } = config.config;
  const container = useRef<HTMLDivElement>(null);
  const blockPositions = useRef<
    Map<string, { rect: DOMRect; offset: { left: number; top: number } }>
  >(new Map());
  const [containerSize, setContainerSize] = useState<DOMRect | undefined>();
  const windowSize = useResize();

  useIsomorphicLayoutEffect(() => {
    setContainerSize(container.current?.getBoundingClientRect());
  }, [windowSize]);

  const positionEdges = useMemo(
    () =>
      blocks.reduce(
        (acc, block) => {
          const xPadding = containerSize?.width || 200;
          const yPadding = containerSize?.height || 200;
          if (block.position.x - xPadding < acc.minX)
            acc.minX = block.position.x - xPadding;
          if (block.position.x + xPadding > acc.maxX)
            acc.maxX = block.position.x + xPadding;
          if (block.position.y - yPadding < acc.minY)
            acc.minY = block.position.y - yPadding;
          if (block.position.y + yPadding > acc.maxY)
            acc.maxY = block.position.y + yPadding;
          return acc;
        },
        {
          minX: 0,
          maxX: 0,
          minY: 0,
          maxY: 0,
        }
      ),
    [blocks, containerSize, windowSize]
  );

  const blocksWithNormalizedPositions = useMemo(
    () =>
      blocks.map((block) => {
        const totalWidth = positionEdges.maxX - positionEdges.minX;
        const totalHeight = positionEdges.maxY - positionEdges.minY;

        const normalizedX =
          ((block.position.x - positionEdges.minX) / totalWidth) * 100;
        const normalizedY =
          ((block.position.y - positionEdges.minY) / totalHeight) * 100;

        return {
          ...block,
          position: {
            x: normalizedX,
            y: normalizedY,
          },
        };
      }),
    [blocks, positionEdges]
  );

  return (
    <div className="w-full h-full p-4 flex relative bg-[size:300%] rounded-lg">
      <div className="w-full relative" ref={container}>
        {blocksWithNormalizedPositions.map((block, index) => (
          <Block
            key={index}
            block={block}
            blockStates={blockStates}
            blockPositions={blockPositions}
          />
        ))}
        {connections.flatMap((connection, index) => {
          const fromPosition = blockPositions.current.get(
            connection.from.block_name
          );
          const toPosition = blockPositions.current.get(
            connection.to.block_name
          );
          if (!fromPosition || !toPosition) return null;

          const outputPosition = {
            text: {
              top: fromPosition.offset.top,
              left: fromPosition.offset.left + fromPosition.rect.width / 2,
            },
            worker: {
              top: fromPosition.offset.top - fromPosition.rect.height / 2,
              left: fromPosition.offset.left,
            },
          }[connection.from.type] || { top: 0, left: 0 };

          const inputPosition = {
            text: {
              top: toPosition.offset.top,
              left: toPosition.offset.left - toPosition.rect.width / 2,
            },
            controller: {
              top: toPosition.offset.top + toPosition.rect.height / 2,
              left: toPosition.offset.left,
            },
          }[connection.to.type] || { top: 0, left: 0 };

          return [
            <svg key={index} className="absolute w-full h-full">
              <line
                className={clsx("stroke-current animate-dashdraw text-black")}
                strokeDasharray={6}
                style={{ strokeWidth: 1 }}
                x1={outputPosition.left}
                y1={outputPosition.top}
                x2={inputPosition.left}
                y2={inputPosition.top}
              />
            </svg>,
          ];
        })}
      </div>
    </div>
  );
}

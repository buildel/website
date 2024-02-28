import React, { useState } from "react";
import { IMessage, MessageRole } from "~/components/interfaces/chat.types";
import cloneDeep from "lodash.clonedeep";
import { v4 as uuidv4 } from "uuid";
import { usePipelineRun } from "~/components/buildel/BuildelSocket";
import {
  ChatGeneratingAnimation,
  ChatHeader,
  ChatHeading,
  ChatMessagesWrapper,
  ChatStatus,
  ChatWrapper,
  IntroPanel,
} from "~/components/interfaces/Chat.components";
import { ChatMessages } from "~/components/interfaces/ChatMessages";
import { ChatInput } from "~/components/interfaces/ChatInput";
import clsx from "clsx";
import { IWorkflowConfig } from "~/components/interfaces/WorkflowConfigs";
import { SimpleWorkflowRenderer } from "~/components/interfaces/Interfaces";

interface ChatInterfaceProps {
  config: IWorkflowConfig;
}

export const ChatInterface = ({ config }: ChatInterfaceProps) => {
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

  const updatesMessagesHistory = (message: string) => {
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
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 bg-neutral-100 p-4 relative overflow-hidden h-[80vh] w-full">
      <div className="w-full md:w-1/3 rounded-lg h-full z-10">
        <SimpleWorkflowRenderer config={config} blockStates={blockStates} />
      </div>

      <ChatWrapper className="h-full relative w-full md:w-1/3 rounded-lg bg-white z-10">
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
          onSubmit={updatesMessagesHistory}
          disabled={status !== "running"}
          generating={isGenerating}
        />

        <IntroPanel className={clsx({ hidden: !!messages.length })} />
      </ChatWrapper>

      <div className="absolute top-0 z-[2] w-full h-[200px] bg-gradient-to-b from-grey-background to-neutral-100/0" />
      <img
        src="/assets/checked-pattern.svg"
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt=""
      />
      <div className="absolute bottom-0 z-[2] w-full h-[200px] bg-gradient-to-t from-grey-background to-neutral-100/0" />
    </div>
  );
};

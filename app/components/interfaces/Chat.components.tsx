import React, { PropsWithChildren, useMemo } from "react";
import { IMessage } from "./chat.types";
import { BuildelRunStatus } from "@buildel/buildel";
import clsx from "clsx";
import { Workflow } from "~/utils/enums";
import { Chat } from "~/components/interfaces/initial-views/Chat";

interface ChatWrapperProps {
  className?: string;
}

export const ChatWrapper: React.FC<PropsWithChildren<ChatWrapperProps>> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        "w-full rounded-xl border border-neutral-100 px-3 pt-2 pb-3 flex flex-col gap-2 max-h-[400px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const ChatHeading: React.FC<PropsWithChildren> = ({ children }) => (
  <h3 className="flex gap-2 items-center text-neutral-950">{children}</h3>
);

interface ChatHeaderProps {
  className?: string;
}

export const ChatHeader: React.FC<PropsWithChildren<ChatHeaderProps>> = ({
  children,
  className,
}) => {
  return (
    <header
      className={clsx("flex justify-between gap-2 items-center", className)}
    >
      {children}
    </header>
  );
};

interface ChatMessagesWrapperProps {
  className?: string;
}

export const ChatMessagesWrapper: React.FC<
  PropsWithChildren<ChatMessagesWrapperProps>
> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "w-full rounded-lg grow max-h-[calc(100%-80px)]",
        className
      )}
    >
      {children}
    </div>
  );
};

interface ChatGeneratingAnimationProps {
  messages: IMessage[];
  isGenerating: boolean;
}

export const ChatGeneratingAnimation = ({
  messages,
  isGenerating,
}: ChatGeneratingAnimationProps) => {
  const renderMessage = () => {
    if (!messages.length) return;
    const lastMessage = messages[messages.length - 1];

    if (
      lastMessage.role === "user" ||
      (lastMessage.role === "ai" && !lastMessage.message.length)
    ) {
      return "Thinking...";
    }

    return "Generating...";
  };

  if (!isGenerating) return null;
  return (
    <div className="flex gap-0.5 items-center">
      <span className="text-[10px] text-neutral-400 mr-1">
        {renderMessage()}
      </span>
      <div className="w-1 h-1 rounded-full bg-secondary-400 animate-bounce" />
      <div className="w-1 h-1 rounded-full bg-secondary-800 animate-[bounce_1s_0.5s_ease-in-out_infinite]" />
      <div className="w-1 h-1 rounded-full bg-secondary-600 animate-bounce" />
    </div>
  );
};

interface ChatStatusProps {
  connectionStatus: BuildelRunStatus;
}
export const ChatStatus = ({ connectionStatus }: ChatStatusProps) => {
  const mappedStatusToText = useMemo(() => {
    switch (connectionStatus) {
      case "starting":
        return "Starting";
      case "running":
        return "Running";
      default:
        return "Not running";
    }
  }, [connectionStatus]);

  return (
    <div
      title={mappedStatusToText}
      className={clsx(
        "py-0.5 px-1.5 bg-green-200 rounded-full flex gap-1 items-center",
        {
          "bg-red-100": connectionStatus === "idle",
          "bg-green-100": connectionStatus === "running",
          "bg-orange-100": connectionStatus === "starting",
        }
      )}
    >
      <div
        className={clsx("w-2 h-2 rounded-full", {
          "bg-red-500": connectionStatus === "idle",
          "bg-green-500": connectionStatus === "running",
          "bg-orange-500": connectionStatus === "starting",
        })}
      />

      <span
        className={clsx("text-xs text-green-600", {
          "text-red-500": connectionStatus === "idle",
          "text-green-500": connectionStatus === "running",
          "text-orange-500": connectionStatus === "starting",
        })}
      >
        {mappedStatusToText}
      </span>
    </div>
  );
};

interface IntroPanelProps {
  onPredefinedMessageClick: (message: string) => void;
  currentWorkflow: Workflow;
}

export const IntroPanel = ({
  onPredefinedMessageClick,
  currentWorkflow,
}: IntroPanelProps) => {
  const topics = ["Tell a joke", "What was first, egg or chicken?"];

  // TODO/UX: Order of sections here below to should be reversed

  if (currentWorkflow === Workflow.Chat) {
    return <Chat onPredefinedMessageClick={onPredefinedMessageClick} />;
  }

  return (
    <div className="h-full p-4 rounded-xl text-neutral-950 text-sm flex flex-col items-center justify-center">
      <div className="flex items-start gap-x-4">
        <div className="h-14 w-14 rounded-full bg-yellow-50 border border-yellow-100 flex items-center justify-center text-3xl">
          👋
        </div>
        <div className="flex flex-col">
          <p className="font-primaryBold text-lg">Hey!</p>
          <p className="text-neutral-800 mt-1 text-base">Ask me anything</p>
        </div>
      </div>

      <div className="w-full flex justify-between items-center gap-x-3 my-4">
        <span className="border-t border-neutral-100 w-full h-0" />
        <p className="font-primaryBold text-neutral-400">or</p>
        <span className="border-t border-neutral-100 w-full h-0" />
      </div>

      <div className="flex flex-col items-center">
        <p>Choose topic</p>

        <div className="flex flex-wrap gap-x-3 items-center w-full mt-2">
          {topics.map((topic, index) => (
            <button
              key={index}
              onClick={() => onPredefinedMessageClick(topic)}
              className="px-2 py-1 rounded-full bg-neutral-100 hover:bg-neutral-200"
            >
              {topic}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

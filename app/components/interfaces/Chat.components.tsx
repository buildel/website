import React, { PropsWithChildren, useMemo } from "react";
import { IMessage } from "./chat.types";
import { BuildelRunStatus } from "@buildel/buildel";
import clsx from "clsx";

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
  className?: string;
}

export const IntroPanel = ({ className }: IntroPanelProps) => {
  return (
    <div
      className={clsx(
        "p-4 rounded-xl text-neutral-950 text-sm absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center justify-center",
        className
      )}
    >
      <p className="text-lg">Hey! 👋</p>
      <p>Ask me anything!</p>
    </div>
  );
};

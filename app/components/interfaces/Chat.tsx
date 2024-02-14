import React from "react";
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
interface ChatProps {}

export const Chat: React.FC<ChatProps> = () => {
  return (
    <ChatWrapper className="max-w-[820px] h-[500px] !py-4 relative">
      <ChatHeader className="mb-1">
        <div className="flex gap-2 items-center">
          <ChatHeading>Simple Chat</ChatHeading>
          <ChatStatus connectionStatus={connectionStatus} />
        </div>
      </ChatHeader>

      <ChatMessagesWrapper>
        {/*<ChatMessages messages={messages} />*/}

        <ChatGeneratingAnimation
          messages={messages}
          isGenerating={isGenerating}
        />
      </ChatMessagesWrapper>

      <ChatInput
        onSubmit={pushMessage}
        disabled={connectionStatus !== "running"}
        generating={isGenerating}
      />

      <IntroPanel className={clsx({ hidden: !!messages.length })}>
        <p>Ask me anything!</p>
      </IntroPanel>
    </ChatWrapper>
  );
};

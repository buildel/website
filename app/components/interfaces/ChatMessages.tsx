import React, { PropsWithChildren, useMemo } from "react";

import { ItemList } from "~/components/list/ItemList";

import { ChatSize, IMessage, MessageRole } from "./chat.types";
import clsx from "clsx";
import { ChatMarkdown } from "~/components/interfaces/ChatMarkdown";

interface ChatMessagesProps {
  messages: IMessage[];
  initialMessages?: IMessage[];
  size?: ChatSize;
}

export function ChatMessages({ messages, initialMessages }: ChatMessagesProps) {
  const reversed = useMemo(() => {
    if (!messages.length) return initialMessages ?? [];
    return messages.map((_, idx) => messages[messages.length - 1 - idx]);
  }, [messages, initialMessages]);

  return (
    <ItemList
      className={clsx(
        "flex flex-col-reverse gap-2 min-w-full w-full h-[97%] overflow-y-auto pr-1 prose"
      )}
      itemClassName="w-full"
      items={reversed}
      renderItem={(msg) => (
        <ChatMessage role={msg.role}>
          <ChatMarkdown>{msg.message}</ChatMarkdown>
        </ChatMessage>
      )}
    />
  );
}

interface ChatMessageProps {
  role: MessageRole;
}

function ChatMessage({ role, children }: PropsWithChildren<ChatMessageProps>) {
  return (
    <article
      className={clsx(
        "w-full max-w-[60%] min-h-[30px] rounded-t-xl border border-neutral-950 px-2 py-1.5 prose ",
        {
          "bg-dark/40 rounded-br-xl": role === "ai",
          "bg-dark/40 rounded-bl-xl ml-auto mr-0": role !== "ai",
        }
      )}
    >
      {children}
    </article>
  );
}

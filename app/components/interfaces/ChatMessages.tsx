import { PropsWithChildren, useMemo } from "react";

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
        "flex flex-col-reverse gap-2 min-w-full w-full h-[97%] overflow-y-auto prose"
      )}
      itemClassName="w-full"
      items={reversed}
      renderItem={({ role, message }) => (
        <ChatMessage role={role}>
          <ChatMarkdown>{message}</ChatMarkdown>
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
    <div
      className={clsx(
        "max-w-[80%] lg:max-w-[60%] min-h-[30px] rounded-t-xl px-3 py-2 prose",
        {
          "bg-neutral-100 text-neutral-950 rounded-br-xl": role === "ai",
          "bg-neutral-950 text-white rounded-bl-xl ml-auto mr-0": role === "user",
        }
      )}
    >
      {children}
    </div>
  );
}

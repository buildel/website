import { Database } from "~/icons/Database";
import { motion } from "framer-motion";
import { Send } from "~/icons/Send";
import { useRef, useState } from "react";
import { IMessage } from "~/components/interfaces/chat.types";
import { Workflow } from "~/utils/enums";

interface InputProps {
  onClick: (message: string) => void;
  conversationStarted: boolean;
  currentWorkflow: Workflow;
}

const chatTopics = [
  "Tell a joke",
  "What was first, egg or chicken?",
  "Write email to my boss",
];

const memoryTopics = ["Who is now CTO in EL Passion?", "What is ELP Coin?"];

const multiModelTopics = [""];

const getPredefinedTopics = (currentWorkflow: Workflow) => {
  if (currentWorkflow === Workflow.Chat) return chatTopics;
  if (currentWorkflow === Workflow.Memory) return memoryTopics;
  if (currentWorkflow === Workflow.MultipleModels) return multiModelTopics;
  if (currentWorkflow === Workflow.APITools) return [];
};
export const Input = ({
  onClick,
  currentWorkflow,
  conversationStarted,
}: InputProps) => {
  const [message, setMessage] = useState("");
  const count = useRef(0);

  return (
    <motion.div
      key={count.current}
      initial={{ scale: 1 }}
      animate={
        count.current > 0
          ? {
              scale: [1, 1.05, 1],
              boxShadow: [
                "0px 0px 0px 0px",
                "0px 0px 20px 40px",
                "0px 0px 0px 0px",
              ],
              transition: { duration: 0.2, ease: "easeInOut" },
            }
          : {}
      }
      className="bg-white rounded-2xl p-1.5 w-full"
    >
      <form
        onSubmit={(event) => event.preventDefault()}
        className="flex items-center w-[300px] lg:w-full h-10 bg-neutral-100 pl-3 pr-1 rounded-xl"
      >
        <input
          type="text"
          className="bg-neutral-100 focus:outline-0 text-black lg:w-[400px] w-[260px]"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Ask me anything..."
        />
        <button
          className="bg-neutral-950 h-8 w-8 flex items-center justify-center rounded-lg"
          onClick={() => {
            onClick(message);
            setMessage("");
            count.current++;
          }}
        >
          <Send />
        </button>
      </form>
    </motion.div>
  );
};

export const CrewMember = () => {
  return (
    <div className="bg-neutral-950 flex items-center font-mono px-3 py-1.5 gap-x-2 rounded-lg">
      <p className="text-green-400">GET</p>
      <p className="text-neutral-300 font-mono text-sm lg:text-base">/crew/:id</p>
    </div>
  );
};

export const Wikipedia = () => {
  return (
    <div className="bg-neutral-950 flex items-center px-3 py-1.5 gap-x-2 rounded-lg">
      <p className="text-white text-sm lg:text-base">Wikipedia</p>
    </div>
  );
};

export const LatestLaunch = () => {
  return (
    <div className="bg-neutral-950 flex items-center font-mono px-3 py-1.5 gap-x-2 rounded-lg">
      <p className="text-green-400">GET</p>
      <p className="text-neutral-300 text-sm lg:text-base">/launches/latest</p>
    </div>
  );
};

interface OutputProps {
  messages: IMessage[];
}

export const Output = ({ messages = [] }: OutputProps) => {
  const latestMessage = messages[messages.length - 1];

  const restMessages = messages.length - 1;

  return (
    <div className="min-h-10 text-neutral-950 w-[400px] flex justify-center items-center">
      {messages.length === 0 && (
        <p className="bg-white px-4 py-2 rounded-lg text-neutral-800 max-w-max flex justify-center">
          Ask AI anything to see response here
        </p>
      )}
      <div className="flex flex-col bg-white rounded-lg">
        {messages.length > 1 && (
          <p className="w-full flex justify-center text-sm py-1 text-neutral-400">
            +{restMessages} more
          </p>
        )}
        {messages.length > 0 && (
          <div className="p-1.5 w-full">
            <p>{latestMessage.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

interface BlockProps {
  triggered: boolean;
}

export const AIChat = ({ triggered }: BlockProps) => {
  return (
    <motion.div
      animate={{ scale: triggered ? 1.1 : 1 }}
      className="bg-neutral-950 rounded-lg p-3"
    >
      <img src="/assets/models/openai-white.svg" alt="openai logo" />
    </motion.div>
  );
};

export const MistralAI = ({ triggered }: BlockProps) => {
  return (
    <motion.div
      animate={{ scale: triggered ? 1.25 : 1 }}
      className="flex items-center gap-x-2 bg-neutral-950 p-3 rounded-lg"
    >
      <img
        src="/assets/models/mistral-ai.png"
        className="h-6"
        alt="mistral ai logo"
      />
    </motion.div>
  );
};

export const VectorDatabase = ({ triggered }: BlockProps) => {
  return (
    <motion.div
      animate={{ scale: triggered ? 1.25 : 1 }}
      className="flex items-center gap-x-2 bg-neutral-950 text-white rounded-lg p-3"
    >
      <Database />
      Vector database
    </motion.div>
  );
};

export const SpaceXAPI = () => {
  return (
    <p className="px-3 py-1.5 rounded-lg bg-neutral-950 text-white">
      SpaceX API
    </p>
  );
};

export const Leader = ({ triggered }: BlockProps) => {
  return (
    <motion.div
      className="bg-neutral-950 p-3 rounded-lg w-full lg:w-[180px]"
      animate={{ scale: triggered ? 1.08 : 1 }}
    >
      <img src="/assets/models/openai-white.svg" alt="openai logo" />
      <div className="mt-3">
        <p className="text-xs text-neutral-600">Role</p>
        <p className="text-neutral-200">Leader</p>
      </div>
    </motion.div>
  );
};

export const SpanishTranslator = ({ triggered }: BlockProps) => {
  return (
    <motion.div
      className="bg-neutral-950 p-3 rounded-lg w-max lg:w-[180px]"
      animate={{ scale: triggered ? 1.08 : 1 }}
    >
      <img src="/assets/models/gemini.svg" className="h-5" alt="openai logo" />
      <div className="mt-3">
        <p className="text-xs text-neutral-600">Role</p>
        <p className="text-neutral-200">Spanish Translator</p>
      </div>
    </motion.div>
  );
};

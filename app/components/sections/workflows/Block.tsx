import clsx from "clsx";
import { MutableRefObject } from "react";
import { BlockName, IBlock } from "~/components/interfaces/WorkflowConfigs";
import {
  AIChat,
  CrewMember,
  Input,
  LatestLaunch,
  Leader,
  MistralAI,
  Output,
  SpaceXAPI,
  SpanishTranslator,
  VectorDatabase,
  Wikipedia,
} from "~/components/sections/workflows/BlockTypes";
import { IMessage } from "~/components/interfaces/chat.types";
import { Workflow } from "~/utils/enums";

interface BlockProps {
  block: IBlock;
  blockStates: Map<string, boolean>;
  blockPositions: MutableRefObject<
    Map<string, { rect: DOMRect; offset: { left: number; top: number } }>
  >;
  onMessageSend: (message: string) => void;
  aiAnswers: IMessage[];
  currentWorkflow: Workflow;
}
export const Block = ({
  blockPositions,
  blockStates,
  block,
  onMessageSend,
  aiAnswers,
  currentWorkflow,
}: BlockProps) => {
  return (
    <div
      ref={(element) => {
        blockPositions.current.set(block.name, {
          offset: {
            left: element?.offsetLeft || 0,
            top: element?.offsetTop || 0,
          },
          rect: element?.getBoundingClientRect() || new DOMRect(),
        });
      }}
      className={clsx(
        "absolute rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition z-[1]",
        {
          "origin-bottom": block.name === BlockName.Output,
          // "border-primary-500 bg-primary-500": blockStates.get(block.name),
          // "bg-neutral-950": !blockStates.get(block.name),
        }
      )}
      style={{
        left: block.position.x + "%",
        top: block.position.y + "%",
      }}
    >
      {block.name === BlockName.Input && (
        <Input
          currentWorkflow={currentWorkflow}
          onClick={onMessageSend}
          conversationStarted={(aiAnswers || []).length > 0}
        />
      )}
      {block.name === BlockName.LatestLaunch && <LatestLaunch />}

      {block.name === BlockName.CrewMember && <CrewMember />}

      {block.name === BlockName.Wikipedia && <Wikipedia />}

      {block.name === BlockName.Leader && (
        <Leader triggered={!!blockStates.get(BlockName.Leader)} />
      )}
      {block.name === BlockName.SpanishTranslator && (
        <SpanishTranslator
          triggered={!!blockStates.get(BlockName.SpanishTranslator)}
        />
      )}
      {block.name === BlockName.Chat && (
        <AIChat triggered={!!blockStates.get(BlockName.Chat)} />
      )}
      {block.name === BlockName.MistralVectorDB && (
        <VectorDatabase
          triggered={!!blockStates.get(BlockName.MistralVectorDB)}
        />
      )}
      {block.name === BlockName.MistralAI && (
        <MistralAI triggered={!!blockStates.get(BlockName.MistralAI)} />
      )}
      {block.name === BlockName.Output && <Output messages={aiAnswers} />}
      {block.name === BlockName.SpaceX && <SpaceXAPI />}
    </div>
  );
};

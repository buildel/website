import React, { useMemo, useRef, useState } from "react";
import { IWorkflowConfig, BlockName } from "./WorkflowConfigs";
import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect";
import { IMessage } from "~/components/interfaces/chat.types";
import clsx from "clsx";
import { useResize } from "../useResize";
import { Block } from "~/components/sections/workflows/Block";
import { Workflow } from "~/utils/enums";

interface SimpleWorkflowRendererProps {
  config: IWorkflowConfig;
  blockStates: Map<string, boolean>;
  onMessageSend: (message: string) => void;
  aiAnswers: IMessage[];
  isGenerating: boolean;
  currentWorkflow: Workflow;
}
export function SimpleWorkflowRenderer({
  config,
  blockStates,
  onMessageSend,
  aiAnswers,
  currentWorkflow,
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

  const centered = [BlockName.Input, BlockName.Chat, BlockName.Output];

  const blocksWithNormalizedPositions = useMemo(
    () =>
      blocks.map((block) => {
        const totalWidth = positionEdges.maxX - positionEdges.minX;
        const totalHeight = positionEdges.maxY - positionEdges.minY;

        const normalizedX =
          ((block.position.x - positionEdges.minX) / totalWidth) * 100;
        const normalizedY =
          ((block.position.y - positionEdges.minY) / totalHeight) * 100;

        let position = {
          x: normalizedX,
          y: normalizedY,
        };

        if (centered.includes(block.name)) {
          position = {
            x: 50,
            y: normalizedY,
          };
        }

        return {
          ...block,
          position,
        };
      }),
    [blocks, positionEdges]
  );

  return (
    <div
      className="w-full h-full flex relative bg-[size:300%] rounded-lg"
      ref={container}
    >
      {blocksWithNormalizedPositions.map((block, index) => (
        <Block
          key={index}
          currentWorkflow={currentWorkflow}
          block={block}
          blockStates={blockStates}
          blockPositions={blockPositions}
          onMessageSend={onMessageSend}
          aiAnswers={aiAnswers}
        />
      ))}
      {connections.flatMap((connection, index) => {
        const fromPosition = blockPositions.current.get(
          connection.from.block_name
        );

        const toPosition = blockPositions.current.get(connection.to.block_name);
        if (!fromPosition || !toPosition) return null;

        const outputPosition = {
          text: {
            top: fromPosition.offset.top,
            left: fromPosition.offset.left,
          },
          worker: {
            top: fromPosition.offset.top - fromPosition.rect.height / 2,
            left: fromPosition.offset.left,
          },
        }[connection.from.type] || { top: 0, left: 0 };

        const inputPosition = {
          text: {
            top: toPosition.offset.top,
            left: toPosition.offset.left,
          },
          controller: {
            top: toPosition.offset.top + toPosition.rect.height / 2,
            left: toPosition.offset.left,
          },
        }[connection.to.type] || { top: 0, left: 0 };

        return [
          <svg key={index} className="absolute w-full h-full">
            <line
              className={clsx(
                "stroke-current animate-dashdraw text-neutral-400"
              )}
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
  );
}

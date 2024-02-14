import { BuildelRunStatus, BuildelSocket } from "@buildel/buildel";
import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { InterfaceTabButton } from "~/components/interfaces/InterfaceTabButton";
import { Tab } from "~/components/tabs/Tab";
import { TabGroup } from "~/components/tabs/TabGroup";
import { BuildelProvider, useBuildelSocket } from "../buildel/BuildelSocket";
import { IWorkflowConfig, chatWorkflowConfig } from "./WorkflowConfigs";
import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect";
import { useResize } from "../useResize";

interface InterfacesProps {}

export const Interfaces: React.FC<InterfacesProps> = () => {
  return (
    <section>
      <header className="text-center">
        <h2 className="text-3xl md:text-5xl mb-2">
          Try <span className="text-secondary-500">Buildel</span> Interfaces
        </h2>
        <p className="text-sm md:text-base max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fuga
          pariatur repellendus. Ad asperiores beatae facilis id, illo molestiae
          qui.
        </p>
      </header>

      <div className="mt-10 lg:mt-14">
        <BuildelProvider>
          <TabGroup defaultActiveTab="chat">
            <div className="w-full grid grid-cols-4 gap-2 mb-8 lg:mb-12">
              <InterfaceTabButton tabId="chat">Chat</InterfaceTabButton>
              <InterfaceTabButton tabId="memory">Memory</InterfaceTabButton>
              <InterfaceTabButton tabId="providers">
                Providers
              </InterfaceTabButton>
              <InterfaceTabButton tabId="api-tools">
                Api Tools
              </InterfaceTabButton>
            </div>

            <Tab tabId="chat">
              <ChatInterface />
            </Tab>
            <Tab tabId="memory">memory</Tab>
            <Tab tabId="api-tools">api-tools</Tab>
          </TabGroup>
        </BuildelProvider>
      </div>
    </section>
  );
};

function ChatInterface() {
  const buildel = useBuildelSocket();

  useEffect(() => {
    if (!buildel.buildel) return;

    const run = buildel.buildel.run(75, {
      onBlockOutput: (
        blockId: string,
        outputName: string,
        payload: unknown
      ) => {
        console.log(
          `Output from block ${blockId}, output ${outputName}:`,
          payload
        );
      },
      onBlockStatusChange: (blockId: string, isWorking: boolean) => {
        console.log(`Block ${blockId} is ${isWorking ? "working" : "stopped"}`);
      },
      onStatusChange: (status: BuildelRunStatus) => {
        console.log(`Status changed: ${status}`);
      },
      onBlockError: (blockId: string, errors: string[]) => {
        console.log(`Block ${blockId} errors: ${errors}`);
      },
    });

    run.start().then(() => {
      console.log("started");
    });

    return () => {
      run.stop().then(() => {
        console.log("stopped");
      });
    };
  }, [buildel.buildel]);

  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <div className="w-full rounded-lg h-[30vh]">
        <SimpleWorkflowRenderer config={chatWorkflowConfig} />
      </div>

      <div className="w-full rounded-lg bg-dark/60">
        <p>aa</p>
      </div>
    </div>
  );
}

function SimpleWorkflowRenderer({ config }: { config: IWorkflowConfig }) {
  const { blocks, connections } = config.config;
  const container = useRef<HTMLDivElement>(null);
  const blockPositions = useRef<
    Map<string, { rect: DOMRect; offset: { left: number; top: number } }>
  >(new Map());
  const [containerSize, setContainerSize] = useState<DOMRect | undefined>();
  const windowSize = useResize();

  useIsomorphicLayoutEffect(() => {
    setContainerSize(container.current?.getBoundingClientRect());
    console.log("containerSize", containerSize);
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
    <div className="w-full h-full p-4 flex relative bg-dark bg-hero-pattern bg-[size:300%] rounded-lg">
      <div className="w-full relative" ref={container}>
        {blocksWithNormalizedPositions.map((block, index) => {
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
              key={index}
              className="absolute bg-neutral-800 rounded-lg p-4 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center shadow-md"
              style={{
                left: block.position.x + "%",
                top: block.position.y + "%",
              }}
            >
              <h3 className="text-light">{block.name}</h3>
            </div>
          );
        })}
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
            // <div
            //   className="absolute h-2 w-2  -translate-x-1/2 -translate-y-1/2"
            //   style={outputPosition}
            //   key={index}
            // ></div>,
            // <div
            //   className="absolute h-2 w-2 bg-red-500 -translate-x-1/2 -translate-y-1/2"
            //   style={inputPosition}
            //   key={index + "2"}
            // ></div>,
            <svg className="absolute w-full h-full">
              <line
                className="stroke-current"
                strokeDasharray={3}
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

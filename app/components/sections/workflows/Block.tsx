import clsx from "clsx";
import { MutableRefObject } from "react";
import { IBlock } from "~/components/interfaces/WorkflowConfigs";
import { useBlockContent } from "~/components/sections/workflows/useBlockContent";

interface BlockProps {
  block: IBlock;
  blockStates: Map<string, boolean>;
  blockPositions: MutableRefObject<
    Map<string, { rect: DOMRect; offset: { left: number; top: number } }>
  >;
}
export const Block = ({ blockPositions, blockStates, block }: BlockProps) => {
  const { renderContent } = useBlockContent(block);

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
        "absolute rounded-full px-3 py-1.5 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center shadow-md transition z-[1]",
        {
          "border-primary-500 bg-primary-500": blockStates.get(block.name),
          "bg-neutral-950": !blockStates.get(block.name),
        }
      )}
      style={{
        left: block.position.x + "%",
        top: block.position.y + "%",
      }}
    >
      {renderContent()}
    </div>
  );
};

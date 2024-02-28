import clsx from "clsx";
import { MutableRefObject } from "react";
import { BlockName } from "~/components/interfaces/WorkflowConfigs";

interface BlockProps {
  block: {
    name: string;
    position: {
      x: number;
      y: number;
    };
  };
  blockStates: Map<string, boolean>;
  blockPositions: MutableRefObject<
    Map<string, { rect: DOMRect; offset: { left: number; top: number } }>
  >;
}
export const Block = ({ blockPositions, blockStates, block }: BlockProps) => {
  const renderPillContent = () => {
    if (block.name === BlockName.MistralAI) {
      return (
        <img
          src="/assets/models/mistral-ai.png"
          className="h-6"
          alt="Mistral AI logo"
        />
      );
    }
    return (
      <p className="text-neutral-100 text-sm capitalize whitespace-nowrap">
        {block.name.split("_").join(" ")}
      </p>
    );
  };

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
        "absolute rounded-full px-3 py-1.5 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center shadow-md transition",
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
      {renderPillContent()}
    </div>
  );
};

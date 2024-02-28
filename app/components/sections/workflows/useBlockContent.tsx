import { BlockName, IBlock } from "~/components/interfaces/WorkflowConfigs";
import { Database } from "~/icons/Database";

export const useBlockContent = (block: IBlock) => {
  const renderContent = () => {
    if (block.name === BlockName.MistralAI) {
      return (
        <img
          src="/assets/models/mistral-ai.png"
          className="h-6"
          alt="Mistral AI logo"
        />
      );
    }

    if (block.name === BlockName.SpaceX) return <p>SpaceX API</p>;

    if (block.name === BlockName.CrewMember) return <p>/crew/:id</p>;

    if (block.name === BlockName.Wikipedia) return <p>Wikipedia</p>;

    if (block.name === BlockName.LatestLaunch) return <p>/launches/latest</p>;

    if (block.name === BlockName.MistralVectorDB) {
      return (
        <div className="flex items-center gap-x-2">
          <Database className="text-white" />
          Vector database
        </div>
      );
    }

    return (
      <p className="text-neutral-100 text-sm capitalize whitespace-nowrap">
        {block.name.split("_").join(" ")}
      </p>
    );
  };

  return { renderContent };
};

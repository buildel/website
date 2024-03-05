export enum BlockName {
  Input = "Input",
  Output = "Output",
  Chat = "Chat",
  MistralAI = "MistralSpecialist",
  MistralVectorDB = "MistralKnowledge",
  Leader = "Leader",
  SpanishTranslator = "SpanishTranslator",
  SpaceX = "SpaceX",
  LatestLaunch = "LatestLaunch",
  CrewMember = "CrewMember",
  Wikipedia = "WikipediaArticle",
}

export interface IBlock {
  name: BlockName;
  type: string;
  position: { x: number; y: number };
}

export interface IWorkflowConfig {
  runId: number;
  name: string;
  config: {
    version: string;
    blocks: IBlock[];
    connections: {
      from: { block_name: string; output_name: string; type: string };
      to: { block_name: string; input_name: string; type: string };
      opts: { reset: boolean };
    }[];
  };
  interface_config: {
    input: string;
    output: string;
    chat: string;
  };
}

export const chatWorkflowConfig: IWorkflowConfig = {
  runId: 75,
  name: "Chat",
  config: {
    version: "1",
    blocks: [
      {
        name: BlockName.Input,
        position: { x: -490.5837364388194, y: -1700 },
        type: "text_input",
      },
      {
        name: BlockName.Chat,
        position: { x: -500.4596274474532, y: -900 },
        type: "chat",
      },
      {
        name: BlockName.Output,
        position: { x: -500.78785017928647, y: -100 },
        type: "text_output",
      },
    ],
    connections: [
      {
        from: {
          block_name: "Input",
          output_name: "output",
          type: "text",
        },
        to: { block_name: "Chat", input_name: "input", type: "text" },
        opts: { reset: true },
      },
      {
        from: { block_name: "Chat", output_name: "output", type: "text" },
        to: { block_name: "Output", input_name: "input", type: "text" },
        opts: { reset: true },
      },
      {
        from: {
          block_name: "api_call_tool_1",
          output_name: "tool",
          type: "worker",
        },
        to: { block_name: "Chat", input_name: "tool", type: "controller" },
        opts: { reset: true },
      },
    ],
  },
  interface_config: {
    input: "Input",
    output: "Output",
    chat: "Chat",
  },
};

export const multipleChatsWorkflowConfig: IWorkflowConfig = {
  runId: 77,
  name: "MultipleModels",
  interface_config: { input: "Input", output: "Output", chat: "Leader" },
  config: {
    version: "1",
    blocks: [
      {
        name: BlockName.Input,
        position: { x: -740, y: -300 },
        type: "text_input",
      },
      {
        name: BlockName.Leader,
        position: { x: -485, y: 0 },
        type: "chat",
      },
      {
        name: BlockName.SpanishTranslator,
        position: { x: -1000, y: 0 },
        type: "chat",
      },
      {
        name: BlockName.Output,
        position: { x: -740, y: 300 },
        type: "text_output",
      },
    ],
    connections: [
      {
        from: {
          block_name: "SpanishTranslator",
          output_name: "chat",
          type: "worker",
        },
        to: { block_name: "Leader", input_name: "tool", type: "controller" },
        opts: { reset: true },
      },
      {
        from: { block_name: "Input", output_name: "output", type: "text" },
        to: { block_name: "Leader", input_name: "input", type: "text" },
        opts: { reset: true },
      },
      {
        from: { block_name: "Leader", output_name: "output", type: "text" },
        to: { block_name: "Output", input_name: "input", type: "text" },
        opts: { reset: true },
      },
    ],
  },
};

export const toolsWorkflowConfig: IWorkflowConfig = {
  runId: 78,
  name: "SpaceX",
  interface_config: {
    input: "Input",
    output: "Output",
    chat: "SpaceX",
  },
  config: {
    version: "1",
    blocks: [
      {
        name: BlockName.Input,
        position: { x: -700, y: -130 },
        type: "text_input",
      },
      {
        name: BlockName.SpaceX,
        position: { x: -700, y: 350 },
        type: "chat",
      },
      {
        name: BlockName.LatestLaunch,
        position: { x: 100, y: 100 },
        type: "api_call_tool",
      },
      {
        name: BlockName.CrewMember,
        position: { x: 10, y: 300 },
        type: "api_call_tool",
      },
      {
        name: BlockName.Wikipedia,
        position: { x: -60, y: 480 },
        type: "api_call_tool",
      },
      {
        name: BlockName.Output,
        position: { x: -600, y: 800 },
        type: "text_output",
      },
    ],
    connections: [
      {
        from: {
          block_name: "LatestLaunch",
          output_name: "tool",
          type: "worker",
        },
        to: { block_name: "SpaceX", input_name: "tool", type: "controller" },
        opts: { reset: true },
      },
      {
        from: { block_name: "CrewMember", output_name: "tool", type: "worker" },
        to: { block_name: "SpaceX", input_name: "tool", type: "controller" },
        opts: { reset: true },
      },
      {
        from: {
          block_name: "WikipediaArticle",
          output_name: "tool",
          type: "worker",
        },
        to: { block_name: "SpaceX", input_name: "tool", type: "controller" },
        opts: { reset: true },
      },
      {
        from: { block_name: "Input", output_name: "output", type: "text" },
        to: { block_name: "SpaceX", input_name: "input", type: "text" },
        opts: { reset: true },
      },
      {
        from: { block_name: "SpaceX", output_name: "output", type: "text" },
        to: { block_name: "Output", input_name: "input", type: "text" },
        opts: { reset: true },
      },
    ],
  },
};

export const memoryWorkflowConfig: IWorkflowConfig = {
  runId: 76,
  name: "Memory",
  interface_config: {
    input: "Input",
    output: "Output",
    chat: "MistralSpecialist",
  },
  config: {
    version: "1",
    blocks: [
      {
        name: BlockName.Input,
        position: { x: -461, y: -90 },
        type: "text_input",
      },
      {
        name: BlockName.MistralAI,
        position: { x: 0, y: 200 },
        type: "chat",
      },
      {
        name: BlockName.MistralVectorDB,
        position: { x: -900, y: 200 },
        type: "document_search",
      },
      {
        name: BlockName.Output,
        position: { x: -461, y: 700 },
        type: "text_output",
      },
    ],
    connections: [
      {
        from: { block_name: "Input", output_name: "output", type: "text" },
        to: {
          block_name: "MistralSpecialist",
          input_name: "input",
          type: "text",
        },
        opts: { reset: true },
      },
      {
        from: {
          block_name: "MistralSpecialist",
          output_name: "output",
          type: "text",
        },
        to: { block_name: "Output", input_name: "input", type: "text" },
        opts: { reset: true },
      },
      {
        from: {
          block_name: "MistralKnowledge",
          output_name: "tool",
          type: "worker",
        },
        to: {
          block_name: "MistralSpecialist",
          input_name: "tool",
          type: "controller",
        },
        opts: { reset: true },
      },
    ],
  },
};

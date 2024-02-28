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
        position: { x: -600.5837364388194, y: -400 },
        type: "text_input",
      },
      {
        name: BlockName.Output,
        position: { x: 400.78785017928647, y: -400 },
        type: "text_output",
      },
      {
        name: BlockName.Chat,
        position: { x: -130.4596274474532, y: -400 },
        type: "chat",
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
        name: BlockName.Leader,
        position: { x: -285, y: -85 },
        type: "chat",
      },
      {
        name: BlockName.SpanishTranslator,
        position: { x: -284.19225370319464, y: 198.6648983644884 },
        type: "chat",
      },
      {
        name: BlockName.Input,
        position: { x: -737.1007948137706, y: -12.913779357691794 },
        type: "text_input",
      },
      {
        name: BlockName.Output,
        position: { x: 162.30073656403613, y: -13.315666892449428 },
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
        name: BlockName.SpaceX,
        position: { x: -50, y: -100 },
        type: "chat",
      },
      {
        name: BlockName.Input,
        position: { x: -700, y: -130 },
        type: "text_input",
      },
      {
        name: BlockName.Output,
        position: { x: 580, y: -130 },
        type: "text_output",
      },
      {
        name: BlockName.LatestLaunch,
        position: { x: -800, y: 150 },
        type: "api_call_tool",
      },
      {
        name: BlockName.CrewMember,
        position: { x: -30, y: 200 },
        type: "api_call_tool",
      },
      {
        name: BlockName.Wikipedia,
        position: { x: 700, y: 160 },
        type: "api_call_tool",
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
        name: BlockName.Output,
        position: { x: 362.11130905646735, y: -83.69933240048226 },
        type: "text_output",
      },
      {
        name: BlockName.MistralAI,
        position: { x: -34.05048600717532, y: -85.17404547868819 },
        type: "chat",
      },
      {
        name: BlockName.MistralVectorDB,
        position: { x: -55.03860579709465, y: 319.62444837871897 },
        type: "document_search",
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

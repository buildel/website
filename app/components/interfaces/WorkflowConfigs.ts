export interface IWorkflowConfig {
  runId: number;
  name: string;
  config: {
    version: string;
    blocks: {
      name: string;
      position: { x: number; y: number };
      type: string;
    }[];
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
        name: "text_input_1",

        position: { x: -600.5837364388194, y: -400 },
        type: "text_input",
      },
      {
        name: "text_output_1",

        position: { x: 400.78785017928647, y: -400 },
        type: "text_output",
      },
      {
        name: "chat_1",

        position: { x: -130.4596274474532, y: -400 },
        type: "chat",
      },
    ],
    connections: [
      {
        from: {
          block_name: "text_input_1",
          output_name: "output",
          type: "text",
        },
        to: { block_name: "chat_1", input_name: "input", type: "text" },
        opts: { reset: true },
      },
      {
        from: { block_name: "chat_1", output_name: "output", type: "text" },
        to: { block_name: "text_output_1", input_name: "input", type: "text" },
        opts: { reset: true },
      },
      {
        from: {
          block_name: "api_call_tool_1",
          output_name: "tool",
          type: "worker",
        },
        to: { block_name: "chat_1", input_name: "tool", type: "controller" },
        opts: { reset: true },
      },
    ],
  },
  interface_config: {
    input: "text_input_1",
    output: "text_output_1",
    chat: "chat_1",
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
        name: "Leader",

        position: { x: -285, y: -85 },
        type: "chat",
      },
      {
        name: "SpanishTranslator",

        position: { x: -284.19225370319464, y: 198.6648983644884 },
        type: "chat",
      },
      {
        name: "Input",
        position: { x: -737.1007948137706, y: -12.913779357691794 },
        type: "text_input",
      },
      {
        name: "Output",
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
        name: "SpaceX",

        position: { x: -50, y: -100 },
        type: "chat",
      },
      {
        name: "Input",
        position: { x: -450, y: -130 },
        type: "text_input",
      },
      {
        name: "Output",

        position: { x: 380, y: -130 },
        type: "text_output",
      },
      {
        name: "LatestLaunch",

        position: { x: -600, y: 150 },
        type: "api_call_tool",
      },
      {
        name: "CrewMember",

        position: { x: -30, y: 200 },
        type: "api_call_tool",
      },
      {
        name: "WikipediaArticle",

        position: { x: 600, y: 160 },
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

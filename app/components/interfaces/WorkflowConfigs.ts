export interface IWorkflowConfig {
  name: string;
  config: {
    version: string;
    blocks: {
      name: string;
      opts: Record<string, unknown>;
      inputs: string[];
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
  name: "Chat",
  config: {
    version: "1",
    blocks: [
      {
        name: "text_input_1",
        opts: {},
        inputs: [],
        position: { x: -600.5837364388194, y: -400 },
        type: "text_input",
      },
      {
        name: "text_output_1",
        opts: { stream_timeout: 500 },
        inputs: [],
        position: { x: 400.78785017928647, y: -400 },
        type: "text_output",
      },
      {
        name: "chat_1",
        opts: { name: "chat_1" },
        inputs: [],
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

export interface IWorkflowConfig {
  runId: number;
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
  runId: 75,
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

export const toolsWorkflowConfig: IWorkflowConfig = {
  runId: 75,
  name: "spacex",
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
        opts: {
          api_key: "Gemini",
          api_type: "google",
          chat_memory_type: "full",
          description: "SpaceXSpecialist",
          endpoint:
            "https://us-central1-aiplatform.googleapis.com/v1/projects/ferrous-linker-412611/locations/us-central1/publishers/google/models",
          messages: [],
          model: "gemini-pro",
          prompt_template: "{{Input:output}}",
          system_message:
            "You are a SpaceX specialist.\n\nUse tools to answer questions unless they are not related to SpaceX.",
          temperature: 0.7,
        },
        inputs: [
          "Input:output->input?reset=true",
          "GetLatestLaunchData:tool->tool?reset=true",
          "GetCrewMemberData:tool->tool?reset=true",
          "GetWikipediaArticle:tool->tool?reset=true",
        ],

        position: { x: -59.329715835489935, y: 31.4184335678394 },
        type: "chat",
      },
      {
        name: "Input",
        opts: { pull: "on" },
        inputs: [],
        position: { x: -388.99154236228895, y: -130.96831820918106 },
        type: "text_input",
      },
      {
        name: "Output",
        opts: { stream_timeout: 500 },
        inputs: ["SpaceXSpecialist:output->input?reset=true"],

        position: { x: 236.250399661308, y: -130.74411793947291 },
        type: "text_output",
      },
      {
        name: "LatestLaunch",
        opts: {
          authorize: false,
          description: "Retrieves data for latest SpaceX launch",
          headers:
            '{"Content-Type": "application/json", "Accept": "application/json"}',
          method: "GET",
          parameters:
            '{\n    "type": "object",\n    "required": [],\n    "properties": {}\n}',
          url: "https://api.spacexdata.com/v5/launches/latest",
        },
        inputs: [],
        position: { x: -394.11313058396496, y: 152.62690766843747 },
        type: "api_call_tool",
      },
      {
        name: "CrewMember",
        opts: {
          authorize: false,
          description:
            'Retrieves data for crew member with specified "crew_member_id"',
          headers:
            '{"Content-Type": "application/json", "Accept": "application/json"}',
          method: "GET",
          parameters:
            '{\n  "type": "object",\n  "required": ["crew_member_id"],\n  "properties": {\n    "crew_member_id": {\n      "type": "string",\n      "description": "Id of the crew member"\n    }\n  }\n}',
          url: "https://api.spacexdata.com/v4/crew/{{crew_member_id}}",
        },
        inputs: [],
        position: { x: -53.63769350371808, y: 204.40039502470992 },
        type: "api_call_tool",
      },
      {
        name: "WikipediaArticle",
        opts: {
          authorize: false,
          description:
            'Retrieves wikipedia article based on article_slug. Use the last part of full wikipedia url as article_slug. ie. article_slug for article: "https://en.wikipedia.org/wiki/Earth" is "Earth".',
          headers:
            '{"Content-Type": "application/json", "Accept": "application/json"}',
          method: "GET",
          parameters:
            '{\n  "type": "object",\n  "required": ["article_slug"],\n  "properties": {\n    "article_slug": {\n      "type": "string",\n      "description": "Article slug"\n    }\n  }\n}',
          url: "https://en.wikipedia.org/w/rest.php/v1/page/{{article_slug}}",
        },
        inputs: [],
        position: { x: 303.14365333075585, y: 159.25417097314335 },
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

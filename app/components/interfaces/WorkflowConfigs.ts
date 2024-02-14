export interface IWorkflowConfig {
  config: {
    version: string;
    blocks: {
      name: string;
      opts: Record<string, unknown>;
      inputs: string[];
      connections: string[];
      position: { x: number; y: number };
      type: string;
      block_type: {
        type: string;
        description: string;
        groups: string[];
        inputs: { name: string; type: string; public: boolean }[];
        outputs: { name: string; type: string; public: boolean }[];
        ios: unknown[];
        schema: {
          properties: Record<string, unknown>;
          required: string[];
          type: string;
        };
      };
    }[];
  };
}

export const chatWorkflowConfig = {
  id: 75,
  name: "Simple Chat",
  organization_id: 27,
  runs_count: 512,
  interface_config: { input: "text_input_1", output: "text_output_1" },
  config: {
    version: "1",
    blocks: [
      {
        name: "text_input_1",
        opts: {},
        inputs: [],
        connections: [],
        position: { x: -475.5837364388194, y: -436.5009154925753 },
        type: "text_input",
        block_type: {
          type: "text_input",
          description:
            "This module is crafted for the seamless intake and transmission of textual data.",
          groups: ["text", "inputs / outputs"],
          inputs: [{ name: "input", type: "text", public: true }],
          outputs: [{ name: "output", type: "text", public: false }],
          ios: [],
          schema: {
            properties: {
              name: {
                type: "string",
                description:
                  "The name of the block. Can only contain letters, numbers, and underscores. Cannot include spaces.",
                title: "Name",
                pattern: "^[^<>: ?-]*$",
                regex: {
                  pattern: "^[^<>: ?-]*$",
                  errorMessage:
                    "Invalid string. Characters '< > : - ? ' are not allowed.",
                },
                maxLength: 30,
                minLength: 2,
              },
              opts: {
                type: "object",
                description: "Additional options for the block.",
                title: "Options",
                required: [],
                properties: {},
              },
            },
            required: ["name", "opts", "inputs"],
            type: "object",
          },
        },
      },
      {
        name: "text_output_1",
        opts: { stream_timeout: 500 },
        inputs: [],
        connections: [],
        position: { x: 203.78785017928647, y: -435.4583362794602 },
        type: "text_output",
        block_type: {
          type: "text_output",
          description: "A versatile module designed to output text data.",
          groups: ["text", "inputs / outputs"],
          inputs: [{ name: "input", type: "text", public: false }],
          outputs: [{ name: "output", type: "text", public: true }],
          ios: [],
          schema: {
            properties: {
              inputs: {
                description: "The inputs to the block.",
                items: {
                  description: "The name of the input.",
                  minLength: 2,
                  title: "Name",
                  type: "string",
                },
                minItems: 0,
                title: "Inputs",
                type: "array",
              },
              name: {
                type: "string",
                description:
                  "The name of the block. Can only contain letters, numbers, and underscores. Cannot include spaces.",
                title: "Name",
                pattern: "^[^<>: ?-]*$",
                regex: {
                  pattern: "^[^<>: ?-]*$",
                  errorMessage:
                    "Invalid string. Characters '< > : - ? ' are not allowed.",
                },
                maxLength: 30,
                minLength: 2,
              },
              opts: {
                type: "object",
                description: "Additional options for the block.",
                title: "Options",
                required: ["stream_timeout"],
                properties: {
                  stream_timeout: {
                    default: 500,
                    description:
                      "Wait this many milliseconds after receiving the last chunk before stopping the stream.",
                    minimum: 500,
                    step: 1,
                    title: "Stop after (ms)",
                    type: "number",
                  },
                },
              },
            },
            required: ["name", "inputs", "opts"],
            type: "object",
          },
        },
      },
      {
        name: "chat_1",
        opts: { name: "chat_1" },
        inputs: [],
        connections: [],
        position: { x: -130.4596274474532, y: -407.11010583534664 },
        type: "chat",
        block_type: {
          type: "chat",
          description:
            "Large Language Model chat block enabling advanced conversational interactions powered by OpenAI's cutting-edge language models.",
          groups: ["text", "llms"],
          inputs: [{ name: "input", type: "text", public: false }],
          outputs: [
            { name: "output", type: "text", public: false },
            { name: "message_output", type: "text", public: false },
          ],
          ios: [
            { name: "tool", type: "controller", public: false },
            { name: "chat", type: "worker", public: false },
          ],
          schema: {
            properties: {
              inputs: {
                description: "The inputs to the block.",
                items: {
                  description: "The name of the input.",
                  minLength: 2,
                  title: "Name",
                  type: "string",
                },
                minItems: 0,
                title: "Inputs",
                type: "array",
              },
              name: {
                type: "string",
                description:
                  "The name of the block. Can only contain letters, numbers, and underscores. Cannot include spaces.",
                title: "Name",
                pattern: "^[^<>: ?-]*$",
                regex: {
                  pattern: "^[^<>: ?-]*$",
                  errorMessage:
                    "Invalid string. Characters '< > : - ? ' are not allowed.",
                },
                maxLength: 30,
                minLength: 2,
              },
              opts: {
                type: "object",
                description: "Additional options for the block.",
                title: "Options",
                required: [
                  "description",
                  "model",
                  "chat_memory_type",
                  "temperature",
                  "system_message",
                  "messages",
                  "api_key",
                  "endpoint",
                  "api_type",
                ],
                properties: {
                  description: {
                    description: "The description of the chat.",
                    title: "Description",
                    type: "string",
                  },
                  api_key: {
                    description: "OpenAI API key to use for the chat.",
                    minLength: 1,
                    presentAs: "async-creatable-select",
                    schema: {
                      properties: {
                        name: {
                          description: "The name for the secret.",
                          minLength: 1,
                          title: "Name",
                          type: "string",
                        },
                        value: {
                          description: "The value of the secret.",
                          minLength: 1,
                          presentAs: "password",
                          title: "Value",
                          type: "string",
                        },
                      },
                      required: ["name", "value"],
                      type: "object",
                    },
                    title: "API key",
                    type: "string",
                    url: "/api/organizations/{{organization_id}}/secrets",
                  },
                  api_type: {
                    default: "openai",
                    description: "The API type to use for the chat.",
                    enum: ["openai", "azure", "google"],
                    enumPresentAs: "radio",
                    title: "Model API type",
                    type: "string",
                  },
                  model: {
                    description: "The model to use for the chat.",
                    presentAs: "async-select",
                    title: "Model",
                    type: "string",
                    url: "/api/organizations/{{organization_id}}/models?api_type={{opts.api_type}}",
                  },
                  endpoint: {
                    default: "https://api.openai.com/v1/chat/completions",
                    description: "The endpoint to use for the chat.",
                    title: "Endpoint",
                    type: "string",
                  },
                  chat_memory_type: {
                    default: "full",
                    description: "The chat memory type to use for the chat.",
                    enum: ["off", "full", "rolling"],
                    enumPresentAs: "radio",
                    title: "Chat memory type",
                    type: "string",
                  },
                  temperature: {
                    default: 0.7,
                    description: "The temperature of the chat.",
                    maximum: 2,
                    minimum: 0,
                    step: 0.1,
                    title: "Temperature",
                    type: "number",
                  },
                  system_message: {
                    description: "The message to start the conversation with.",
                    editorLanguage: "custom",
                    minLength: 1,
                    presentAs: "editor",
                    title: "System message",
                    type: "string",
                  },
                  messages: {
                    default: [],
                    description: "The messages to start the conversation with.",
                    items: {
                      properties: {
                        content: {
                          editorLanguage: "custom",
                          presentAs: "editor",
                          title: "Content",
                          type: "string",
                        },
                        role: {
                          default: "user",
                          enum: ["user", "assistant"],
                          enumPresentAs: "radio",
                          title: "Role",
                          type: "string",
                        },
                      },
                      required: ["role", "content"],
                      type: "object",
                    },
                    minItems: 0,
                    title: "Messages",
                    type: "array",
                  },
                  prompt_template: {
                    description: "The template to use for the prompt.",
                    minLength: 1,
                    presentAs: "editor",
                    title: "Prompt template",
                    type: "string",
                  },
                },
              },
            },
            required: ["name", "inputs", "opts"],
            type: "object",
          },
        },
      },
      {
        name: "api_call_tool_1",
        opts: { name: "api_call_tool_1" },
        inputs: [],
        connections: [],
        position: { x: -476.31397540089324, y: -123.80126072252631 },
        type: "api_call_tool",
        block_type: {
          type: "api_call_tool",
          description: "Tool used to call HTTP APIs.",
          groups: ["text", "tools"],
          inputs: [],
          outputs: [],
          ios: [{ name: "tool", type: "worker", public: false }],
          schema: {
            properties: {
              inputs: {
                description: "The inputs to the block.",
                items: {
                  description: "The name of the input.",
                  minLength: 2,
                  title: "Name",
                  type: "string",
                },
                minItems: 0,
                title: "Inputs",
                type: "array",
              },
              name: {
                type: "string",
                description:
                  "The name of the block. Can only contain letters, numbers, and underscores. Cannot include spaces.",
                title: "Name",
                pattern: "^[^<>: ?-]*$",
                regex: {
                  pattern: "^[^<>: ?-]*$",
                  errorMessage:
                    "Invalid string. Characters '< > : - ? ' are not allowed.",
                },
                maxLength: 30,
                minLength: 2,
              },
              opts: {
                type: "object",
                description: "Additional options for the block.",
                title: "Options",
                required: ["method", "url", "description", "parameters"],
                properties: {
                  method: {
                    default: "GET",
                    description: "The HTTP method to use for the request.",
                    enum: ["GET", "POST", "PUT", "PATCH", "DELETE"],
                    enumPresentAs: "radio",
                    title: "Method",
                    type: "string",
                  },
                  url: {
                    description:
                      "The URL to send the request to. If you want to use a variable, use {{variable_name}}. Notice the double curly braces!",
                    title: "URL",
                    type: "string",
                  },
                  description: {
                    description: "The description of the API call.",
                    title: "Description",
                    type: "string",
                  },
                  parameters: {
                    default:
                      '{"type": "object", "properties": {}, "required": []}',
                    description:
                      'Valid JSONSchema definition of the parameters passed to api call. Always pass a JSON object schema. ie. {"type": "object", "properties": {"name": {"type": "string"}}, "required": ["name"]}.',
                    editorLanguage: "json",
                    presentAs: "editor",
                    title: "Parameters",
                    type: "string",
                  },
                  authorize: {
                    default: false,
                    description:
                      "Whether to authorize the request with organization secret.",
                    title: "Authorize",
                    type: "boolean",
                  },
                },
              },
            },
            required: ["name", "inputs", "opts"],
            type: "object",
          },
        },
      },
    ],
    connections: [
      {
        from: { block_name: "text_input_1", output_name: "output" },
        to: { block_name: "chat_1", input_name: "input" },
        opts: { reset: true },
      },
      {
        from: { block_name: "chat_1", output_name: "output" },
        to: { block_name: "text_output_1", input_name: "input" },
        opts: { reset: true },
      },
      {
        from: { block_name: "api_call_tool_1", output_name: "tool" },
        to: { block_name: "chat_1", input_name: "tool" },
        opts: { reset: true },
      },
    ],
  },
};

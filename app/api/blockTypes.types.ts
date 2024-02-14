export interface IOType {
  name: string;
  type: "audio" | "text" | "file" | "worker" | "controller";
  public: boolean;
}

export interface BlockType {
  type: string;
  description: string;
  groups: string[];
  inputs: IOType[];
  outputs: IOType[];
  ios: IOType[];
  schema: Record<string, any>;
}

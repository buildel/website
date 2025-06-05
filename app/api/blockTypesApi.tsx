import { BlockType } from "./blockTypes.types";

export class BlockTypeApi {
  constructor() {}

  async getBlockTypes(): Promise<{ data: BlockType[] }> {
    const response = await fetch(`https://buildel-api.fly.dev/api/block_types`)
      .then((res) => res.json())
      .catch((e) => {
        return { data: [] };
      });

    return response;
  }
}

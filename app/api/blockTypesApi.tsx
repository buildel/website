import { BlockType } from "./blockTypes.types";

export class BlockTypeApi {
  constructor(private client = fetch) {}

  async getBlockTypes(): Promise<{ data: BlockType[] }> {
    return await this.client(`${process.env.API_URL}/api/block_types`).then(
      (res) => res.json()
    );
  }
}

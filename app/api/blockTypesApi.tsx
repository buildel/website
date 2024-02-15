import { BlockType } from "./blockTypes.types";

let cache = undefined as any;

export class BlockTypeApi {
  constructor(private client = fetch) {}

  async getBlockTypes(): Promise<{ data: BlockType[] }> {
    if (cache) return cache;
    const response = await this.client(
      `${process.env.API_URL}/api/block_types`
    ).then((res) => res.json());
    cache = response;

    setTimeout(() => (cache = undefined), 1000 * 60 * 5);

    return response;
  }
}

import { injectable } from "inversify";
import { IApi } from "@/lib/models/interface";

@injectable()
export class KApiService implements IApi {
  async fetch(url: string): Promise<Response> {
    const result = fetch(url);
    return result;
  }
}

import { User } from "@/lib/models/state";
import { MdxViewModel } from "@/lib/models/view-model";

export interface IApiService {
  fetch(url: string): Promise<Response>;
}

export interface IAuthService {
  validateUser({ token }: { token: string }): Promise<User>;
}
export interface IMdxService {
  readMdx({ content }: { content: string }): Promise<MdxViewModel>;
}

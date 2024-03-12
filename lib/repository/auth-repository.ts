import { User } from "@/lib/models/state";

export interface IAuthRepository {
  validateUser(token?: string): Promise<User>;
}

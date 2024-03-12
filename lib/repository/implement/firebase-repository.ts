import { authAdmin } from "@/lib/firebase-admin";
import { User } from "@/lib/models/state";
import { IAuthRepository } from "@/lib/repository/auth-repository";
import { injectable } from "inversify";

@injectable()
export class FirebaseRepository implements IAuthRepository {
  async validateUser(token: string): Promise<User> {
    if (!token) return {};
    const user = await authAdmin
      .verifyIdToken(token)
      .then((user) => {
        if (user.email != "duanvuminh@gmail.com") return {};
        return {
          photoURL: user.picture,
          token: token,
          email: user.email,
        } as User;
      })
      .catch((_) => {
        return {};
      });
    return user;
  }
}

import { AbController } from "@/lib/models/interface";
import { User } from "@/lib/models/state";
import { authService } from "@/lib/services/auth-service";

class LayoutController extends AbController<User> {
  async getData(): Promise<User> {
    const user = await authService.validateUser();
    return user;
  }
}

export const layoutController = new LayoutController();

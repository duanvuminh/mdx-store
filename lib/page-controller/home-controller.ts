import { AbController } from "@/lib/models/interface";
import { PostItemHomeViewModel } from "@/lib/models/view-model";

class HomeController extends AbController<PostItemHomeViewModel[]> {
  getData(params: any): Promise<PostItemHomeViewModel[]> {
    throw new Error("Method not implemented.");
  }
}

export const homeController = new HomeController();

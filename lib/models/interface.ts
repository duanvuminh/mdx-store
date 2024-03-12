import { Dict } from "@/lib/services/dictionary";
import { Viewport } from "next";

export interface IApi {
  fetch(url: string): Promise<Response>;
}

export abstract class AbController<ViewModel> extends Dict {
  abstract getData(params: any): Promise<ViewModel>;
  viewport(params: any): Viewport {
    return {};
  }
  generateStaticParams(params: any): any {
    return {};
  }
  generateMetadata(params: any): any {
    return {};
  }
}
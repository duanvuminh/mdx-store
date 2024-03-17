import { injectable } from "inversify";

import { MdxViewModel } from "@/lib/models/view-model";
import { mdxRepository } from "@/lib/repository/mdx-repository";
import { IMdxService } from "@/lib/services/interface";

@injectable()
export class MdxService implements IMdxService {
  async readMdx({ content }: { content: string }): Promise<MdxViewModel> {
    const result = await mdxRepository.mdxSource(content);
    return result;
  }
}

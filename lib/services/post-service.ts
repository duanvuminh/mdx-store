import { TYPES } from "@/lib/const";
import { myContainer } from "@/lib/inversify.config";
import { PostViewModel } from "@/lib/models/view-model";
import { IPostRepository } from "@/lib/repository/post-repository";
import { MdxContent } from "../models/model";

export const postService = {
  getPost: async ({
    lang,
    id,
  }: {
    lang: string;
    id: string;
  }): Promise<PostViewModel> => {
    const postRepository = myContainer.get<IPostRepository>(
      TYPES.IPostRepository
    );
    const post = await postRepository.getPost(id, lang, [
      "objectID",
      "content",
    ]);
    return {
      id: post.objectID,
      content: post.content,
    };
  },
  updatePost: async ({
    id,
    mdxContent,
  }: {
    id: string;
    mdxContent: MdxContent,
  }): Promise<void> => {
    const postRepository = myContainer.get<IPostRepository>(
      TYPES.IPostRepository
    );
    const post = postRepository.updateMdx(id,mdxContent);
    return post;
  },
};

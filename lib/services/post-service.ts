import { TYPES } from "@/lib/const";
import { myContainer } from "@/lib/inversify.config";
import { PostViewModel } from "@/lib/models/view-model";
import { IPostRepository } from "@/lib/repository/post-repository";
import { Content } from "@/lib/models/model";

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
    mediaUrl,
    updateDateTime,
    tags,
    hanTu,
    postType
  }: {
    id: string;
    mdxContent: Content;
    mediaUrl: Content;
    updateDateTime: Content;
    tags: string;
    hanTu: Content;
    postType: string;
  }): Promise<void> => {
    const postRepository = myContainer.get<IPostRepository>(
      TYPES.IPostRepository
    );
    const post = postRepository.updateFromMdx({
      id,
      mdxContent,
      mediaUrl,
      updateDateTime,
      tags,
      hanTu,
    });
    return post;
  },
  updatePostSort: async ({
    id,
    sort,
  }: {
    id: string;
    sort: number;
  }): Promise<void> => {
    const postRepository = myContainer.get<IPostRepository>(
      TYPES.IPostRepository
    );
    const post = postRepository.updateSort(id, sort);
    return post;
  },
};

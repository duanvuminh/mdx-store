import { MdxContent, PostBaseModel, PostDetailModel } from "@/lib/models/model";

export interface IPostRepository {
  getPost(
    postID: string,
    lang: string,
    attributesToRetrieve: string[]
  ): Promise<PostDetailModel>;
  updateMdx(postID: string, mdxContent: MdxContent): Promise<void>;
  getPosts(
    lang: string,
    posts: string[],
    attributesToRetrieve: string[]
  ): Promise<PostBaseModel[]>;
  getPostsByDay(
    postType: string,
    level: string,
    day: number,
    attributesToRetrieve: string[],
    hitsPerPage: number
  ): Promise<PostBaseModel[]>;
}

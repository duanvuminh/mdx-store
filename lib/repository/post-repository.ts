import { Content, PostBaseModel, PostDetailModel } from "@/lib/models/model";

export interface IPostRepository {
  addPost(post:any): Promise<void>;
  getPostFull(id:string): Promise<any>;
  getPost(
    postID: string,
    lang: string,
    attributesToRetrieve: string[]
  ): Promise<PostDetailModel>;
  updateFromMdx({
    id,
    mdxContent,
    mediaUrl,
    updateDateTime,
    tags,
    hanTu,
  }: {
    id: string;
    mdxContent: Content;
    mediaUrl: Content;
    updateDateTime: Content;
    tags: string[];
    hanTu: Content;
  }): Promise<void>;
  updateSort(postID: string, sort: number): Promise<void>;
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

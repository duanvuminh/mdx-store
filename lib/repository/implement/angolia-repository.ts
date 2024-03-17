import { injectable } from "inversify";

import { PostDetailModel, PostBaseModel, Content } from "@/lib/models/model";
import { IPostRepository } from "@/lib/repository/post-repository";

const algoliasearch = require("algoliasearch");
const client = algoliasearch("EI7K5E2KYY", process.env.Angolia ?? "");
const indexAngolia = {
  product: client.initIndex("product_Post"),
};

@injectable()
export class AngoliaRepository implements IPostRepository {
  updateFromMdx({
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
  }): Promise<void> {
    return indexAngolia.product.partialUpdateObject({
      mdxContent,
      mediaUrl,
      updateDateTime,
      objectID: id,
      tags:tags,
      hanTu: hanTu,
      postType: postType
    });
  }
  updateSort(postID: string, sort: number): Promise<void> {
    return indexAngolia.product.partialUpdateObject({
      sort: sort,
      objectID: postID
    });
  }

  async getPost(postID: string, lang: string, attributesToRetrieve: string[]): Promise<PostDetailModel> {
    const rq = await indexAngolia.product.getObject(postID, {
      attributesToRetrieve: attributesToRetrieve,
    });
    const result = rq as PostDetailModel;
    return result;
  }
  async getPostsByDay(
    postType: string,
    level: string,
    day: number,
    attributesToRetrieve: string[],
    hitsPerPage: number
  ): Promise<PostBaseModel[]> {
    let results = await indexAngolia.product.search("",{
      filters: `postType:${postType} AND level:${level}`,
      attributesToRetrieve: attributesToRetrieve,
      hitsPerPage: hitsPerPage,
      page: day-1,
    });
    const hits:PostBaseModel[] = results.hits;
    return hits;
  }
  async getPosts(
    lang: string,
    posts: string[],
    attributesToRetrieve: string[]
  ): Promise<PostBaseModel[]> {
    const rq = await indexAngolia.product.getObjects(posts, {
      attributesToRetrieve: attributesToRetrieve,
    });
    const result = rq.results as PostBaseModel[];
    return result;
  }
}

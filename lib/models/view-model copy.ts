export interface BaseItem{
  id: string;
  detailLink: string;
}
export interface KPostItem extends BaseItem{
  // id
  title?: string;
  // Mẹ. Phàm vật gì làm cốt để sinh ra các cái đều gọi là mẫu.
  // https://image.example
  // https://youtube.com
  // 2024/2/31
  updateDateTime?: string;
  // ["manga"]
  relatedLink: string;
  relatedLinkTitle: string;

  // Mẫu, Mô
  hanTu?: string;
  // はは
  pronouns?: string;
  postType: string;
  level?: string;
  mediaUrl: string;
}

export interface JlptPostItem extends BaseItem{
}

export interface PostViewModel {
  //母
  id: string;
  mdxContent?: string;
}

export interface MdxViewModel {
  //母
  code: string;
  frontmatter?: any;
}

export interface PostDetailViewModel {
  mdx?: MdxViewModel;
  id: string;
}
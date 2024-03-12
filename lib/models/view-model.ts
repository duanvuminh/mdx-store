export interface PostItemHomeViewModel {
  //母
  id: string;
  // id
  title?: string;
  // Mẹ. Phàm vật gì làm cốt để sinh ra các cái đều gọi là mẫu.
  // https://image.example
  // https://youtube.com
  Content?: string;
  // 2024/2/31
  updateDateTime?: string;
  // ["manga"]
  relatedLink: string;
  relatedLinkTitle: string;
  detailLink: string;

  // Mẫu, Mô
  hanTu?: string;
  // はは
  pronouns?: string;
  postType: string;
  level?: string;
  mediaUrl: string;
}

export interface PostItemPostListViewModel {
  //母
  id: string;
  detailLink: string;
}

export interface PostViewModel {
  //母
  id: string;
  content: string;
}

export interface MdxViewModel {
  //母
  code: string;
  frontmatter?: any;
}

export interface PostDetailViewModel{
  useMdx: boolean;
  mdx?: MdxViewModel;
  post?: PostViewModel;
}
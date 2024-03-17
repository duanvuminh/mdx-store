export interface PostBaseModel {
  //母
  objectID: string;
  level: string;
  postType: string;
  updateDateTime: string;
  mediaUrl: string;
}

export interface PostDetailModel extends PostBaseModel {
  content: string;
  tags: string;
  hanTu: {
    vi: string;
    en: string;
  };
  pronouns: string;
}

export interface MdxModel {
  content: string;
}

export interface Content {
  en: string;
  vi: string;
  ja:string;
}

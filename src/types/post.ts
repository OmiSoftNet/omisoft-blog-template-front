export type Post = {
  _id: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  shortDescription: string;
  seoTitle: string;
  seoDesctiption: string;
  url: string;
  status: string;
  topic: string;
  tags: string[];
  similarArticles: [] | Post[];
  createdAt: string;
  updatedAt: string;
};

export interface UrlInfo {
  _id: string;
  url: string;
}
export interface IPostsListQueryData {
  limit?: number;
  page?: number;
  id?: string;
}
export type GetPostQuery = {
  limit: number | undefined;
  page: number | undefined;
};

export type CreatePostQuery = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  shortDescription: string;
  seoTitle: string;
  seoDesctiption: string;
  url: string;
  status: string;
  topic: string;
  tags: string[];
};

export enum Pagination {
  limitPosts = 8,
  firstPage = 1,
}

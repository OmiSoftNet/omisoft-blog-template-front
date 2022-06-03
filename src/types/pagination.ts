import { Post } from "./post";

export type Paginate<T = any> = {
  docs: T[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
};

export type PostDataT = {
  postsData: Paginate<Post> | null;
};

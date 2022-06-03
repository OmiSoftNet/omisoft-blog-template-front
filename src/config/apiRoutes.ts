import { Pagination } from "../types/post";

/**
 * @description Base url used in requests
 */

export const BASE_URL = process.env.REACT_APP_URL;

/**
 * @description Object containing all request endpoints
 */

export const API_ROUTES = {
  POSTS: {
    GET_BY_URL: (url: string | string[] | undefined) => `posts/blog/${url}/`,
    ALL_POSTS: (
      limit: number = Pagination.limitPosts,
      page: number | string | string[] | undefined = Pagination.firstPage
    ) => `posts/blog/?page=${page}&limit=${Pagination.limitPosts}`,
    ALL_POSTS_URL: () => `posts/blog/url/`,
    GET_BY_ID: (id: string) => `posts/${id}/`,
  },
};

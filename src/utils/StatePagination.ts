import { Paginate } from "../types/pagination";

/**
 * @description Class contains info about state pagination
 */
export class StatePagination {
  static DEFAULT_PAGINATE_STATE: Paginate = {
    docs: [],
    totalDocs: 0,
    limit: 0,
    totalPages: 0,
    page: 0,
    pagingCounter: 0,
    hasPrevPage: false,
    hasNextPage: false,
    prevPage: null,
    nextPage: null,
  };
  static addDataToState = (payload: any, prevPayload: Paginate): Paginate => ({
    ...payload,
    docs: [...prevPayload.docs, ...payload.docs],
  });
}

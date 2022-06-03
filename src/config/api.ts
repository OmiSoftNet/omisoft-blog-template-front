import axios from "axios";
import { BASE_URL } from "./apiRoutes";

/**
 * @description Axios instance used for API requests
 */
export const API = axios.create({
  baseURL: BASE_URL,
});

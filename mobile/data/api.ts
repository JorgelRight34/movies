import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { LANGUAGE } from "../lib/constants";
import { ACCESS_TOKEN, API_KEY } from "@env";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

api.interceptors.request.use(
  async (
    config: InternalAxiosRequestConfig
  ):
    | Promise<InternalAxiosRequestConfig>
    | Promise<InternalAxiosRequestConfig> => {
    // Include access token on all requests
    config.headers.Authorization = `Bearer ${ACCESS_TOKEN}`;

    // Append language query and api key parameter to all requests
    config.params = { language: LANGUAGE, API_KEY: API_KEY, ...config.params };
    console.log(config.params)
    console.log(config.headers.Authorization);

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("checking", error);
    return Promise.reject(error);
  }
);

export default api;

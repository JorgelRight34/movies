import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

const API_KEY = "";

api.interceptors.request.use(
  (
    config: InternalAxiosRequestConfig
  ): InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig> => {
    config.headers.Authorization = `Bearer ${API_KEY}`;
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default api;

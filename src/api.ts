import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { completeLoadingBar } from "./components/LoadingBar";
import { toast } from "react-toastify";

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

api.interceptors.response.use(
  (response) => {
    completeLoadingBar();
    return response;
  },
  (error) => {
    if (error instanceof AxiosError) {
      switch (error.code) {
        case "ERR_NETWORK":
          toast.error(
            "Connection refused. Make sure to have a stable connection."
          );
          break;
        case "ERR_BAD_RESPONSE":
          toast.error("Oops!, internal server error.");
          break;
        case "ERR_BAD_REQUEST":
          switch (error.response?.status) {
            case 404:
              toast.error("Not found.");
              break;
            case 400:
              toast.error("Bad request");
              break;
          }
          break;
        default:
          toast.error("An error has ocurred.");
          break;
      }
    } else {
      toast.error("An error has ocurred");
    }

    completeLoadingBar();
    return Promise.reject(error);
  }
);

export default api;

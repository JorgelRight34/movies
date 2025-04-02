import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { completeLoadingBar } from "../components/common/LoadingBar";
import { toast } from "react-toastify";
import { ACCESS_TOKEN, API_KEY, LANGUAGE } from "../lib/constants";

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
      handleError(error);
    } else {
      toast.error("An error has ocurred");
    }

    completeLoadingBar();
    return Promise.reject(error);
  }
);

const handleError = (error: AxiosError) => {
  switch (error.code) {
    case "ERR_NETWORK":
      toast.error(
        "Conexión rechazada. Asegúrate de tener una conexión estable."
      );
      break;
    case "ERR_BAD_RESPONSE":
      toast.error("¡Ups! Error interno del servidor.");
      break;
    case "ERR_BAD_REQUEST":
      switch (error.response?.status) {
        case 404:
          toast.error("No encontrado.");
          break;
        case 401:
          toast.error("No autorizado.");
          break;
        default:
          toast.error("Solicitud incorrecta.");
          break;
      }
      break;
    default:
      toast.error("Ha ocurrido un error.");
      break;
  }
};

export default api;

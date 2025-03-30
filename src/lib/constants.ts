export const API_KEY = import.meta.env.VITE_API_KEY;
export const ACCESS_TOKEN = import.meta.env.VITE_API_ACCESS_TOKEN;
export const LANGUAGE = "es-DO";
export const ACCOUNT_ID = localStorage.getItem("sessionId");
export const TMDB_IMAGES_SRC = "https://image.tmdb.org/t/p/";

// Video site providers
export const VIDEO_PROVIDERS = {
    YouTube: (key: string) => `https://youtube.com/embed/${key}`
}
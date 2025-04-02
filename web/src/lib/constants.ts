import { Movie } from "../models/movie";

export const API_KEY = import.meta.env.VITE_API_KEY;
export const ACCESS_TOKEN = import.meta.env.VITE_API_ACCESS_TOKEN;
export const LANGUAGE = "es-DO";
export const ACCOUNT_ID = localStorage.getItem("sessionId") || null;
export const TMDB_IMAGES_SRC = "https://image.tmdb.org/t/p/";

// Video site providers
export const VIDEO_PROVIDERS = {
  YouTube: (key: string) => `https://youtube.com/embed/${key}`,
};

export const mockMovie: Movie = {
  adult: false,
  backdrop_path: "/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
  genres: [
    { id: 18, name: "Drama" },
    { id: 53, name: "Thriller" },
    { id: 35, name: "Comedy" },
  ],
  id: 550,
  original_language: "en",
  original_title: "Fight Club",
  overview: "",
  popularity: 73.433,
  poster_path: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
  release_date: "1999-10-15",
  runtime: 139,
  spoken_languages: [
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
  ],
  status: "Released",
  tagline: "Mischief. Mayhem. Soap.",
  title: "Fight Club",
  video: false,
  vote_average: 8.4,
  vote_count: 26280,
};

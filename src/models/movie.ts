import { Genre } from "./genre";
import { Language } from "./language";

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genres: Genre[];
  id: number;
  original_language: Language;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  runtime: number;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

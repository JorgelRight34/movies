import { Genre } from "./genre";
import { Language } from "./language";
import { ProductionCompany } from "./productionCompany";
import { Video } from "./video";

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genres?: Genre[];
  genre_ids?: number[];
  homepage?: string;
  id: number;
  imdb_id?: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies?: ProductionCompany[];
  release_date: string;
  runtime: number;
  spoken_languages?: Language[];
  status?: string;
  tagline?: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  videos?: { results: Video[] };
}

import { Genre } from "./genre";
import { Language } from "./language";
import { ProductionCompany } from "./productionCompany";
import { Video } from "./video";

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  homepage?: string;
  genres?: Genre[];
  genre_ids?: number[],
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  runtime: number;
  tagline?: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  production_companies?: ProductionCompany[];
  spoken_languages?: Language[];
  status?: string;
  imdb_id?: number;
  videos?: { results: Video[] }
}

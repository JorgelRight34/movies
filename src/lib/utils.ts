import { TMDB_IMAGES_SRC } from "./constants";

export const getFullMovieImagePath = (
  relativePath: string,
  size = "original"
) => `${TMDB_IMAGES_SRC}${size}${relativePath}`;

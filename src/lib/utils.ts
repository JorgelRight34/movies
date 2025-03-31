import { TMDB_IMAGES_SRC } from "./constants";

/**
 * Capitalizes the first letter of a given string.
 *
 * @param {string} relativePath - The relative path returned by the IMDB API.
 * @param {string} [size="original"] - The size of the image, like w50, w90 and so on.
 * @returns {string} The full movie path for given the relative path with the given size.
 * @example
 * getFullMovieImagePath("/19238ska.jpg"); // Returns "https://image.tmdb.org/t/p/19238ska.jpg"
 */
export const getFullMovieImagePath = (
  relativePath: string,
  size = "original"
) => `${TMDB_IMAGES_SRC}${size}${relativePath}`;

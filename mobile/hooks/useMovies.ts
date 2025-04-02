import api from "../data/api";
import { Movie } from "../models/movie";
import { useEffect, useState } from "react";
import { MovieFilter } from "../models/movieFilter";

/**
 * Custom hook to fetch and manage a paginated list of movies from TMDB API.
 *
 * @param {string} [endpoint="now_playing"] - The movie category endpoint to fetch.
 *    Supported values: "now_playing", "popular", "top_rated", "upcoming".
 * @returns {Object} An object containing movie data and pagination controls.
 * @property {Movie[]} movies - Array of movie objects.
 * @property {number} page - Current page number (1-indexed).
 * @property {number} totalPages - Total available pages.
 * @property {() => void} goToNextPage - Increments page (capped at totalPages).
 * @property {() => void} goToPrevPage - Decrements page (capped at page 1).
 * @property {(newEndpoint?: string) => void} fetchMovies - Fetches movies (optional new endpoint).
 *
 * @example
 * // Basic usage
 * const { movies, page, goToNextPage } = useMovies("popular");
 */
const useMovies = (
  endpoint: MovieFilter = "now_playing",
  query: string = ""
): {
  movies: Movie[];
  page: number;
  totalPages: number;
  goToNextPage: () => void;
  goToPrevPage: () => void;
  fetchMovies: (q: string) => void;
} => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchMovies = async (q = "") => {
    // Get path, if search is specified create the specific endpoint search/movie
    const path = `${endpoint === "search" ? endpoint : "movie"}/${endpoint === "search" ? "movie" : endpoint
      }`;

    // Fire request and get response
    const response = await api.get(
      `${path}?page=${page}&sort_by=original_title.desc&query=${q || query || ""}`
    );

    // Update states
    setMovies(response.data.results);
    setTotalPages(response.data.total_pages);
  };

  const goToNextPage = () => {
    if (page + 1 <= totalPages) setPage((prev) => prev + 1);
  };

  const goToPrevPage = () => {
    if (page - 1 != 0) setPage((prev) => prev - 1);
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);

  return {
    movies,
    page,
    totalPages,
    goToNextPage,
    goToPrevPage,
    fetchMovies,
  };
};

export default useMovies;

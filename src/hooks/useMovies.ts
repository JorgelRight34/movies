import api from "../data/api";
import { Movie } from "../models/movie";
import { useEffect, useState } from "react";
import { MovieFilter } from "../models/movieFilter";

/**
 * Custom hook to fetch and manage a list of movies.
 *
 * @param {MovieFilter} [endpoint] - The movie category to fetch (e.g., "now_playing", "popular").
 * Default is "now_playing".
 * @returns {[Movie[], number, () => void, () => void]} A tuple containing:
 *   1. An array of movies.
 *   2. The total number of movies available.
 *   3. A function to refresh the movie list.
 *   4. A function to reset the movie list.
 *
 * @example
 * const [movies, page, handleNextPage, handlePrevPage] = useMovies("popular");
 */
const useMovies = (
  endpoint: MovieFilter = "now_playing", query: string = ""
): [Movie[], number, () => void, () => void] => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchMovies = async () => {
    // Get path, if search is specified create the specific endpoint search/movie
    const path = `${endpoint === "search" ? endpoint : "movie"}/${endpoint === "search" ? "movie" : endpoint}`

    // Fire request and get response
    const response = await api.get(`${path}?page=${page}&sort_by=original_title.desc&${query}`);

    // Update states
    setMovies(response.data.results);
    setTotalPages(response.data.total_pages);
  };

  const handleNextPage = () => {
    if (page + 1 <= totalPages) setPage(prev => prev + 1);
  }

  const handlePrevPage = () => {
    if (page - 1 != 0) setPage(prev => prev - 1);
  }

  useEffect(() => {
    fetchMovies();
  }, [page]);

  return [movies, page, handleNextPage, handlePrevPage];
};

export default useMovies;

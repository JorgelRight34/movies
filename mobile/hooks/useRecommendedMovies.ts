import { useEffect, useState } from "react";
import api from "../data/api";
import { Movie } from "../models/movie";

/**
 * Custom hook to fetch recommended movies based on a given movie ID.
 *
 * @param {string} id - The ID of the movie for which to fetch recommendations.
 * @returns {Movie[]} An array of recommended movies.
 *
 * @example
 * const recommendedMovies = useRecommendedMovies("12345");
 */
const useRecommendedMovies = (id: string): Movie[] => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async () => {
    const response = await api.get(
      `movie/${id}/recommendations?sort_by=original_title.desc`
    );
    setMovies(response.data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return movies;
};

export default useRecommendedMovies;

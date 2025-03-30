import { useEffect, useState } from "react";
import api from "../data/api";
import { Movie } from "../models/movie";

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

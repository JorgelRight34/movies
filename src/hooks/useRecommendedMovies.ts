import { useEffect, useState } from "react";
import api from "../api";
import { API_KEY } from "../lib/constants";
import { Movie } from "../models/movie";

const useRecommendedMovies = (id: string): Movie[] => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async () => {
    const response = await api.get(
      `movie/${id}/recommendations?api_key=${API_KEY}`
    );
    setMovies(response.data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return movies;
};

export default useRecommendedMovies;

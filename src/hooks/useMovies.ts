import api from "../data/api";
import { API_KEY } from "../lib/constants";
import { Movie } from "../models/movie";
import { useEffect, useState } from "react";

const useMovies = (
  endpoint: "now_playing" | "popular" | "top_rated" | "upcoming" = "now_playing"
) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async () => {
    const response = await api.get(`movie/${endpoint}?api_key=${API_KEY}`);
    setMovies(response.data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return movies;
};

export default useMovies;

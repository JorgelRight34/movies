import api from "../api";
import { Movie } from "../models/movie";
import { useEffect, useState } from "react";

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async () => {
    const response = await api.get("movie/now_playing");
    setMovies(response.data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return movies;
};

export default useMovies;

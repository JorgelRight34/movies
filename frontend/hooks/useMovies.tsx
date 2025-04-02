import api from "@/api";
import { Movie } from "@/models/movie";
import { useState } from "react";

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async () => {
    const response = await api.get("movie/now_playing");
  };

  return [movies];
};

export default useMovies;

import api from "@/api";
import { Movie } from "@/models/movie";
import { useState } from "react";

const useMovies = (id: string) => {
  const [movies, setMovie] = useState<Movie | null>(null);

  const fetchMovies = async () => {
    const response = await api.get(`movie/${id}`);
  };

  return [movies];
};

export default useMovies;

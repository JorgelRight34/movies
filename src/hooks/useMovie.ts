import { useEffect, useState } from "react";
import { Movie } from "../models/movie";
import api from "../api";
import { API_KEY } from "../lib/constants";

const useMovie = (id: string) => {
  const [movies, setMovie] = useState<Movie | null>(null);

  const fetchMovie = async () => {
    const response = await api.get(`movie/${id}?api_key=${API_KEY}`);
    setMovie(response.data);
  };

  const voteForMovie = async () => {
    await api.post(`movie/${id}/rating?api_key=${API_KEY}`);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return [movies, voteForMovie];
};

export default useMovie;

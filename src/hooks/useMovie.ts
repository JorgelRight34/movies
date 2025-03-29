import { useEffect, useState } from "react";
import { Movie } from "../models/movie";
import api from "../api";
import { API_KEY } from "../lib/constants";
import { Actor } from "../models/actor";

const useMovie = (
  id: string
): [Movie | null, Actor[], (rating: number) => Promise<void>] => {
  const [movies, setMovie] = useState<Movie | null>(null);
  const [movieCredits, setMovieCredits] = useState<Actor[]>([]);

  const fetchMovie = async () => {
    const response = await api.get(`movie/${id}?api_key=${API_KEY}`);
    setMovie(response.data);
  };

  const voteForMovie = async (rating: number) => {
    await api.post(`movie/${id}/rating?api_key=${API_KEY}`, {
      value: rating,
    });
  };

  const fetchMovieCredits = async () => {
    const response = await api.get(`movie/${id}/credits?api_key=${API_KEY}`);
    setMovieCredits(response.data.cast);
  };

  useEffect(() => {
    fetchMovie();
    fetchMovieCredits();
  }, []);

  return [movies, movieCredits, voteForMovie];
};

export default useMovie;

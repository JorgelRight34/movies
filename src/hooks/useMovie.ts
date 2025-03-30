import { useEffect, useState } from "react";
import { Movie } from "../models/movie";
import api from "../data/api";
import { API_KEY } from "../lib/constants";
import { Actor } from "../models/actor";
import { toast } from "react-toastify";
import { Worker } from "../models/worker";

const useMovie = (
  id: string
): [Movie | null, { cast: Actor[], crew: Worker[] }, (rating: number) => Promise<void>] => {
  const [movies, setMovie] = useState<Movie | null>(null);
  const [movieCredits, setMovieCredits] = useState<{ cast: Actor[], crew: Worker[] }>({
    cast: [],
    crew: []
  });

  const fetchMovie = async () => {
    const response = await api.get(`movie/${id}?api_key=${API_KEY}`);
    setMovie(response.data);
  };

  const voteForMovie = async (rating: number) => {
    const response = await api.post(`movie/${id}/rating?api_key=${API_KEY}`, {
      value: rating,
    });

    if (response.data.success) toast.success(`You left a rating of ${rating}/10!`);
  };

  const fetchMovieCredits = async () => {
    const response = await api.get(`movie/${id}/credits?api_key=${API_KEY}`);
    setMovieCredits(response.data);
  };

  useEffect(() => {
    fetchMovie();
    fetchMovieCredits();
  }, []);

  return [movies, movieCredits, voteForMovie];
};

export default useMovie;

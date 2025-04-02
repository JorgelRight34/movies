import { useEffect, useState } from "react";
import { Movie } from "../models/movie";
import api from "../data/api";
import { Actor } from "../models/actor";
import { toast } from "react-toastify";
import { Worker } from "../models/worker";

interface UseMovieReturn {
  movie: Movie | null,
  credits: { cast: Actor[], crew: Worker[] },
  voteForMovie: (rating: number) => void
}

/**
 * Hook to get all the info about a movie.
 * @param {string} id - The id of the movie to get the info about.
 /**
 * @returns {[Movie | null, { cast: Actor[]; crew: Worker[] }, (rating: number) => Promise<void>]} 
 * An array containing:
 *  1. The movie object or null.
 *  2. An object with the movie's cast and crew.
 *  3. A function to update the movie rating asynchronously.
 */
const useMovie = (
  id: string
): UseMovieReturn => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [credits, setCredits] = useState<{ cast: Actor[], crew: Worker[] }>({
    cast: [],
    crew: []
  });

  const fetchMovie = async () => {
    const response = await api.get(`movie/${id}?append_to_response=videos`);
    if (response.status === 404) window.location.href = "/";
    setMovie(response.data);
  };

  const voteForMovie = async (rating: number) => {
    const response = await api.post(`movie/${id}/rating?`, {
      value: rating,
    });

    if (response.data.success) {
      toast.success(`You left a rating of ${rating}/10!`)
      fetchMovie(); // Update movie
    };
  };

  const fetchMovieCredits = async () => {
    const response = await api.get(`movie/${id}/credits`);
    setCredits(response.data);
  };

  useEffect(() => {
    fetchMovie();
    fetchMovieCredits();
  }, [id]);

  return { movie, credits, voteForMovie };
};

export default useMovie;

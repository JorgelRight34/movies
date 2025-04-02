import { useEffect, useState } from "react";
import { Movie } from "../models/movie";
import api from "../data/api";
import { Actor } from "../models/actor";
import { Worker } from "../models/worker";
import { Alert } from "react-native";

interface UseMovieReturn {
  movie: Movie | null;
  credits: { cast: Actor[]; crew: Worker[] };
  voteForMovie: (rating: number) => Promise<void>;
}

/**
 * Hook to get all the info about a movie from the TMDB api.
 * @param {string} id - The id of the movie to get the info about.
 /**
 * @returns {{ movie: Movie | null, credits: { cast: Actor[], crew: Worker[] }, voteForMovie: (rating: number) => Promise<void> }} 
 * An object containing:
 *  1. The movie object or null.
 *  2. An object with the movie's cast and crew.
 *  3. A function to update the movie rating asynchronously.
 */
const useMovie = (id: string): UseMovieReturn => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [credits, setCredits] = useState<{ cast: Actor[]; crew: Worker[] }>({
    cast: [],
    crew: [],
  });

  const fetchMovie = async () => {
    const response = await api.get(`movie/${id}?append_to_response=videos`);
    if (response.status === 404) window.location.href = "/";
    setMovie(response.data);
  };

  const voteForMovie = async (rating: number) => {
    const response = await api.post(`movie/${id}/rating?`, {
      value: rating > 0 ? rating : 0.1,
    });

    if (response.data.success) {
      Alert.alert(`Has dejado una valoración de ${rating}/10!`);
      fetchMovie(); // Update movie
    }
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

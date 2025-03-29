import { useEffect, useState } from "react";
import api from "../data/api";
import { Movie } from "../models/movie";

const useFavorites = (): Movie[] => {
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

  const getFavoriteMovies = async () => {
    const sessionId = localStorage.getItem('sessionId') || null;
    const response = await api.get(
      `account/${sessionId}/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`
    );
    setFavoriteMovies(response.data.results);
  };

  useEffect(() => {
    getFavoriteMovies();
  }, []);

  return favoriteMovies;
};

export default useFavorites;

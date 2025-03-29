import { useEffect, useState } from "react";
import api from "../api";
import { Movie } from "../models/movie";

const useFavorites = (): {
  favoriteMovies: Movie[];
  addMovieToFavorites: (id: number) => void;
} => {
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

  const getFavoriteMovies = async () => {
    const response = await api.get(
      `account/null/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`
    );
    setFavoriteMovies(response.data.results);
  };

  const addMovieToFavorites = async (id: number) => {
    await api.post(`account/null/favorites`, {
      media_type: "movie",
      media_id: id,
      favorite: true,
    });
  };

  useEffect(() => {
    getFavoriteMovies();
  }, []);

  return { favoriteMovies, addMovieToFavorites };
};

export default useFavorites;

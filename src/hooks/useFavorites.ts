import { useEffect, useState } from "react";
import api from "../data/api";
import { Movie } from "../models/movie";
import { ACCOUNT_ID } from "../lib/constants";

const useFavorites = (): [Movie[], number, () => void, () => void] => {
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const getFavoriteMovies = async () => {
    const response = await api.get(
      `account/${ACCOUNT_ID}/favorite/movies?page=${page}&sort_by=created_at.asc`
    );
    setFavoriteMovies(response.data.results);
    setTotalPages(response.data.total_pages);
  };

  const handleNextPage = () => {
    if (page + 1 <= totalPages) setPage(prev => prev + 1);
  }

  const handlePreviusPage = () => {
    if (page - 1 != 0) setPage(prev => prev - 1);
  }

  useEffect(() => {
    getFavoriteMovies();
  }, [page]);

  return [favoriteMovies, page, handleNextPage, handlePreviusPage];
};

export default useFavorites;

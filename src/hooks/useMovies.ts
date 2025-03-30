import api from "../data/api";
import { Movie } from "../models/movie";
import { useEffect, useState } from "react";
import { MovieFilter } from "../models/movieFilter";

const useMovies = (
  endpoint: MovieFilter = "now_playing"
): [Movie[], number, () => void, () => void] => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchMovies = async () => {
    const response = await api.get(`movie/${endpoint}?page=${page}&sort_by=original_title.desc`);
    setMovies(response.data.results);
    setTotalPages(response.data.total_pages);
  };

  const handleNextPage = () => {
    if (page + 1 <= totalPages) setPage(prev => prev + 1);
  }

  const handlePreviusPage = () => {
    if (page - 1 != 0) setPage(prev => prev - 1);
  }

  useEffect(() => {
    fetchMovies();
  }, [page]);

  return [movies, page, handleNextPage, handlePreviusPage];
};

export default useMovies;

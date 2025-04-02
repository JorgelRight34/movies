import { useLocation } from "react-router";
import MovieListLayout from "../../layouts/MovieListLayout";
import useMovies from "../../hooks/useMovies";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useEffect } from "react";

/**
 * Page component for search movies result.
 *
 * @component
 * @returns {JSX.Element} The rendered search results page component.
 */
const SearchMovieResults = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("q") || "";
  const { movies, page, totalPages, goToNextPage, goToPrevPage, fetchMovies } =
    useMovies("search", `query=${query}`);

  useEffect(() => {
    // Re render
    fetchMovies();
  }, [location.search]);

  return (
    <MovieListLayout
      page={page}
      totalPages={totalPages}
      title="Resultados de Búsqueda"
      goToNextPage={goToNextPage}
      goToPrevPage={goToPrevPage}
    >
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="col-10 col-lg-2 movie-card-container mb-lg-5"
        >
          <MovieCard
            showAddToFavoriteBtn={false}
            key={movie.id}
            movie={movie}
          />
        </div>
      ))}
    </MovieListLayout>
  );
};

export default SearchMovieResults;

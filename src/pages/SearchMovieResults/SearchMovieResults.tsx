import { useLocation } from "react-router";
import MovieListLayout from "../../layouts/MovieListLayout";
import useMovies from "../../hooks/useMovies";
import MovieCard from "../../components/MovieCard/MovieCard";

const SearchMovieResults = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("q") || "";
  const [movies, , handleNextPage, handlePrevPage] = useMovies(
    "search",
    `query=${query}`
  );

  return (
    <MovieListLayout
      title="Search Results"
      goToNextPage={handleNextPage}
      goToPrevPage={handlePrevPage}
    >
      {movies.map((movie) => (
        <div className="col-lg-2 movie-card-container">
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

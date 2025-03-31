import { useParams } from "react-router";
import MovieCard from "../../components/MovieCard/MovieCard";
import useMovies from "../../hooks/useMovies";
import MovieListLayout from "../../layouts/MovieListLayout";
import { MovieFilter } from "../../models/movieFilter";
import { useMemo } from "react";

/**
 * Page component for a list of movies of the type specified on the path.
 *
 * @component
 * @returns {JSX.Element} The rendered movie list page component.
 */
const MovieList = () => {
  const { filter } = useParams();
  const [movies, , goToNextPage, goToPrevPage] = useMovies(
    (filter as MovieFilter) || "now_playing"
  );

  const title = useMemo(() => {
    switch (filter) {
      case "now_playing":
        return "Now Playing";
      case "top_rated":
        return "Top Rated";
      case "popular":
        return "Popular";
      case "upcoming":
        return "Upcoming";
      default:
        return "Now Playing";
    }
  }, [filter]);

  return (
    <MovieListLayout
      title={title}
      goToNextPage={goToNextPage}
      goToPrevPage={goToPrevPage}
    >
      {movies.map((movie) => (
        <div className="col-lg-2 movie-card-container">
          <MovieCard key={movie.id} movie={movie} />
        </div>
      ))}
    </MovieListLayout>
  );
};

export default MovieList;

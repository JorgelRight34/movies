import { useMemo } from "react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import { Movie } from "../models/movie";
import { NavLink } from "react-router";

interface MoviesListingsProps {
  movies: Movie[];
  width?: number;
  gap?: number;
}

const MoviesListings = ({
  movies,
  width = 3,
  gap = 5,
}: MoviesListingsProps) => {
  const orderedMovies = useMemo(
    () =>
      movies.sort((a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase())
      ),
    [movies]
  );

  return (
    <div className={`movies-listings gap-${gap}`}>
      {orderedMovies.map((movie) => (
        <NavLink
          key={movie.id}
          className={`text-decoration-none col-lg-${width}`}
          to={`/movies/${movie.id}`}
        >
          <MovieCard key={movie.id} movie={movie} />
        </NavLink>
      ))}
    </div>
  );
};

export default MoviesListings;

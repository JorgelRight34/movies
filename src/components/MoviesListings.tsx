import { useMemo } from "react";

import MovieCard from "./MovieCard";
import { Movie } from "../models/movie";
import { NavLink } from "react-router";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  };

  return (
    <div className={`movies-listings gap-${gap}`}>
      {orderedMovies.length}
      <>
        {orderedMovies.map((movie) => (
          <NavLink
            key={movie.id}
            className={`text-decoration-none col-lg-${width}`}
            to={`/movies/${movie.id}`}
          >
            <MovieCard key={movie.id} movie={movie} />
          </NavLink>
        ))}
      </>
    </div>
  );
};

export default MoviesListings;

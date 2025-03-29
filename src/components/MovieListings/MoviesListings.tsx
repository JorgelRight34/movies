import { useMemo } from "react";

import MovieCard from "../MovieCard/MovieCard";
import { Movie } from "../../models/movie";
import { NavLink } from "react-router";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./movies-listings.css";

interface MoviesListingsProps {
  movies: Movie[];
  slidesToShow?: number;
  slidesToScroll?: number;
}

const MoviesListings = ({
  movies,
  slidesToShow = 5,
  slidesToScroll = 3,
}: MoviesListingsProps) => {
  const orderedMovies = useMemo(
    () =>
      movies.sort((a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase())
      ),
    [movies]
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
  };

  if (movies.length === 0) return <></>;

  return (
    <div className={`slider-container`}>
      <Slider {...settings}>
        {orderedMovies.map((movie) => (
          <div className={`col-lg-2 py-5`}>
            <MovieCard key={movie.id} movie={movie} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MoviesListings;

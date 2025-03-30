import { useMemo } from "react";

import MovieCard from "../MovieCard/MovieCard";
import { Movie } from "../../models/movie";
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
    responsive: [
      {
        breakpoint: 768, // Breakpoint for mobile
        settings: {
          slidesToShow: 1, // Show only 3 slides on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (movies.length === 0) return <></>;

  return (
    <>
      <div className={`slider-container`}>
        <Slider {...settings}>
          {orderedMovies.map((movie) => (
            <div key={movie.id} className={`col-lg-2 px-lg-0 py-5`}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default MoviesListings;

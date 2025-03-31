import MovieCard from "../MovieCard/MovieCard";
import { Movie } from "../../models/movie";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./movies-listings.css";
import MovieCardPlaceholder from "../MovieCard/MovieCardPlaceholder";

interface MoviesListingsProps {
  movies: Movie[];
  slidesToShow?: number;
  slidesToScroll?: number;
}

/**
 * Component for displaying a list of movies like a gallery with controls.
 *
 * @component
 * @param {Object} props.props - The properties passed to the component.
 * @param {Object} props.movies - The movies to be displayed.
 * @param {number} [props.slidesToShow=5] - Number of slides per row to show. Default is 5
 * @param {number} [props.slidesToScroll=3] - Number of slides to slide to. Default is 3
 * @returns {JSX.Element} The rendered movie listings component.
 */
const MoviesListings = ({
  movies,
  slidesToShow = 5,
  slidesToScroll = 3,
}: MoviesListingsProps) => {
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

  return (
    <>
      <div className={`slider-container px-3 py-lg-0 px-lg-0`}>
        {/* Slider */}
        <Slider {...settings}>
          {movies.length > 0
            ? movies.map((movie) => (
                <div key={movie.id} className={`col-lg-2 px-lg-0 py-5`}>
                  <MovieCard movie={movie} />
                </div>
              ))
            : Array(slidesToShow)
                .fill(null)
                .map((_, key) => (
                  <div key={key} className={`col-lg-2 px-lg-0 py-5`}>
                    <MovieCardPlaceholder />
                  </div>
                ))}
        </Slider>
      </div>
    </>
  );
};

export default MoviesListings;

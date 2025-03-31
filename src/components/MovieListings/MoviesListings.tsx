import MovieCard from "../MovieCard/MovieCard";
import { Movie } from "../../models/movie";

import "./movies-listings.css";
import MovieCardPlaceholder from "../MovieCard/MovieCardPlaceholder";
import CustomSlider from "../common/CustomSlider";

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
  return (
    <>
      <div className={`slider-container px-3 py-lg-0 px-lg-0`}>
        {/* Slider */}
        <CustomSlider
          slidesToScroll={slidesToScroll}
          slidesToShow={slidesToShow}
        >
          {/* If movies is empty show a list of placeholders, else show the movies */}
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
        </CustomSlider>
      </div>
    </>
  );
};

export default MoviesListings;

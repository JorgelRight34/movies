import { ReactNode } from "react";
import { getFullMovieImagePath } from "../../lib/utils";
import { Movie } from "../../models/movie";
import "./movie-backdrop.css";

interface MovieBackdropProps {
  movie: Movie;
  children?: ReactNode;
}

/**
 * A backdrop component for displaying the movie background.
 *
 * @component
 * @param {Object} props.props - The properties passed to the component.
 * @param {Movie} props.movie - The movie associated with the backdrop.
 * @param {ReactNode} [props.children] - Optional child elements to render on the other column of the backdrop.
 * @returns {JSX.Element} The rendered movie backdrop component.
 */
const MovieBackdrop = ({ movie, children }: MovieBackdropProps) => {
  return (
    <div className="movie-backdrop bg-black row mx-0">
      {/* Content column - shows second on mobile, first on lg+ */}
      <div className="col-lg-5 order-2 order-lg-1 p-3 p-lg-5">{children}</div>

      {/* Image column - shows first on mobile, second on lg+ */}
      <div className="col-lg-7 order-1 order-lg-2 position-relative">
        {/* Backdrop with fade in effect */}
        <div className="movie-backdrop-container">
          {/* Backdrop image fading in to black from left to right being right the darkest */}
          <img
            className="img-fluid movie-backdrop-img"
            loading="lazy"
            src={getFullMovieImagePath(movie.backdrop_path, "original")}
            alt={movie.title}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieBackdrop;

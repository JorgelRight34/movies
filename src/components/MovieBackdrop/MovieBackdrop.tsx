import { ReactNode } from "react";
import { getFullMovieImagePath } from "../../lib/utils";
import { Movie } from "../../models/movie";
import "./movie-backdrop.css";

interface MovieBackdrop {
  movie: Movie;
  children?: ReactNode;
}

const MovieBackdrop = ({ movie, children }: MovieBackdrop) => {
  return (
    <div className="movie-backdrop bg-black row mx-0">
      {/* Content column - shows second on mobile, first on lg+ */}
      <div className="col-lg-5 order-2 order-lg-1 p-3 p-lg-5">{children}</div>

      {/* Image column - shows first on mobile, second on lg+ */}
      <div className="col-lg-7 order-1 order-lg-2 position-relative">
        <div className="movie-backdrop-container">
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

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
      <div className="col-lg-5 p-lg-5">{children}</div>
      <div className="col-lg-7 position-relative">
        <div className="movie-backdrop-container">
          <img
            className="img-fluid movie-backdrop-img"
            loading="lazy"
            src={getFullMovieImagePath(movie.backdrop_path, "original")}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieBackdrop;

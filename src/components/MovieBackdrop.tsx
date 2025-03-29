import { TMDB_IMAGES_SRC } from "../lib/constants";
import { Movie } from "../models/movie";
import RatingStars from "./RatingStars";

interface MovieBackdrop {
  movie: Movie;
}

const MovieBackdrop = ({ movie }: MovieBackdrop) => {
  return (
    <div className="movie-backdrop row mx-0">
      <div className="col-lg-6 p-lg-5">
        <h1 className="mb-5">{movie.title}</h1>
        <div className="mb-3">
          <RatingStars rating={movie.vote_average} />
        </div>
        <p>{movie.overview}</p>
      </div>
      <div className="col-lg-6 movie-backdrop-img position-relative">
        <img
          className="img-fluid"
          loading="lazy"
          src={`${TMDB_IMAGES_SRC}original${movie.backdrop_path}`}
        />
      </div>
    </div>
  );
};

export default MovieBackdrop;

import { getFullMovieImagePath } from "../../lib/utils";
import { Movie } from "../../models/movie";
import RatingStars from "../RatingStars/RatingStars";
import "./movie-poster.css";

interface MoviePosterProps {
  movie: Movie;
}

const MoviePoster = ({ movie }: MoviePosterProps) => {
  return (
    <div className="poster bg-dark">
      <img
        src={getFullMovieImagePath(movie.poster_path)}
        className="img-fluid movie-details-poster shadow-sm"
        alt={movie.title}
      />
      <div className="p-3">
        <h4 className="mb-3">
          {movie.genres?.map((genre) => genre.name).join("/")}
        </h4>
        <div className="d-flex mb-2">
          <span>{movie.release_date}</span>
          <span className="ms-auto">Votes: {movie.vote_average}/10</span>
        </div>
        <div className="d-flex mb-3">
          <span>Duration: {movie.runtime}mins</span>{" "}
        </div>
        <RatingStars rating={movie.vote_average} />
      </div>
    </div>
  );
};

export default MoviePoster;

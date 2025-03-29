import { getFullMovieImagePath } from "../lib/utils";
import { Movie } from "../models/movie";

interface MovieProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieProps) => {
  return (
    <div className="movie-card shadow-sm rounded-3">
      <img
        className="img-fluid d-block d-lg-none"
        src={getFullMovieImagePath(movie.poster_path)}
        loading="lazy"
        alt={movie.title}
      />
      <img
        className="img-fluid d-none d-lg-block"
        src={getFullMovieImagePath(movie.backdrop_path)}
        loading="lazy"
        alt={movie.title}
      />
      <div className="movie-card-description p-3">
        <h5 className="text-truncate">{movie.title}</h5>
        <div className="d-flex">
          <span>{movie.release_date}</span>
          <span className="ms-auto">Votes: {movie.vote_average}/10</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

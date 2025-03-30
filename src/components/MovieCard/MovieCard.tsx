import useAddMovieToFavorites from "../../hooks/useAddMovieToFavorites";
import { getFullMovieImagePath } from "../../lib/utils";
import { Movie } from "../../models/movie";
import BuyTicketsBtn from "../common/BuyTicketsBtn";
import "./movie-card.css";

interface MovieProps {
  showAddToFavoriteBtn?: boolean;
  movie: Movie;
}

const MovieCard = ({ movie, showAddToFavoriteBtn = true }: MovieProps) => {
  const addMovieToFavorites = useAddMovieToFavorites();

  return (
    <article className="movie-card border shadow-sm rounded-3">
      {showAddToFavoriteBtn && (
        <div
          className="add-to-favorites-btn rounded-circle p-1"
          onClick={() => addMovieToFavorites(movie.id)}
        >
          <span className="material-icons-outlined">favorite_border</span>
        </div>
      )}

      <img
        className="img-fluid d-block d-lg-none d-lg-block"
        src={getFullMovieImagePath(movie.poster_path)}
        loading="lazy"
        alt={movie.title}
      />
      <img
        className="img-fluid d-none d-lg-block"
        src={getFullMovieImagePath(movie.poster_path)}
        loading="lazy"
        alt={movie.title}
      />
      <div className="movie-card-description p-3">
        <h5 className="text-truncate">{movie.title}</h5>
        <div className="d-flex flex-column flex-lg-row mb-3">
          <span>{movie.release_date}</span>
          <span className="ms-0 ms-lg-auto">
            Votes: {movie.vote_average}/10
          </span>
        </div>
        <BuyTicketsBtn className="w-100" movie={movie} />
      </div>
    </article>
  );
};

export default MovieCard;

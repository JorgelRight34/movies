import { useState } from "react";
import useAddMovieToFavorites from "../../hooks/useAddMovieToFavorites";
import { getFullMovieImagePath } from "../../lib/utils";
import { Movie } from "../../models/movie";
import BuyTicketsBtn from "../common/BuyTicketsBtn";
import "./movie-card.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface MovieProps {
  showAddToFavoriteBtn?: boolean;
  movie: Movie;
}

/**
 * A card component for displaying the movie details.
 *
 * @component
 * @param {Object} props.props - The properties passed to the component.
 * @param {Movie} props.movie - The movie associated with the backdrop.
 * @param {boolean} [showAddToFavoriteBtn] - Show an icon with a heart to add movie to favorites.
 * @returns {JSX.Element} The rendered card backdrop component.
 */
const MovieCard = ({ movie, showAddToFavoriteBtn = true }: MovieProps) => {
  const addMovieToFavorites = useAddMovieToFavorites();
  const [isFavoriteIconFull, setIsFavoriteIconFull] = useState(false);
  const [isMovieFavorite, setIsMovieFavorite] = useState(false);

  const handleAddMovieToFavorites = () => {
    // When user adds movie to favorite the favorite heart icon
    // will transform into a full heart indicating it's a favorite movie
    addMovieToFavorites(movie.id, !isMovieFavorite);
    setIsFavoriteIconFull(!isMovieFavorite);
    setIsMovieFavorite((prev) => !prev);
  };

  return (
    <article className="movie-card border shadow-sm rounded-3">
      {/* Add to favorite button */}
      {showAddToFavoriteBtn && (
        <div
          className="add-to-favorites-btn rounded-circle p-1"
          onMouseEnter={() => setIsFavoriteIconFull(true)} // When on hover the heart icon will be full
          onMouseLeave={() => setIsFavoriteIconFull(false)} // When on leave the heart icon will be back to normal
          onClick={handleAddMovieToFavorites}
        >
          <span className={`material-icons-outlined text-accent`}>
            {/* If movie is favorite show a full heart icon, else show an empty heart */}
            {isFavoriteIconFull || isMovieFavorite
              ? "favorite"
              : "favorite_border"}
          </span>
        </div>
      )}
      {/* Poster */}
      <LazyLoadImage
        className="img-fluid d-block d-lg-block"
        src={getFullMovieImagePath(movie.poster_path)}
        alt={movie.title}
      />
      {/* Movie description */}
      <div className="movie-card-description p-3">
        <h5 className="text-truncate" title={movie.title}>
          {movie.title}
        </h5>
        <div className="d-flex flex-column flex-lg-row mb-3">
          <span>
            <time>{movie.release_date}</time>
          </span>
          <span className="ms-0 ms-lg-auto">
            Votos: {movie.vote_average?.toFixed(1)}/10
          </span>
        </div>
        <BuyTicketsBtn label="Más Detalles" className="w-100" movie={movie} />
      </div>
    </article>
  );
};

export default MovieCard;

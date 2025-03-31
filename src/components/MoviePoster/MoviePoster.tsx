import { getFullMovieImagePath } from "../../lib/utils";
import { Movie } from "../../models/movie";
import RatingStars from "../RatingStars/RatingStars";
import "./movie-poster.css";

interface MoviePosterProps {
  movie: Movie;
}

/**
 * A movie poster component for displaying the poster of the movie.
 *
 * @component
 * @param {Object} props.props - The properties passed to the component.
 * @param {Movie} props.movie - The movie associated with the poster.
 * @returns {JSX.Element} The rendered movie poster component.
 */
const MoviePoster = ({ movie }: MoviePosterProps) => {
  return (
    <div className="poster bg-dark">
      {/* Poster image */}
      <img
        src={getFullMovieImagePath(movie.poster_path)}
        className="img-fluid movie-details-poster shadow-sm"
        alt={movie.title}
      />
      {/* Movie details */}
      <div className="p-3">
        {/* Genres unified joined "/" like "Action/Adventure..." */}
        <h4 className="mb-3">
          {movie.genres?.map((genre) => genre.name).join("/")}
        </h4>
        {/* Votes out of 10 */}
        <div className="d-flex mb-2">
          <span>{movie.release_date}</span>
          <span className="ms-auto">Votes: {movie.vote_average}/10</span>
        </div>
        {/* Movie duration in minutes */}
        <div className="d-flex mb-3">
          <span>Duration: {movie.runtime}mins</span>{" "}
        </div>
        {/* Rating out of 5 stars */}
        <RatingStars rating={movie.vote_average} />
      </div>
    </div>
  );
};

export default MoviePoster;

import BuyTicketsBtn from "../common/BuyTicketsBtn";
import RatingStars from "../RatingStars/RatingStars";
import useAddMovieToFavorites from "../../hooks/useAddMovieToFavorites";
import { getFullMovieImagePath } from "../../lib/utils";
import { Movie } from "../../models/movie";
import "./movie-details-list.css";

interface DetailsProps {
  movie: Movie;
  voteForMovie?: (value: number) => void;
}

/**
 * A details component for displaying the movie details.
 *
 * @component
 * @param {Object} props.props - The properties passed to the component.
 * @param {Movie} props.movie - The movie associated with the details.
 * @param {(value: number) => void} [props.voteForMovie] - Callback function to handle the voting process for the movie.
 * @returns {JSX.Element} The rendered movie details component.
 */
const MovieDetailsList = ({ movie, voteForMovie }: DetailsProps) => {
  const addMovieToFavorites = useAddMovieToFavorites();

  return (
    <div>
      <div className="row mx-0">
        <h1 className="d-block d-lg-none mb-3">{movie.title}</h1>
        {/* Poster image on the first column */}
        <div className="col-lg-6 p-lg-3 d-flex align-items-center justify-content-center">
          <img
            className="img-fluid movie-details-poster shadow-lg mb-3 mb-lg-0"
            src={getFullMovieImagePath(movie.poster_path, "original")}
            alt={movie.title}
          />
        </div>
        {/* Second column */}
        <div className="col-lg-6 p-lg-3">
          {/* Header */}
          <h1 className="d-none d-lg-block mb-3">{movie.title}</h1>
          <div className="mb-5">
            {/* Companies and release date */}
            <h4>{movie.production_companies?.[0]?.name}</h4>
            <h6>
              <time>({movie.release_date})</time>
            </h6>
            <h6>{movie.genres?.map((genre) => genre.name).join(" / ")}</h6>
            {/* Movie identification and popularity */}
            <div className="d-flex flex-wrap gap-3 mb-3">
              {/* Movie id */}
              <div className="d-flex align-items-center">
                <span className="material-icons-outlined me-2">movie</span>
                <span>{movie.imdb_id}</span>
              </div>
              {/* IMDB popularity */}
              <div className="d-flex px-3 align-items-center">
                <img src="/icons/imdb-logo.png" className="imdb-logo me-2" />
                <span>{movie.popularity.toFixed(2)}</span>
              </div>
            </div>
            {/* Rating stars form */}
            <RatingStars
              readOnly={false}
              renderLabelText={true}
              rating={movie.vote_average}
              callback={voteForMovie}
            />
          </div>

          {/* Movie details */}
          <div className="mb-3 mb-lg-5">
            {/* Languages */}
            <dl className="d-flex border-bottom p-2">
              <dt>Languages</dt>
              <dd className="ms-auto">
                {movie.spoken_languages
                  ?.map((language) => language.english_name)
                  .join(", ")}
              </dd>
            </dl>
            {/* Runtime */}
            <dl className="d-flex border-bottom p-2">
              <dt>Runtime</dt>
              <dd className="ms-auto">{movie.runtime} mins</dd>
            </dl>
            {/* Runtime */}
            <dl className="d-flex border-bottom p-2">
              <dt>Votes</dt>
              <dd className="ms-auto">{movie.vote_average}/10</dd>
            </dl>
            {/* Status */}
            <dl className="d-flex border-bottom p-2">
              <dt>Status</dt>
              <dd className="ms-auto">{movie.status}</dd>
            </dl>
          </div>

          {/* Mock buy tickets btn */}
          <BuyTicketsBtn className="w-100 mb-3" movie={movie} />
          {/* Button to add movie to favorites */}
          <button
            className="btn bg-black text-white w-100"
            onClick={() => addMovieToFavorites(movie.id)}
          >
            Añadir a Favoritos
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsList;

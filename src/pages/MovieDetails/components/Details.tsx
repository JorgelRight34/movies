import BuyTicketsBtn from "../../../components/common/BuyTicketsBtn";
import RatingStars from "../../../components/RatingStars/RatingStars";
import useAddMovieToFavorites from "../../../hooks/useAddMovieToFavorites";
import { getFullMovieImagePath } from "../../../lib/utils";
import { Movie } from "../../../models/movie";
import "../movie-details.css";

interface DetailsProps {
  movie: Movie;
}

/**
 * A details component for displaying the movie details.
 *
 * @component
 * @param {Object} props.props - The properties passed to the component.
 * @param {Movie} props.movie - The movie associated with the details.
 * @returns {JSX.Element} The rendered movie details component.
 */
const Details = ({ movie }: DetailsProps) => {
  const addMovieToFavorites = useAddMovieToFavorites();

  return (
    <div>
      <h1 className="mb-3">{movie.title}</h1>
      <div className="row mx-0">
        <div className="col-lg-6 p-lg-3 d-flex justify-content-center">
          <img
            className="img-fluid movie-details-poster shadow-sm mb-3 mb-lg-0"
            src={getFullMovieImagePath(movie.poster_path, "original")}
            alt={movie.title}
          />
        </div>
        <div className="col-lg-6 p-lg-3">
          <div className="mb-5">
            <h4>{movie.production_companies?.[0]?.name}</h4>
            <h6>
              <time>({movie.release_date})</time>
            </h6>
            <h6>
              {movie.production_companies
                ?.map((company) => company.name)
                .join(", ")}
            </h6>
            <div className="d-flex flex-wrap gap-3 mb-3">
              <div className="d-flex align-items-center">
                <span className="material-icons-outlined me-2">movie</span>
                <span>{movie.imdb_id}</span>
              </div>
              <div className="d-flex px-3 align-items-center">
                <img src="/icons/imdb-logo.png" className="imdb-logo me-2" />
                <span>{movie.popularity.toFixed(2)}</span>
              </div>
            </div>
            <RatingStars
              readOnly={false}
              renderLabelText={true}
              rating={movie.vote_average}
            />
          </div>

          <div className="mb-3 mb-lg-5">
            <dl className="d-flex border-bottom p-2">
              <dt>Languages</dt>
              <dd className="ms-auto">
                {movie.spoken_languages
                  ?.map((language) => language.english_name)
                  .join(", ")}
              </dd>
            </dl>
            <dl className="d-flex border-bottom p-2">
              <dt>Runtime</dt>
              <dd className="ms-auto">{movie.runtime} mins</dd>
            </dl>
            <dl className="d-flex border-bottom p-2">
              <dt>Status</dt>
              <dd className="ms-auto">{movie.status}</dd>
            </dl>
          </div>

          <BuyTicketsBtn className="w-100 mb-3" movie={movie} />
          <button
            className="btn bg-black border text-white w-100"
            onClick={() => addMovieToFavorites(movie.id)}
          >
            Add to Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;

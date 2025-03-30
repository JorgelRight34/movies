import BuyTicketsBtn from "../../../components/common/BuyTicketsBtn";
import RatingStars from "../../../components/RatingStars/RatingStars";
import useAddMovieToFavorites from "../../../hooks/useAddMovieToFavorites";
import { getFullMovieImagePath } from "../../../lib/utils";
import { Movie } from "../../../models/movie";

interface DetailsProps {
  movie: Movie;
}

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
            <h4>{movie.production_companies[0].name}</h4>
            <h6>({movie.release_date})</h6>
            <h6>
              {movie.production_companies
                .map((company) => company.name)
                .join(", ")}
            </h6>
            <div className="d-flex flex-wrap gap-3 mb-3">
              <div className="d-flex align-items-center">
                <span className="material-icons-outlined me-2">movie</span>
                <span>{movie.imdb_id}</span>
              </div>
              <div className="d-flex border px-3 rounded-3 align-items-center">
                <span className="me-2">IMDb</span>
                <span>{movie.vote_average}</span>
              </div>
            </div>
            <RatingStars
              readOnly={false}
              renderLabelText={true}
              rating={movie.vote_average}
            />
          </div>

          <div className="row mx-0 mb-5">
            <div className="col-6 px-0 d-flex flex-column flex-wrap gap-5">
              <span className="border-bottom pb-3">
                <b>Languages</b>
              </span>
              <span className="border-bottom pb-3">
                <b>Runtime</b>
              </span>
              <span className="border-bottom pb-3">
                <b>Status</b>
              </span>
            </div>
            <div className="col-6 px-0 d-flex flex-column flex-wrap gap-5">
              <span className="border-bottom pb-3">
                {movie.spoken_languages
                  .map((language) => language.english_name)
                  .join(", ")}
              </span>
              <span className="border-bottom pb-3">{movie.runtime} mins</span>
              <span className="border-bottom pb-3">{movie.status}</span>
            </div>
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

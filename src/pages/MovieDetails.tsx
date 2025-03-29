import { useParams } from "react-router";
import useMovie from "../hooks/useMovie";
import useRecommendedMovies from "../hooks/useRecommendedMovies";
import Layout from "../components/Layout";
import { getFullMovieImagePath } from "../lib/utils";
import RatingStars from "../components/RatingStars";
import useFavorites from "../hooks/useFavorites";
import MovieCard from "../components/MovieCard";
import MoviesListings from "../components/MoviesListings";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, cast, voteForMovie] = useMovie(id || "");
  const { addMovieToFavorites } = useFavorites();
  const recommendeMovies = useRecommendedMovies(id || "");

  if (!movie) return <></>;

  return (
    <Layout>
      <div className="row mx-0 bg-medium">
        <div className="col-lg-4 p-lg-5 border d-flex align-items-center justify-content-center">
          <div className="bg-dark">
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
        </div>
        <div className="col-lg-8 p-lg-5">
          <div className="bg-dark rounded-3 p-3 shadow-sm">
            <section className="mb-5">
              <div className="mb-5">
                <h1>{movie.title}</h1>
                <h4>{movie.tagline}</h4>
              </div>
              <p>{movie.overview}</p>
              <button onClick={() => addMovieToFavorites(movie.id)} />
            </section>
            <div className="mb-5">
              <h4>Leave your rating</h4>
              <RatingStars rating={movie.vote_average} />
            </div>
            <section>
              <h4>Cast</h4>
              <ul className="cast-list">
                {cast.map((actor) => (
                  <li key={actor.id}>
                    {actor.name} / {actor.character}
                  </li>
                ))}
              </ul>
            </section>

            <button onClick={() => voteForMovie(5)}></button>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap gap-5">
        <MoviesListings movies={recommendeMovies} />
      </div>
    </Layout>
  );
};

export default MovieDetails;

import { useParams } from "react-router";
import useMovie from "../../hooks/useMovie";
import useRecommendedMovies from "../../hooks/useRecommendedMovies";
import Layout from "../../layouts/Layout";
import MoviesListings from "../../components/MovieListings/MoviesListings";
import Details from "./components/Details";
import Overview from "./components/Overview";
import CastDetails from "./components/CastDetails";
import "./movie-details.css";
import CrewDetails from "./components/CrewDetails";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, credits, voteForMovie] = useMovie(id || "");
  const recommendeMovies = useRecommendedMovies(id || "");

  if (!movie) return <></>;

  return (
    <Layout>
      <div className="row p-0 p-lg-5 d-flex justify-content-center  mx-0 bg-medium">
        <div className="bg-dark rounded-3 col-12 col-lg-10 p-3 p-lg-5">
          <section className="border-bottom mb-3 mb-lg-5 pb-3">
            <Details movie={movie} />
          </section>
          <section className="row mx-0 border-bottom mb-3 mb-lg-5">
            <div className="bg-dark rounded-3 p-3 shadow-sm">
              <Overview
                voteForMovie={(value) => voteForMovie(value * 2)}
                movie={movie}
              />
            </div>
          </section>
          <section className="row mx-0">
            <div className="col-lg-6 cast-details">
              <h3>Cast</h3>
              <div className="profiles px-3">
                <CastDetails cast={credits.cast} />
              </div>
            </div>
            <div className="col-lg-6">
              <h3>Crew</h3>
              <div className="profiles px-3">
                <CrewDetails crew={credits.crew} />
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className="p-3 p-lg-5 bg-dark">
        <h3 className="mb-3">Recommended</h3>
        {recommendeMovies.length > 0 ? (
          <MoviesListings movies={recommendeMovies} />
        ) : (
          <span>No recommended movies</span>
        )}
      </section>
    </Layout>
  );
};

export default MovieDetails;

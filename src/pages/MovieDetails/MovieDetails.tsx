import { useParams } from "react-router";
import useMovie from "../../hooks/useMovie";
import useRecommendedMovies from "../../hooks/useRecommendedMovies";
import Layout from "../../layouts/Layout";
import MoviesListings from "../../components/MovieListings/MoviesListings";
import Details from "./components/Details";
import Overview from "./components/Overview";
import "./movie-details.css";
import ProfilesDetails from "./components/ProfilesDetails";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, credits, voteForMovie] = useMovie(id || "");
  const recommendeMovies = useRecommendedMovies(id || "");

  if (!movie) return <></>;

  return (
    <Layout>
      <div className="row p-0 p-lg-5 d-flex justify-content-center mx-0 bg-medium">
        <div className="bg-dark rounded-3 col-12 col-lg-10 p-3 px-lg-5">
          <section className="border-bottom mb-3 mb-lg-5 pt-3 pb-5">
            <Details movie={movie} />
          </section>
          <section className="row mx-0 border-bottom mb-3 mb-lg-5 pb-5">
            <div className="bg-dark rounded-3 p-3 shadow-sm">
              <Overview
                voteForMovie={(value) => voteForMovie(value * 2)}
                movie={movie}
              />
            </div>
          </section>
          <section className="row mx-0 border-bottom pb-5">
            <div className="col-lg-6 p-3">
              <h3>Cast</h3>
              <div className="profiles px-3">
                <ProfilesDetails
                  profiles={credits.cast}
                  subheadingKey="character"
                />
              </div>
            </div>
            <div className="col-lg-6 p-3">
              <h3>Crew</h3>
              <div className="profiles px-3">
                <ProfilesDetails profiles={credits.crew} subheadingKey="job" />
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className="p-3 p-lg-5 bg-black">
        <h3 className="mb-3">Recomendados</h3>
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

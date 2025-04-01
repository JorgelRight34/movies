import { useParams } from "react-router";
import useMovie from "../../hooks/useMovie";
import useRecommendedMovies from "../../hooks/useRecommendedMovies";
import Layout from "../../layouts/Layout";
import MoviesListings from "../../components/MovieListings/MoviesListings";
import Overview from "../../components/MovieOverview/Overview";
import "./movie-details.css";
import ProfilesDetails from "../../components/ProfilesDetails/ProfilesDetails";
import CompaniesDetails from "../../components/CompaniesDetails/CompaniesDetails";
import MovieDetailsList from "../../components/MovieDetailsList/MovieDetails";

/**
 * Page component for the details of a single movie.
 *
 * @component
 * @returns {JSX.Element} The rendered movie details page component.
 */
const MovieDetails = () => {
  const { id } = useParams();
  const [movie, credits, voteForMovie] = useMovie(id || "");
  const recommendeMovies = useRecommendedMovies(id || "");

  // The value is multiplied by two because it's a rating out of 5 stars
  // And TMDB accepts a rating out of 10, so to normalize it, it's multiplied
  // by two, meaning that if it's 5 stars on the TMDB API it will receive 10.
  const handleVoteForMovie = (value: number) => voteForMovie(value * 2);

  if (!movie) return <></>;

  return (
    <Layout>
      <div className="row p-0 p-lg-5 d-flex justify-content-center mx-0 bg-medium">
        <div className="bg-dark rounded-3 col-12 col-lg-10 p-3 px-lg-5">
          {/* Movie details section */}
          <section className="border-bottom mb-3 mb-lg-5 pt-3 pb-5">
            <MovieDetailsList movie={movie} voteForMovie={handleVoteForMovie} />
          </section>
          {/* Movie overview section */}
          <section className="row mx-0 border-bottom mb-3 mb-lg-5 pb-5">
            <div className="bg-dark rounded-3 p-3 shadow-sm">
              <Overview voteForMovie={handleVoteForMovie} movie={movie} />
            </div>
          </section>
          {/* Movie cast, crew and production companies section */}
          <section className="border-bottom pb-5 mb-3 mb-lg-5">
            {/* Cast list */}
            <div className="p-3">
              <h3 className="border-accent-left mb-3">
                Cast ({credits.cast.length})
              </h3>
              <div className="px-3">
                <ProfilesDetails
                  profiles={credits.cast}
                  subheadingKey="character"
                />
              </div>
            </div>
            {/* Crew list */}
            <div className="p-3">
              <h3 className="border-accent-left mb-3">
                Crew ({credits.crew.length})
              </h3>
              <div className="px-3">
                <ProfilesDetails profiles={credits.crew} subheadingKey="job" />
              </div>
            </div>
            {/* Companies list */}
            {movie.production_companies && (
              <div className="p-3">
                <h3 className="border-accent-left mb-3">
                  Companies ({movie.production_companies?.length})
                </h3>
                <div className="px-3">
                  <CompaniesDetails companies={movie.production_companies} />
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
      {/* Recommended/similar movies */}
      <section className="p-3 p-lg-5 bg-black">
        <h3 className="border-accent-left mb-3">Recomendados</h3>
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

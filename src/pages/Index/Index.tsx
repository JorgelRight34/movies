import { useMemo } from "react";
import MovieBackdrop from "../../components/MovieBackdrop/MovieBackdrop";
import MoviesListings from "../../components/MovieListings/MoviesListings";
import useMovies from "../../hooks/useMovies";
import RatingStars from "../../components/RatingStars/RatingStars";
import BuyTicketsBtn from "../../components/BuyTicketsBtn";
import Layout from "../../layouts/Layout";

const Index = () => {
  const moviesPlayingNow = useMovies("now_playing");
  const moviesPopular = useMovies("popular");
  const moviesTopRated = useMovies("top_rated");
  const moviesUpComing = useMovies("upcoming");

  // Most popular movie that is playing right now
  const mostPopularMovieNow = useMemo(() => {
    if (moviesPlayingNow.length > 0)
      return moviesPlayingNow.reduce((prev, curr) =>
        prev.popularity > curr.popularity ? prev : curr
      );
    return null;
  }, [moviesPlayingNow]);

  return (
    <Layout>
      <div>
        {mostPopularMovieNow && (
          <MovieBackdrop movie={mostPopularMovieNow}>
            <div className="mb-5">
              <h1 className="mb-3">{mostPopularMovieNow.title}</h1>
              <span>{mostPopularMovieNow.release_date}</span>
            </div>
            <div className="mb-3">
              {mostPopularMovieNow && (
                <RatingStars rating={mostPopularMovieNow.vote_average} />
              )}
            </div>
            <p className="mb-5">{mostPopularMovieNow.overview}</p>
            <BuyTicketsBtn className="w-100" movie={mostPopularMovieNow} />
          </MovieBackdrop>
        )}
      </div>

      <div className="bg-dark">
        <section className="p-lg-5 border-bottom">
          <h3 className="mb-3">Playing Now</h3>
          <MoviesListings movies={moviesPlayingNow} />
        </section>
        <section className="p-lg-5 border-bottom">
          <h3 className="mb-3">Top Rated</h3>
          <MoviesListings movies={moviesTopRated} />
        </section>
        <section className="p-lg-5 border-bottom">
          <h3 className="mb-3">Popular</h3>
          <MoviesListings movies={moviesPopular} />
        </section>
        <section className="p-lg-5 bg-black">
          <h3 className="mb-3">Upcoming</h3>
          <MoviesListings movies={moviesUpComing} />
        </section>
      </div>
    </Layout>
  );
};

export default Index;

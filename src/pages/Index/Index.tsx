import { useMemo } from "react";
import MovieBackdrop from "../../components/MovieBackdrop/MovieBackdrop";
import MoviesListings from "../../components/MovieListings/MoviesListings";
import useMovies from "../../hooks/useMovies";
import RatingStars from "../../components/RatingStars/RatingStars";
import BuyTicketsBtn from "../../components/common/BuyTicketsBtn";
import Layout from "../../layouts/Layout";
import { NavLink } from "react-router";

const Index = () => {
  const [moviesPlayingNow] = useMovies("now_playing");
  const [moviesPopular] = useMovies("popular");
  const [moviesTopRated] = useMovies("top_rated");
  const [moviesUpComing] = useMovies("upcoming");

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
        {/* Render a widget for the most popular movie playing right now */}
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
            <BuyTicketsBtn
              label="Más Detalles"
              className="w-100 mb-3 mb-lg-0"
              movie={mostPopularMovieNow}
            />
          </MovieBackdrop>
        )}
      </div>

      {/* List of movies by category of streaming */}
      <div className="bg-dark">
        {/* Now Playing */}
        <section className="p-3 p-lg-5 border-bottom">
          <NavLink
            className="text-decoration-none text-white"
            to={`/movies/list/now_playing`}
          >
            <h3 className="mb-3">Reproduciendo Ahora</h3>
          </NavLink>
          <MoviesListings movies={moviesPlayingNow} />
        </section>
        {/* Top Rated */}
        <section className="p-3 p-lg-5 border-bottom">
          <NavLink
            className="text-decoration-none text-white"
            to={`/movies/list/top_rated`}
          >
            <h3 className="mb-3">Más Valorados</h3>
          </NavLink>
          <MoviesListings movies={moviesTopRated} />
        </section>
        {/* Popular */}
        <section className="p-3 p-lg-5 border-bottom">
          <NavLink
            className="text-decoration-none text-white"
            to={`/movies/list/popular`}
          >
            <h3 className="mb-3">Popular</h3>
          </NavLink>

          <MoviesListings movies={moviesPopular} />
        </section>
        {/* Upcoming */}
        <section className="p-3 p-lg-5 bg-black">
          <NavLink
            className="text-decoration-none text-white"
            to={`/movies/list/upcoming`}
          >
            <h3 className="mb-3">Próximamente</h3>
          </NavLink>
          <MoviesListings movies={moviesUpComing} />
        </section>
      </div>
    </Layout>
  );
};

export default Index;

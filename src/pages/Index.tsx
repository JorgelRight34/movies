import Layout from "../components/Layout";
import MovieBackdrop from "../components/MovieBackdrop";
import MoviesListings from "../components/MoviesListings";
import useMovies from "../hooks/useMovies";

const Index = () => {
  const moviesPlayingNow = useMovies("now_playing");
  const moviesPopular = useMovies("popular");
  const moviesTopRated = useMovies("top_rated");
  const moviesUpComing = useMovies("upcoming");

  return (
    <Layout>
      <div>
        {moviesPlayingNow.length > 0 && (
          <MovieBackdrop
            movie={moviesPlayingNow.reduce((prev, curr) =>
              prev.popularity > curr.popularity ? prev : curr
            )}
          />
        )}
      </div>

      <div className="bg-medium p-lg-5">
        <section>
          <h3 className="mb-5">Playing Now</h3>
          <MoviesListings movies={moviesPlayingNow} />
        </section>
      </div>
      <div className="bg-medium p-lg-5">
        <section>
          <h3 className="mb-5">Top Rated</h3>
          <MoviesListings movies={moviesTopRated} />
        </section>
      </div>
      <div className="bg-medium p-lg-5">
        <section>
          <h3 className="mb-5">Popular</h3>
          <MoviesListings movies={moviesPopular} />
        </section>
      </div>
      <div className="bg-medium p-lg-5">
        <section>
          <h3 className="mb-5">Upcoming</h3>
          <MoviesListings movies={moviesUpComing} />
        </section>
      </div>
    </Layout>
  );
};

export default Index;

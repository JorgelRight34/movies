import MovieCard from "../../components/MovieCard/MovieCard";
import useFavorites from "../../hooks/useFavorites";
import Layout from "../../layouts/Layout";
import "./favorites.css";

const Favorites = () => {
  const favoriteMovies = useFavorites();

  return (
    <Layout>
      <div className="bg-dark">
        <section className="p-lg-5">
          <h3 className="mb-3">Favorite Movies</h3>
          <div className="d-flex flex-wrap gap-3 py-5">
            {favoriteMovies.map((movie) => (
              <div className="col-lg-2 favorite-movie">
                <MovieCard key={movie.id} movie={movie} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Favorites;

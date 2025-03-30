import MovieCard from "../../components/MovieCard/MovieCard";
import useFavorites from "../../hooks/useFavorites";
import MovieListLayout from "../../layouts/MovieListLayout";
import "./favorites.css";

const Favorites = () => {
  const [favoriteMovies, , goToNextPage, goToPrevPage] = useFavorites();

  return (
    <MovieListLayout
      title="Favorite Movies"
      goToNextPage={goToNextPage}
      goToPrevPage={goToPrevPage}
    >
      {favoriteMovies.map((movie) => (
        <div className="col-lg-2 movie-card-container">
          <MovieCard
            showAddToFavoriteBtn={false}
            key={movie.id}
            movie={movie}
          />
        </div>
      ))}
    </MovieListLayout>
  );
};

export default Favorites;

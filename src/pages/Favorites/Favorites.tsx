import MovieCard from "../../components/MovieCard/MovieCard";
import useFavorites from "../../hooks/useFavorites";
import MovieListLayout from "../../layouts/MovieListLayout";

/**
 * Page component for favorite movies of current user.
 *
 * @component
 * @returns {JSX.Element} The rendered favorite movies page component.
 */
const Favorites = () => {
  const [favoriteMovies, , goToNextPage, goToPrevPage] = useFavorites();

  return (
    <MovieListLayout
      title="Películas Favoritas"
      goToNextPage={goToNextPage}
      goToPrevPage={goToPrevPage}
    >
      {favoriteMovies.map((movie) => (
        <div key={movie.id} className="col-lg-2 movie-card-container mb-3">
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

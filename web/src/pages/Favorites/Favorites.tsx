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
  const {
    favoriteMovies,
    page,
    totalPages,
    handleNextPage,
    handlePreviousPage,
  } = useFavorites();

  return (
    <MovieListLayout
      title="Películas Favoritas"
      page={page}
      totalPages={totalPages}
      goToNextPage={handleNextPage}
      goToPrevPage={handlePreviousPage}
    >
      {favoriteMovies.map((movie) => (
        <div
          key={movie.id}
          className="col-10 col-lg-2 movie-card-container mb-lg-5"
        >
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

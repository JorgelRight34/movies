import PaginationControls from "@/components/PaginationControls";
import MovieCard from "@/components/movie/MovieCard";
import MoviesList from "@/components/movie/MoviesList";
import TitleHeading from "@/components/ui/TitleHeading";
import { Box } from "@/components/ui/box";
import useFavorites from "@/hooks/useFavorites";
import { useEffect, useRef } from "react";
import { FlatList, ScrollView } from "react-native";

/**
 * Page component for favorite movies of current user.
 *
 * @component
 * @returns {JSX.Element} The rendered favorite movies page component.
 */
const Favorites = () => {
  const { favoriteMovies, page, totalPages, goToNextPage, goToPrevPage } =
    useFavorites();
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    // Go to the top of the page each time user navigates through pages
    scrollViewRef.current?.scrollTo({ y: 0, animated: false });
  }, [page]);

  return (
    <ScrollView>
      <Box className="p-3">
        <TitleHeading>Favoritos</TitleHeading>
      </Box>
      <MoviesList movies={favoriteMovies} horizontal={true} />
      <Box>
        {favoriteMovies.length > 0 && (
          <PaginationControls
            page={page}
            totalPages={totalPages}
            next={goToNextPage}
            back={goToPrevPage}
          />
        )}
      </Box>
    </ScrollView>
  );
};

export default Favorites;

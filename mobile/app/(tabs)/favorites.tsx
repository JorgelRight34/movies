import MovieCard from "@/components/movie/MovieCard";
import TitleHeading from "@/components/ui/TitleHeading";
import { Box } from "@/components/ui/box";
import useFavorites from "@/hooks/useFavorites";
import { FlatList, ScrollView } from "react-native";

/**
 * Page component for favorite movies of current user.
 *
 * @component
 * @returns {JSX.Element} The rendered favorite movies page component.
 */
const Favorites = () => {
  const { favoriteMovies } = useFavorites();

  return (
    <ScrollView>
      <Box className="p-3">
        <TitleHeading>Favoritos</TitleHeading>
      </Box>
      <Box className="flex-1 items-center">
        <FlatList
          data={favoriteMovies}
          renderItem={({ item }) => (
            <MovieCard showAddToFavoriteBtn={false} movie={item} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </Box>
    </ScrollView>
  );
};

export default Favorites;

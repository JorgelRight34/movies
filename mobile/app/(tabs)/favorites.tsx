import MovieCard from "@/components/MovieCard";
import TitleHeading from "@/components/TitleHeading";
import { Box } from "@/components/ui/box";
import useFavorites from "@/hooks/useFavorites";
import { FlatList, ScrollView } from "react-native";

const Favorites = () => {
  const { favoriteMovies } = useFavorites();

  return (
    <ScrollView>
      <Box className="p-3">
        <TitleHeading>Favoritos</TitleHeading>
      </Box>
      <FlatList
        data={favoriteMovies}
        renderItem={({ item }) => <MovieCard movie={item} />}
      />
    </ScrollView>
  );
};

export default Favorites;

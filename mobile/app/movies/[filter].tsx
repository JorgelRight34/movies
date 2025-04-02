import MovieCard from "@/components/movie/MovieCard";
import PaginationControls from "@/components/PaginationControls";
import TitleHeading from "@/components/ui/TitleHeading";
import { Box } from "@/components/ui/box";
import useMovies from "@/hooks/useMovies";
import { MovieFilter } from "@/models/movieFilter";
import { Stack } from "expo-router";
import { useSearchParams } from "expo-router/build/hooks";
import { useMemo } from "react";
import { FlatList, ScrollView } from "react-native";

/**
 * Page component for search movies result.
 *
 * @component
 * @returns {JSX.Element} The rendered search results page component.
 */
const Movies = () => {
  const params = useSearchParams();
  const filter = params.get("filter");
  const { movies, page, totalPages, goToNextPage, goToPrevPage } = useMovies(
    (filter as MovieFilter) || "now_playing"
  );

  const title = useMemo(() => {
    switch (filter) {
      case "now_playing":
        return "En Cartelera";
      case "top_rated":
        return "Más Valorados";
      case "popular":
        return "Popular";
      case "upcoming":
        return "Próximamente";
      default:
        return "En Cartelera";
    }
  }, [filter]);

  if (!movies) return <Stack.Screen options={{ headerTitle: title }} />;

  return (
    <ScrollView>
      <Stack.Screen options={{ headerTitle: title }} />
      <Box className="p-3">
        <TitleHeading>Películas</TitleHeading>
        <FlatList
          data={movies}
          renderItem={({ item }) => <MovieCard movie={item} />}
        />
        <PaginationControls
          page={page}
          totalPages={totalPages}
          next={goToNextPage}
          back={goToPrevPage}
        />
      </Box>
    </ScrollView>
  );
};

export default Movies;

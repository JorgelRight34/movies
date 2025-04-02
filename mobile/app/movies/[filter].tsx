import MovieCard from "@/components/movie/MovieCard";
import PaginationControls from "@/components/PaginationControls";
import TitleHeading from "@/components/ui/TitleHeading";
import { Box } from "@/components/ui/box";
import useMovies from "@/hooks/useMovies";
import { MovieFilter } from "@/models/movieFilter";
import { Stack } from "expo-router";
import { useSearchParams } from "expo-router/build/hooks";
import { useEffect, useMemo, useRef } from "react";
import { FlatList, SafeAreaView, ScrollView } from "react-native";
import MoviesList from "@/components/movie/MoviesList";
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
  const flatListRef = useRef<FlatList>(null);

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

  useEffect(() => {
    // Go to the top of the page each time user navigates through pages
    flatListRef.current?.scrollToIndex({ index: 0, animated: false });
  }, [page]);

  if (!movies) return <Stack.Screen options={{ headerTitle: title }} />;

  return (
    <ScrollView>
      <Stack.Screen options={{ headerTitle: title }} />
      <Box className="p-3">
        <TitleHeading>{title}</TitleHeading>
      </Box>
      <MoviesList movies={movies} horizontal={true} />

      <Box>
        {movies.length > 0 && (
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

export default Movies;

import MoviesList from "@/components/movie/MoviesList";
import { Box } from "@/components/ui/box";
import { Input, InputField } from "@/components/ui/input";
import useMovies from "@/hooks/useMovies";
import { useRef } from "react";

/**
 * Component that provides a search page to search for movies.
 *
 * This component renders a search input field that when its text change
 * it fetches every X seconds new movies that match the query (text).
 *
 * @component
 * @returns {JSX.Element} A search input page that renders movies that matches the search query.
 */
const SearchPage = () => {
  const { movies, fetchMovies } = useMovies("search");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleOnChange = (text: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      fetchMovies(text);
    }, 500);
  };

  return (
    <Box className="p-3">
      <Input
        className="mb-3"
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField
          className="text-white"
          placeholder="¿Qué película estás buscando?"
          onChangeText={handleOnChange}
        />
      </Input>
      {movies.length > 0 && <MoviesList heading="Resultados" movies={movies} />}
    </Box>
  );
};

export default SearchPage;

import MoviesList from "@/components/movie/MoviesList";
import { Box } from "@/components/ui/box";
import useMovies from "@/hooks/useMovies";
import { ScrollView } from "react-native";

const IndexScreen = () => {
  const { movies: moviesPlayingNow } = useMovies("now_playing");
  const { movies: moviesPopular } = useMovies("popular");
  const { movies: moviesTopRated } = useMovies("top_rated");
  const { movies: moviesUpComing } = useMovies("upcoming");

  return (
    <ScrollView>
      <Box className="p-3">
        {/* Movies playing now */}
        <Box className="border-b mb-5">
          <MoviesList
            fullListPath="/movies/now_playing"
            heading="Reproduciendo Ahora"
            movies={moviesPlayingNow}
          />
        </Box>
        {/* Popular movies */}
        <Box className="border-b mb-5">
          <MoviesList
            fullListPath="/movies/popular"
            heading="Popular"
            movies={moviesPopular}
          />
        </Box>
        {/* Top rated movies */}
        <Box className="border-b mb-5">
          <MoviesList
            fullListPath="/movies/top_rated"
            heading="Popular"
            movies={moviesTopRated}
          />
        </Box>
        {/* Upcoming movies */}
        <Box className="border-b mb-5">
          <MoviesList
            fullListPath="/movies/upcoming"
            heading="Popular"
            movies={moviesUpComing}
          />
        </Box>
      </Box>
    </ScrollView>
  );
};

export default IndexScreen;

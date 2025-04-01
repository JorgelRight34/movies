import MovieCard from "@/components/MovieCard";
import { Text, View } from "@/components/Themed";
import useMovies from "@/hooks/useMovies";
import { ACCESS_TOKEN } from "@/lib/constants";

const HomeScreen = () => {
  const { movies: moviesPlayingNow } = useMovies("now_playing");

  return (
    <View>
      {moviesPlayingNow.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </View>
  );
};

export default HomeScreen;

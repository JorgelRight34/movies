import MovieCredits from "@/components/movie/MovieCredits";
import MovieDetails from "@/components/movie/MovieDetails";
import MovieOverview from "@/components/movie/MovieOverview";
import MoviesList from "@/components/MoviesList";
import { Box } from "@/components/ui/box";
import useMovie from "@/hooks/useMovie";
import useRecommendedMovies from "@/hooks/useRecommendedMovies";
import { Stack } from "expo-router";
import { useSearchParams } from "expo-router/build/hooks";
import { ScrollView } from "react-native";

const MovieDetailsScreen = () => {
  const params = useSearchParams();
  const id = params.get("id");
  const { movie, credits, voteForMovie } = useMovie(id || "");
  const recommendedMovies = useRecommendedMovies(id || "");

  if (!movie)
    return (
      <Stack.Screen
        options={{
          headerTitle: "",
        }}
      />
    );

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: movie?.title
            ? movie.title.length > 25
              ? `${movie.title.substring(0, 25)}...`
              : movie.title
            : "",
        }}
      />
      <ScrollView>
        <Box className="mb-5">
          <MovieDetails movie={movie} voteForMovie={voteForMovie} />
        </Box>
        <Box className="mb-5">
          <MovieOverview movie={movie} voteForMovie={voteForMovie} />
        </Box>
        {credits && (
          <Box className="mb-5">
            <MovieCredits
              credits={{
                ...credits,
                companies: movie.production_companies || [],
              }}
            />
          </Box>
        )}
        <Box className="p-3 mb-5">
          {recommendedMovies && (
            <MoviesList
              movies={recommendedMovies}
              heading="Recommended Movies"
            />
          )}
        </Box>
      </ScrollView>
    </>
  );
};

export default MovieDetailsScreen;

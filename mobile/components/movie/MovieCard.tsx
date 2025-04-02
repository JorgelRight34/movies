import { getFullMovieImagePath } from "@/lib/utils";
import { Movie } from "@/models/movie";
import { useRouter } from "expo-router";
import { Card } from "../ui/card";
import { Image } from "../ui/image";
import { Heading } from "../ui/heading";
import { Box } from "../ui/box";
import { HStack } from "../ui/hstack";
import { Text } from "../ui/text";
import theme from "@/styles/theme";
import AccentButton from "../ui/AccentButton";
import AddMovieToFavoritesBtn from "./AddMovieToFavoritesBtn";

interface MovieCardProps {
  movie: Movie;
  showAddToFavoriteBtn?: boolean;
}

/**
 * A card component for displaying the movie details.
 *
 * @component
 * @param {Object} props.props - The properties passed to the component.
 * @param {Movie} props.movie - The movie associated with the backdrop.
 * @param {boolean} [showAddToFavoriteBtn] - Show an icon with a heart to add movie to favorites.
 * @returns {JSX.Element} The rendered card backdrop component.
 */
const MovieCard = ({ movie, showAddToFavoriteBtn = true }: MovieCardProps) => {
  const router = useRouter();

  return (
    <Card
      className="rounded-lg border p-0 w-[250px] m-3"
      style={{ backgroundColor: theme.colors.card }}
    >
      <Box className="relative">
        <Image
          source={{ uri: getFullMovieImagePath(movie.poster_path) }}
          className="rounded-t-lg w-full h-[240px] object-cover"
          alt={movie.title}
        />
        {showAddToFavoriteBtn && (
          <Box className="absolute top-[10px] right-[10px] z-10">
            <AddMovieToFavoritesBtn movieId={movie.id} />
          </Box>
        )}
      </Box>
      <Box className="p-3">
        <Heading isTruncated size="md" className="text-white w-50 mb-4">
          {/* This solutions is not the right one but is provisional */}
          {movie.title.length > 22
            ? `${movie.title.slice(0, 22)}...`
            : movie.title}
        </Heading>
        <HStack className="mb-3">
          <Text className="text-sm font-normal text-white">
            {movie.release_date}
          </Text>
          <Text className="text-sm font-normal text-white ms-auto">
            ★ {movie.vote_average.toFixed(1)}/10
          </Text>
        </HStack>
        <AccentButton onPress={() => router.push(`/movie/${movie.id}`)}>
          Más Detalles
        </AccentButton>
      </Box>
    </Card>
  );
};

export default MovieCard;

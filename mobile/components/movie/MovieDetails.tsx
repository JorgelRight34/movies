import { Movie } from "@/models/movie";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Rating } from "react-native-ratings";
import { getFullMovieImagePath } from "@/lib/utils";
import { Button, ButtonText } from "../ui/button";
import useAddMovieToFavorites from "@/hooks/useAddMovieToFavorites";
import theme from "@/styles/theme";

interface MovieDetailsProps {
  movie: Movie;
  voteForMovie: (rating: number) => void;
}

/**
 * A details component for displaying the movie details.
 *
 * @component
 * @param {Object} props.props - The properties passed to the component.
 * @param {Movie} props.movie - The movie associated with the details.
 * @param {(value: number) => void} [props.voteForMovie] - Callback function to handle the voting process for the movie.
 * @returns {JSX.Element} The rendered movie details component.
 */
const MovieDetails = ({ movie, voteForMovie }: MovieDetailsProps) => {
  const addToMovieToFavorites = useAddMovieToFavorites();

  return (
    <>
      <Box className="p-3">
        {/* Header, image and quick info */}
        <Image
          source={{
            uri: getFullMovieImagePath(movie.poster_path),
          }}
          style={{ resizeMode: "contain", width: "100%" }}
          className="rounded-t-lg h-[600px] w-full aspect-auto object-contain bg-gray-300 mb-3"
          alt={movie.title}
        />
        <Heading className="text-white">{movie.title}</Heading>
        <HStack className="mb-3">
          <Text className="text-sm font-normal text-white">
            {movie.release_date}
          </Text>
          <Text className="text-sm font-normal text-white ms-auto">
            {movie.vote_average.toFixed(1)}/10
          </Text>
        </HStack>
      </Box>
      <VStack className="p-3">
        {/* Movie language */}
        <Box className="p-3 mb-3 border-b flex-row items-baseline">
          <Text className="text-sm text-white font-bold">Lenguaje</Text>
          <Text className="text-sm text-white font-normal ms-auto">
            {movie.original_language.toUpperCase()}
          </Text>
        </Box>
        {/* Runtime */}
        <Box className="p-3 mb-3 border-b flex-row items-baseline">
          <Text className="text-sm text-white font-bold">Duración</Text>
          <Text className="text-sm text-white font-normal ms-auto">
            {movie.runtime} mins
          </Text>
        </Box>
        {/* Runtime */}
        <Box className="p-3 mb-3 border-b flex-row items-baseline">
          <Text className="text-sm text-white font-bold">Valoración</Text>
          <Text className="text-sm text-white font-normal ms-auto">
            ★ {movie.vote_average.toFixed(1)}/10
          </Text>
        </Box>
        {/* Status */}
        <Box className="p-3 mb-3 border-b flex-row items-baseline">
          <Text className="text-sm text-white font-bold">Estado</Text>
          <Text className="text-sm text-white font-normal ms-auto">
            {movie.status}
          </Text>
        </Box>
      </VStack>
      {/* Buttons */}
      <VStack className="p-3">
        <Button
          className="mb-3"
          style={{ backgroundColor: theme.colors.primary }}
        >
          <ButtonText className="text-white">Comprar Tickets</ButtonText>
        </Button>
        <Button onPress={() => addToMovieToFavorites(movie.id)}>
          <ButtonText className="text-white">Añadir a Favoritos</ButtonText>
        </Button>
      </VStack>
      {/* Rating Section */}
      <Box className="p-3">
        {/* Added margin-top */}
        <Text className="text-lg font-bold text-white mb-4">
          Deja tu calificación
        </Text>
        <Rating
          tintColor="black"
          ratingBackgroundColor="black"
          imageSize={30}
          startingValue={movie.vote_average / 2}
          onFinishRating={(rating: number) => voteForMovie(rating * 2)}
        />
      </Box>
    </>
  );
};

export default MovieDetails;

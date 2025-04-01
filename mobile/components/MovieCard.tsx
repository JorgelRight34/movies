import { getFullMovieImagePath } from "@/lib/utils";
import { Movie } from "@/models/movie";
import { useRouter } from "expo-router";
import { Card } from "./ui/card";
import { Image } from "./ui/image";
import { Heading } from "./ui/heading";
import { Box } from "./ui/box";
import { HStack } from "./ui/hstack";
import { Button, ButtonText } from "./ui/button";
import { Text } from "./ui/text";
import theme from "@/styles/theme";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const router = useRouter();

  return (
    <Card
      className="rounded-lg border p-0 max-w-[360px] m-3"
      style={{ backgroundColor: theme.colors.card }}
    >
      <Image
        source={{
          uri: getFullMovieImagePath(movie.poster_path),
        }}
        className="rounded-t-lg h-[240px] w-full aspect-[263/240]"
        alt={movie.title}
      />
      <Box className="p-3">
        <Heading size="md" className="text-white mb-4">
          {movie.title}
        </Heading>
        <HStack className="mb-3">
          <Text className="text-sm font-normal text-white">
            {movie.release_date}
          </Text>
          <Text className="text-sm font-normal text-white ms-auto">
            ★ {movie.vote_average.toFixed(1)}/10
          </Text>
        </HStack>
        <Button
          style={{ backgroundColor: theme.colors.primary }}
          onPress={() => router.push(`/movie/${movie.id}`)}
        >
          <ButtonText>Más Detalles</ButtonText>
        </Button>
      </Box>
    </Card>
  );
};

export default MovieCard;

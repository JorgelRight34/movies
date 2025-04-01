import { Movie } from "@/models/movie";
import { Box } from "../ui/box";
import { Text } from "../ui/text";
import YoutubePlayer from "react-native-youtube-iframe";
import { useMemo } from "react";
import TitleHeading from "../TitleHeading";

interface MovieOverviewProps {
  movie: Movie;
  voteForMovie: (rating: number) => void;
}

const MovieOverview = ({ movie, voteForMovie }: MovieOverviewProps) => {
  const trailer = useMemo(
    () =>
      movie.videos?.results.find(
        (video) => video.type === "Trailer" && video.official
      ),
    [movie]
  );

  return (
    <Box className="p-3">
      <TitleHeading>Overview</TitleHeading>
      <Text className="text-white mb-3">{movie.overview}</Text>
      {trailer && (
        <YoutubePlayer
          height={170}
          play={true}
          videoId={trailer?.key}
          webViewStyle={{ margin: 0 }}
        />
      )}
    </Box>
  );
};

export default MovieOverview;

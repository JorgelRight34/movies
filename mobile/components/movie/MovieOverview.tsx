import { Movie } from "@/models/movie";
import { Box } from "../ui/box";
import { Text } from "../ui/text";
import YoutubePlayer from "react-native-youtube-iframe";
import { useMemo } from "react";
import TitleHeading from "../ui/TitleHeading";

interface MovieOverviewProps {
  movie: Movie;
  voteForMovie: (rating: number) => void;
}

/**
 * An overview displaying the movie important details such as title, tagline, rating, trailer and more.
 *
 * @component
 * @param {Object} props.props - The properties passed to the component.
 * @param {Movie} props.movie - The movie associated with the overview.
 * @returns {JSX.Element} The rendered movie overview component.
 */
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
      <TitleHeading>Panorama</TitleHeading>
      <Text className="text-white mb-3">{movie.overview}</Text>
      {trailer && (
        <YoutubePlayer
          height={230}
          play={true}
          videoId={trailer?.key}
          webViewStyle={{ margin: 0 }}
        />
      )}
    </Box>
  );
};

export default MovieOverview;

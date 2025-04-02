import { FlatList } from "react-native";
import MovieCard from "./MovieCard";
import { Movie } from "@/models/movie";
import { HStack } from "../ui/hstack";
import { Link, RelativePathString } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import TitleHeading from "../ui/TitleHeading";
import MovieCardPlaceholder from "./MovieCardPlaceholder";

interface MoviesListProps {
  heading: string;
  movies: Movie[];
  fullListPath?: string;
}

/**
 * Component for displaying a list of movies like a gallery with controls.
 *
 * @component
 * @param {Object} props.props - The properties passed to the component.
 * @param {Object} props.movies - The movies to be displayed.
 * @param {number} [props.heading] - Heading of the list
 * @param {number} [props.fullListPath] - Path to all the movies related to the heading
 * @returns {JSX.Element} The rendered movies list component.
 */
const MoviesList = ({ fullListPath, heading, movies }: MoviesListProps) => {
  return (
    <>
      <HStack
        className="mb-3"
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TitleHeading className="mb-0">{heading}</TitleHeading>
        {fullListPath && (
          <Link href={fullListPath as RelativePathString}>
            <FontAwesome
              name="arrow-circle-o-right"
              color={"#fff"}
              size={28}
              style={{ marginBottom: -3 }}
            />
            ;
          </Link>
        )}
      </HStack>
      {movies.length > 0 ? (
        <FlatList
          data={movies}
          renderItem={({ item }) => <MovieCard movie={item} />}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <FlatList
          data={Array(6).fill(null)}
          renderItem={() => <MovieCardPlaceholder />}
          keyExtractor={(item) => item?.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </>
  );
};

export default MoviesList;

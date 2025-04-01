import { FlatList } from "react-native";
import MovieCard from "./MovieCard";
import { Movie } from "@/models/movie";
import { HStack } from "./ui/hstack";
import { Link, RelativePathString } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import TitleHeading from "./TitleHeading";

interface MoviesListProps {
  heading: string;
  movies: Movie[];
  fullListPath?: string;
}

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
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard movie={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
      />
    </>
  );
};

export default MoviesList;

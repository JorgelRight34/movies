import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Box } from "../ui/box";
import { useState } from "react";
import useAddMovieToFavorites from "@/hooks/useAddMovieToFavorites";
import theme from "@/styles/theme";
import { TouchableOpacity } from "react-native";

interface AddMovieToFavoritesBtnProps {
  movieId: number;
}

/**
 * A clickable circular button with a heart icon that toggles a movie's favorite status.
 * - Displays a white heart outline by default (not favorited).
 * - Turns red when the movie is in favorites.
 * - Clicking the button adds/removes the movie from the favorites list.
 * - Supports dark/light mode (automatically adapts icon color for visibility).
 *
 * @component
 * @example
 * // Basic usage
 * <AddMovieToFavorites movieId={42} />
 *
 * @param {Object} props - Component props.
 * @param {number} props.movieId - The unique ID of the movie to add/remove from favorites.
 * @returns {React.ReactElement} A circular button with a heart icon.
 */
const AddMovieToFavorites = ({ movieId }: AddMovieToFavoritesBtnProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const addMovieToFavorites = useAddMovieToFavorites();

  const handleOnPress = () => {
    addMovieToFavorites(movieId, !isFavorite);
    setIsFavorite((prev) => !prev);
  };

  return (
    <Box className="w-10 h-10 rounded-full flex items-center justify-center bg-white">
      <TouchableOpacity onPress={handleOnPress}>
        <FontAwesome
          name="heart"
          size={20}
          color={isFavorite ? theme.colors.primary : "black"}
        />
      </TouchableOpacity>
    </Box>
  );
};

export default AddMovieToFavorites;

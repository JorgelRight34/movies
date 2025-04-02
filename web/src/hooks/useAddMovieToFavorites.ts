import { toast } from "react-toastify";
import api from "../data/api";
import { ACCOUNT_ID } from "../lib/constants";

/**
 * Hook to add a movie to the favorites list associated with the current session ID.
 *
 * @returns {() => void} A function that adds a movie to the favorites list.
 *
 * @example
 * const addMovieToFavorites = useAddMovieToFavorites();
 * addMovieToFavorites();
 */
const useAddMovieToFavorites = () => {
  const addMovieToFavorites = async (id: number, favorite = true) => {
    const response = await api.post(`account/${ACCOUNT_ID}/favorite`, {
      media_type: "movie",
      media_id: id,
      favorite: favorite,
    });

    if (response.data.success) {
      toast.success(
        favorite
          ? "¡Película AGREGADA a favoritos!"
          : "¡Película ELIMINADA de favoritos!"
      );
    }
  };

  return addMovieToFavorites;
};

export default useAddMovieToFavorites;

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
    const addMovieToFavorites = async (id: number) => {
        const response = await api.post(`account/${ACCOUNT_ID || null}/favorite`, {
            media_type: "movie",
            media_id: id,
            favorite: true,
        });

        if (response.data.success)
            toast.success(`Movie added to favorites!`);
    };

    return addMovieToFavorites;
};

export default useAddMovieToFavorites;

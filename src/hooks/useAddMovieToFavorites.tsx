import { toast } from "react-toastify";
import api from "../data/api";

const useAddMovieToFavorites = () => {
  const addMovieToFavorites = async (id: number) => {
    const response = await api.post(`account/null/favorite`, {
      media_type: "movie",
      media_id: id,
      favorite: true,
    });

    if (response.data.status_code === 12)
      toast.success(`Movie added to favorites!`);
  };

  return addMovieToFavorites;
};

export default useAddMovieToFavorites;

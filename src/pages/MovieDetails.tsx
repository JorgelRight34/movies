import { useParams } from "react-router";
import useMovie from "../hooks/useMovie";
import useRecommendedMovies from "../hooks/useRecommendedMovies";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, voteForMovie] = useMovie(id || "");
  const [recommendeMovies, setRecommendedMovies] = useRecommendedMovies(id);

  return <div></div>;
};

export default MovieDetails;

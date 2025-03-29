import Layout from "../components/Layout";
import useFavorites from "../hooks/useFavorites";

const Favorites = () => {
  const { favoriteMovies } = useFavorites();

  return <Layout>hey</Layout>;
};

export default Favorites;

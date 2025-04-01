import { Text, View } from "@/components/Themed";
import useFavorites from "@/hooks/useFavorites";

const Favorites = () => {
  const [favorites] = useFavorites();

  return (
    <View>
      {favorites.map((movie) => (
        <Text key={movie.id}>{movie.title}</Text>
      ))}
    </View>
  );
};

export default Favorites;

import Layout from "../components/Layout";
import MovieCard from "../components/MovieCard";
import useMovies from "../hooks/useMovies";

const Index = () => {
  const movies = useMovies();

  return (
    <Layout>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Layout>
  );
};

export default Index;

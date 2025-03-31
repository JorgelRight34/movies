import { KeyboardEventHandler, useState } from "react";
import { useNavigate } from "react-router";

const SearchMovieInput = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleOnSubmit: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") navigate(`/movies/search?q=${query}`);
  };

  return (
    <input
      type="search"
      placeholder="¿Qué película estás buscando?"
      className="search-movie-input rounded-top p-2"
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={handleOnSubmit}
    />
  );
};

export default SearchMovieInput;

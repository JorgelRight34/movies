import { KeyboardEventHandler, useState } from "react";
import { useNavigate } from "react-router";

/**
 * Component that provides a search input to search for movies.
 *
 * This component renders a search input field that redirects the user to the
 * `/movies/search` page with the query as a query parameter when the user
 * presses the Enter key.
 *
 * @component
 * @returns {JSX.Element} A search input field that triggers a redirect to the
 * search results page with the entered query as a parameter.
 */
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

import { KeyboardEventHandler, useRef, useState } from "react";
import { useNavigate } from "react-router";
import "./search-movie-input.css";

/**
 * Component that provides a search input to search for movies.
 *
 * This component renders a search input field that redirects the user to the
 * `/movies/search` page with the query as a query parameter when the user
 * presses the Enter key.
 *
 * On small devices instead of an input it renders a search icon, when the icon
 * is clicked a modal is shown with a input for searching, above the input there's
 * a button to close the form, as the user types on the form it's redirected to
 * /movies/search with the updated query, fetching new data each time query changes,
 * when the go back button is clicked. If the user is not on the home page already, it
 * redirects the user to the home page and closes the form, if user already on home page it
 * only closes the search form.
 *
 * @component
 * @returns {JSX.Element} A search input field that triggers a redirect to the
 * search results page with the entered query as a parameter.
 */
const SearchMovieInput = () => {
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const searchResultsPath = "/movies/search";
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleOnSubmit: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (
      event.key === "Enter" ||
      window.location.pathname === searchResultsPath
    ) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      } else if (query) {
        navigate(`${searchResultsPath}?q=${query}`);
      }
      timeoutRef.current = setTimeout(() => {
        navigate(`${searchResultsPath}?q=${query}`, { replace: true });
      }, 500);
    }
  };

  return (
    <>
      {/* Input element for large screens */}
      <input
        type="search"
        placeholder="¿Qué película estás buscando?"
        className="d-none d-lg-block search-movie-input rounded-top p-2"
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleOnSubmit}
      />
      {/* Icon toggle element that opens a modal for search on small screens */}
      <span
        className="d-lg-none fs-1 material-icons-outlined"
        onClick={() => setShowModal(true)}
      >
        search
      </span>
      {/* Search form modal */}
      <div
        className={`search-form-overlay d-lg-none ${
          !showModal ? "d-none" : ""
        }`}
      >
        {/* Search form */}
        <form className="bg-black p-3" onSubmit={(e) => e.preventDefault()}>
          {/* Go back arrow button, it takes you to home page if not already there */}
          <span
            className="d-lg-none fs-1 material-icons-outlined mb-3"
            onClick={() => setShowModal(false)}
          >
            arrow_back
          </span>
          {/* Input element for small screens */}
          <input
            type="search"
            placeholder="¿Qué película estás buscando?"
            className="search-movie-input rounded-top w-100 p-2"
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleOnSubmit}
          />
        </form>
      </div>
    </>
  );
};

export default SearchMovieInput;

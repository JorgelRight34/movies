import { KeyboardEventHandler, useState } from "react";
import { useNavigate } from "react-router";
import "./search-movie-input.css";

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
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleOnSubmit: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") console.log("replace true");
    navigate(`/movies/search?q=${query}`);
  };

  const toggleSearchForm = () => {
    setShowModal((prev) => !prev);
  };

  const goBack = () => {
    setShowModal(false);
    navigate("/");
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
        onClick={toggleSearchForm}
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
            onClick={goBack}
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

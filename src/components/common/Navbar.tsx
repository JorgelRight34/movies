import { NavLink } from "react-router";
import LoginBtn from "./LoginBtn";
import { handleTMDBAuth } from "../../data/tmdbAuth";
import SearchMovieInput from "../SearchMovieInput/SearchMovieInput";

/**
 * The navbar for the whole app. On large screens a navbar at the top is visible,
 * on small screens an extra navbar is shown at the bottom of the page
 *
 * @component
 */
const Navbar = () => {
  return (
    <>
      <header className="sticky-top">
        <nav className="top-navbar navbar bg-black p-3 px-lg-5 shadow-sm">
          <div>
            <NavLink className="d-flex align-items-center" to={`/`}>
              <img src="/logo.png" className="navbar-brand me-2" />
              <h3 className="mb-0">Movies Inc</h3>
            </NavLink>
          </div>
          <div className="ms-auto">
            <SearchMovieInput />
          </div>
          <div className="d-none d-lg-flex align-items-center flex-wrap gap-5 ms-auto">
            <NavLink to="/">Películas</NavLink>
            <NavLink to="/favorites">Favoritos</NavLink>
            <LoginBtn />
          </div>
        </nav>
      </header>
      <div
        className="d-block d-lg-none position-absolute w-100"
        style={{ bottom: -0.25 }}
      >
        <nav className="bottom-navbar navbar bg-black p-2 shadow-sm w-100">
          <div className="d-flex justify-content-center flex-wrap gap-5 w-100">
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-accent-bottom" : ""
              }
              to={`/`}
            >
              <span className="material-icons-outlined fs-1">home</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-accent-bottom" : ""
              }
              to={`/favorites`}
            >
              <span className="material-icons-outlined fs-1">favorite</span>
            </NavLink>
            <span
              className="material-icons-outlined fs-1"
              onClick={handleTMDBAuth}
            >
              login
            </span>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

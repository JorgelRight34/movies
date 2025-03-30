import { NavLink } from "react-router";
import LoginBtn from "./LoginBtn";
import { handleTMDBAuth } from "../../data/tmdbAuth";

const Navbar = () => {
  return (
    <>
      <header className="d-none d-lg-block">
        <nav className="navbar bg-black p-lg-3 px-lg-5 shadow-sm">
          <div>
            <NavLink to={`/`}>
              <h3>My Cinemas</h3>
            </NavLink>
          </div>
          <div className="d-flex align-items-center flex-wrap gap-5 ms-auto">
            <NavLink to="/">Películas</NavLink>
            <NavLink to="/favorites">Favoritos</NavLink>
            <LoginBtn />
          </div>
        </nav>
      </header>
      <header
        className="d-block d-lg-none position-absolute w-100"
        style={{ bottom: -0.25 }}
      >
        <nav className="navbar bg-black p-2 shadow-sm w-100">
          <div className="d-flex justify-content-center flex-wrap gap-5 w-100">
            <NavLink
              className={({ isActive }) => (isActive ? "border-bottom" : "")}
              to={`/`}
            >
              <span className="material-icons-outlined fs-1">home</span>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "border-bottom" : "")}
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
      </header>
    </>
  );
};

export default Navbar;

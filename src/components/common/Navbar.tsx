import { NavLink } from "react-router";
import LoginBtn from "./LoginBtn";

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
            <NavLink to="/">Movies</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
            <LoginBtn />
          </div>
        </nav>
      </header>
      <header className="d-block d-lg-none position-absolute bottom-0 w-100">
        <nav className="navbar bg-black p-lg-3 px-lg-5 shadow-sm w-100">
          <div className="d-flex justify-content-center flex-wrap gap-5 w-100">
            <NavLink to={`/`}>
              <span className="material-icons-outlined me-2">movie</span>
            </NavLink>
            <NavLink to={`/`}>
              <span className="material-icons-outlined">home</span>
            </NavLink>
            <NavLink to={`/favorites`}>
              <span className="material-icons-outlined">favorite</span>
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

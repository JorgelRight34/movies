import { NavLink } from "react-router";
import LoginBtn from "./LoginBtn";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar bg-black p-lg-3 px-lg-5 shadow-sm">
        <div>
          <h3>My Cinemas</h3>
        </div>
        <div className="d-flex align-items-center flex-wrap gap-5 ms-auto">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
          <LoginBtn />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

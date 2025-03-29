import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar p-lg-3 px-lg-5 shadow-sm bg-darker">
        <div className="d-flex flex-wrap gap-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

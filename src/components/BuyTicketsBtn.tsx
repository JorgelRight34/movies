import { NavLink } from "react-router";
import { Movie } from "../models/movie";

interface BuyTicketsBtn {
  movie: Movie;
  className?: string;
}

const BuyTicketsBtn = ({ movie, className }: BuyTicketsBtn) => {
  return (
    <NavLink
      className="text-decoration-none text-white"
      to={`/movies/${movie.id}`}
    >
      <button
        className={`btn btn-accent px-5 w-100 ${
          className ? " " + className : ""
        } `}
      >
        Buy Tickets
      </button>
    </NavLink>
  );
};

export default BuyTicketsBtn;

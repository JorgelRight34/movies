import { NavLink } from "react-router";
import { Movie } from "../../models/movie";
import AccentBtn from "./AccentBtn";

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
      <AccentBtn className={className}>Comprar Tickets</AccentBtn>
    </NavLink>
  );
};

export default BuyTicketsBtn;

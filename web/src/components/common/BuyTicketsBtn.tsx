import { NavLink } from "react-router";
import { Movie } from "../../models/movie";
import AccentBtn from "./AccentBtn";

interface BuyTicketsBtn {
  movie: Movie;
  className?: string;
  label?: string;
}

const BuyTicketsBtn = ({
  label = "Comprar Tickets",
  movie,
  className,
}: BuyTicketsBtn) => {
  return (
    <NavLink
      className="text-decoration-none text-white"
      to={`/movies/${movie.id}`}
    >
      <AccentBtn className={className}>{label}</AccentBtn>
    </NavLink>
  );
};

export default BuyTicketsBtn;

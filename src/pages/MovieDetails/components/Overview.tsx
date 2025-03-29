import RatingStars from "../../../components/RatingStars/RatingStars";
import { Movie } from "../../../models/movie";

interface OverviewProps {
  movie: Movie;
  voteForMovie: (value: number) => void;
}

const Overview = ({ movie, voteForMovie }: OverviewProps) => {
  return (
    <>
      <section className="mb-5">
        <div className="mb-5">
          <h2>Overview</h2>
          <h4>{movie.tagline}</h4>
        </div>
        <p>{movie.overview}</p>
      </section>
      <div className="mb-5">
        <h4>Leave your rating</h4>
        <RatingStars
          readOnly={false}
          renderLabelText={true}
          callback={voteForMovie}
          rating={movie.vote_average}
        />
      </div>
    </>
  );
};

export default Overview;

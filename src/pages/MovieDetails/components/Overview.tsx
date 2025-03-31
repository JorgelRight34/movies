import { useMemo } from "react";
import RatingStars from "../../../components/RatingStars/RatingStars";
import { Movie } from "../../../models/movie";
import { VIDEO_PROVIDERS } from "../../../lib/constants";

interface OverviewProps {
  movie: Movie;
  voteForMovie: (value: number) => void;
}

/**
 * An overview displaying the movie important details such as title, tagline, rating, trailer and more.
 *
 * @component
 * @param {Object} props.props - The properties passed to the component.
 * @param {Movie} props.movie - The movie associated with the overview.
 * @returns {JSX.Element} The rendered movie overview component.
 */
const Overview = ({ movie, voteForMovie }: OverviewProps) => {
  const trailer = useMemo(
    () =>
      movie.videos?.results.find(
        (video) => video.type === "Trailer" && video.official
      ),
    [movie]
  );
  return (
    <>
      <section className="mb-5">
        <div className="mb-3">
          <h2>Panorama</h2>
          <h4>{movie.tagline}</h4>
        </div>
        <p className="mb-3">{movie.overview}</p>
        <div className="d-flex justify-content-center">
          {trailer && (
            <iframe
              className="mx-auto"
              width="560"
              height="315"
              src={VIDEO_PROVIDERS[
                trailer?.site as keyof typeof VIDEO_PROVIDERS
              ](trailer.key)}
              allowFullScreen
            />
          )}
        </div>
      </section>
      <div>
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

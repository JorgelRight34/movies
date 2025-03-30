import AccentBtn from "../common/AccentBtn";

const MovieCardPlaceholder = () => {
  return (
    <article className="movie-card border shadow-sm rounded-3">
      <svg
        className="bd-placeholder-img card-img-top"
        width="100%"
        height="25rem"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#868e96"></rect>
      </svg>

      <div className="movie-card-description p-3">
        <h5>
          <span className="placeholder col-6"></span>
        </h5>
        <div className="d-flex flex-column flex-lg-row mb-3">
          <span className="placeholder col-6"></span>
          <span className="ms-0 ms-lg-auto placeholder col-6"></span>
        </div>
        <AccentBtn>&nbsp;</AccentBtn>
      </div>
    </article>
  );
};

export default MovieCardPlaceholder;

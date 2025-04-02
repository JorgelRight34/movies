import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import MoviePoster from "./MoviePoster";
import { mockMovie } from "../../lib/constants";

describe("MoviePoster", () => {
  it("poster image should have as alt the movie title", async () => {
    render(<MoviePoster movie={mockMovie} />);
    const regex = new RegExp(mockMovie.title, "i");
    await expect(screen.getByAltText(regex)).toBeInTheDocument();
  });

  it("should render vote average", async () => {
    render(<MoviePoster movie={mockMovie} />);
    const regex = new RegExp(mockMovie.vote_average.toString(), "i");
    await expect(screen.getByText(regex)).toBeInTheDocument();
  });

  it("should render runtime", async () => {
    render(<MoviePoster movie={mockMovie} />);
    const regex = new RegExp(mockMovie.runtime.toString(), "i");
    await expect(screen.getByText(regex)).toBeInTheDocument();
  });
});

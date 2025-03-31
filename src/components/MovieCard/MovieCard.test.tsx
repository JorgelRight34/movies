import { render, screen } from "@testing-library/react";
import MovieCard from "./MovieCard";
import { MemoryRouter } from "react-router";
import { mockMovie } from "./constants";
import { getFullMovieImagePath } from "../../lib/utils";

describe("MovieCard", () => {
  it("movie title should be visible", async () => {
    render(
      <MemoryRouter>
        <MovieCard movie={mockMovie} />
      </MemoryRouter>
    );
    const regex = new RegExp(mockMovie.title, "i");
    await expect(screen.getByText(regex)).toBeInTheDocument();
  });

  it("movie date should be visible", async () => {
    render(
      <MemoryRouter>
        <MovieCard movie={mockMovie} />
      </MemoryRouter>
    );
    const regex = new RegExp(mockMovie.release_date, "i");
    await expect(screen.getByText(regex)).toBeInTheDocument();
  });

  it("votes should be visible", async () => {
    render(
      <MemoryRouter>
        <MovieCard movie={mockMovie} />
      </MemoryRouter>
    );
    const regex = new RegExp(mockMovie.vote_average.toString(), "i");
    await expect(screen.getByText(regex)).toBeInTheDocument();
  });

  it("img should be visible", async () => {
    render(
      <MemoryRouter>
        <MovieCard movie={mockMovie} />
      </MemoryRouter>
    );
    const regex = new RegExp(mockMovie.title.toString(), "i");
    const image = screen.getByAltText(regex);

    expect(image).toBeInTheDocument();

    expect(image).toHaveAttribute(
      "src",
      getFullMovieImagePath(mockMovie.poster_path)
    );
  });
});

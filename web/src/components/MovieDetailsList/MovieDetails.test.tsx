import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import MovieDetailsList from "./MovieDetailsList";
import { mockMovie } from "../../lib/constants";
import { MemoryRouter } from "react-router";

describe("MovieDetails", () => {
  it("it shows an image with the alt set as the title of the movie", () => {
    render(
      <MemoryRouter>
        <MovieDetailsList movie={mockMovie} />
      </MemoryRouter>
    );

    // Get element with alt
    const element = screen.getByAltText(mockMovie.title);

    expect(element).toBeInTheDocument();
  });

  it("it shows the movie popularity fixed by 2", () => {
    render(
      <MemoryRouter>
        <MovieDetailsList movie={mockMovie} />
      </MemoryRouter>
    );
    expect(screen.getByText(mockMovie.popularity.toFixed(2)));
  });
});

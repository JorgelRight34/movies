import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import MovieDetailsList from "./MovieDetails";
import { mockMovie } from "../../lib/constants";

describe("MovieDetails", () => {
  it("it renders", () => {
    const result = render(<MovieDetailsList movie={mockMovie} />);
    expect(result).toBeInTheDocument();
  });

  it("it shows an image with the alt set as the title of the movie", () => {
    render(<MovieDetailsList movie={mockMovie} />);

    // Get element with alt
    const element = screen.getAllByAltText(mockMovie.title);

    expect(element).toBeInTheDocument();
  });

  it("it shows the movie title", () => {
    render(<MovieDetailsList movie={mockMovie} />);
    expect(screen.getByText(mockMovie.title)).toBeInTheDocument();
  });

  it("it shows the release date for the movie", () => {
    render(<MovieDetailsList movie={mockMovie} />);
    expect(screen.getByText(mockMovie.release_date)).toBeInTheDocument();
  });

  it("it shows the movie popularity fixed by 2", () => {
    render(<MovieDetailsList movie={mockMovie} />);
    expect(screen.getByText(mockMovie.popularity.toFixed(2)));
  });
});

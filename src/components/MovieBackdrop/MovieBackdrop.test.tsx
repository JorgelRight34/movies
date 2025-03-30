import { render, screen } from "@testing-library/react";
import MovieBackdrop from "./MovieBackdrop";
import { mockMovie } from "../MovieCard/constants";

describe("MovieBackdrop", () => {
  it("it renders", async () => {
    const { container } = render(<MovieBackdrop movie={mockMovie} />);
    expect(container).toBeInTheDocument();
  });

  it("movie backdrop should have alt text as the title of the movie", async () => {
    render(<MovieBackdrop movie={mockMovie} />);
    await expect(screen.getByAltText(mockMovie.title)).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react-native";
import { mockMovie } from "../../lib/constants";
import MovieCard from "../MovieCard";

describe("MovieCard", () => {
  it("movie title should be visible", async () => {
    render(<MovieCard movie={mockMovie} />);
    const regex = new RegExp(mockMovie.title, "i");
    await expect(screen.getByText(regex)).toBeTruthy();
  });

  it("movie date should be visible", async () => {
    render(<MovieCard movie={mockMovie} />);
    const regex = new RegExp(mockMovie.release_date, "i");
    await expect(screen.getByText(regex)).toBeTruthy();
  });

  it("votes should be visible", async () => {
    render(<MovieCard movie={mockMovie} />);
    const regex = new RegExp(mockMovie.vote_average.toString(), "i");
    await expect(screen.getByText(regex)).toBeTruthy();
  });
});

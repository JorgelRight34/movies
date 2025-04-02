import { renderHook, waitFor } from "@testing-library/react-native";
import useRecommendedMovies from "../../hooks/useRecommendedMovies";
import { expectedMovieStructure, testMovieId } from "./test-utils/constants";

describe("useRecommendedMovies", () => {
  it("should fetch and return recommended movies on the right structure", async () => {
    // Render hook
    const { result } = renderHook(() => useRecommendedMovies(testMovieId));

    // Wait for the hook to update the state
    await waitFor(() => {
      result.current.forEach((el) => {
        expect(el).toMatchObject(expectedMovieStructure);
      });
    });
  });
});

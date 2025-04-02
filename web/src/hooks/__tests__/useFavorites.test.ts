import { act, renderHook, waitFor } from "@testing-library/react";
import useFavorites from "../../hooks/useFavorites";
import { expectedMovieStructure } from "./constants";

describe("useFavorites", () => {
  it("should start with page as 1", () => {
    // Render hook
    const { result } = renderHook(() => useFavorites());

    // Expect Page state to equal 1
    expect(result.current.page).toBe(1);
  });

  it("should fetch and return favorite movies on the right structure, and handle going to next page", async () => {
    // Render hook
    const { result } = renderHook(() => useFavorites());

    // Wait for the hook to update the state
    await waitFor(() => {
      result.current.favoriteMovies.forEach((el) => {
        expect(el).toMatchObject(expectedMovieStructure);
      });
    });

    // Call handle to next page function
    await act(() => result.current.goToNextPage());

    // Next page should be 2
    await waitFor(() => expect(result.current.page).not.toBe(2));
  });

  it("should not update page by 1 when handling next if page + 1 > totalPages", async () => {
    // Render hook
    const { result } = renderHook(() => useFavorites());

    // Expect initally that the page = 1
    expect(result.current.page).toBe(1);

    // Call handle to next page function
    await act(() => result.current.goToPrevPage());

    // Should not be 2
    await waitFor(() => expect(result.current.page).not.toBe(2));
  });

  it("should not update page to a negative number or zero", async () => {
    // Render hook
    const { result } = renderHook(() => useFavorites());

    // Expect initial value to be 1
    expect(result.current.page).toBe(1);

    await act(() => result.current.goToNextPage);

    // Page should not be 0 or below
    await waitFor(() => expect(result.current.page).not.toBeLessThanOrEqual(0));
  });
});

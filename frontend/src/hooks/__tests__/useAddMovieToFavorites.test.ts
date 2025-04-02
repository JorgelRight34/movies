import { renderHook, waitFor } from "@testing-library/react";
import useAddMovieToFavorites from "../../hooks/useAddMovieToFavorites";
import { describe, it } from "vitest";
import { act } from "react";
import { testMovieId } from "./constants";
import api from "../../data/api";

vi.spyOn(api, 'post');

describe("useAddMovieToFavorites", () => {
    it("should call the right endpoint when adding to favorites", async () => {
        const { result } = renderHook(() => useAddMovieToFavorites());
        const testMovieIdNumber = Number(testMovieId);

        // Wait for the function to be available
        await waitFor(() => expect(result).toBeDefined());

        await act(() => result.current(testMovieIdNumber));

        await waitFor(() => expect(api.post).toHaveBeenCalledWith(expect.stringMatching("account/null/favorite"), {
            media_type: "movie",
            media_id: testMovieIdNumber,
            favorite: true,
        }));
    })
})
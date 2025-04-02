import { renderHook } from "@testing-library/react-hooks";
import { waitFor } from "@testing-library/react-native";
import useAddMovieToFavorites from "../useAddMovieToFavorites";
import { act } from "react";
import { testMovieId } from "./test-utils/constants";
import api from "../../data/api";

jest.spyOn(api, "post");

describe("useAddMovieToFavorites", () => {
  it("should call the right endpoint when adding to favorites", async () => {
    const { result } = renderHook(() => useAddMovieToFavorites());
    const testMovieIdNumber = Number(testMovieId);

    // Wait for the function to be available
    await waitFor(() => expect(result).toBeDefined());

    await act(() => result.current(testMovieIdNumber));

    await waitFor(() =>
      expect(api.post).toHaveBeenCalledWith(
        expect.stringMatching("account/null/favorite"),
        {
          media_type: "movie",
          media_id: testMovieIdNumber,
          favorite: true,
        }
      )
    );
  });
});

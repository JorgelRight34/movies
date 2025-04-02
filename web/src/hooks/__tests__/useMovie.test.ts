import { vi } from "vitest";
import { act, renderHook, waitFor } from "@testing-library/react";
import useMovie from "../useMovie";
import {
    expectedMovieStructure,
    expectedActorStructure,
    expectedWorkerStructure,
    testMovieId,
} from "./constants";
import api from "../../data/api";

vi.spyOn(api, 'post');

describe("useMovie", () => {

    it("should fetch and return movie with the right structure", async () => {
        // Render hook
        const { result } = renderHook(() => useMovie(testMovieId));

        // Wait for the hook to update the state
        await waitFor(() => {
            expect(result.current.movie).toMatchObject(expectedMovieStructure);
        });
    });

    it("should return an object with arrays for cast and crew", async () => {
        // Render hook
        const { result } = renderHook(() => useMovie(testMovieId));

        // Wait for the hook to update the state
        await waitFor(() => {
            expect(result.current.credits.cast.every(actor => expect(actor).toMatchObject(expectedActorStructure))).toBe(true);
            expect(result.current.credits.crew.every(worker => expect(worker).toMatchObject(expectedWorkerStructure))).toBe(true);
        });
    });

    it("should call the right endpoint when adding to favorites", async () => {
        const { result } = renderHook(() => useMovie(testMovieId));
        const rating = 5;

        // Wait for the function to be available
        await waitFor(() => expect(result.current.voteForMovie).toBeDefined());

        act(() => result.current.voteForMovie(rating));

        await waitFor(() => expect(api.post).toHaveBeenCalledWith(expect.stringMatching(`movie/${testMovieId}/rating`), { value: rating }));
    })
});

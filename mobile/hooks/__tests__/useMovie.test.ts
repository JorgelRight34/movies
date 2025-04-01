import { renderHook, waitFor } from "@testing-library/react-native";
import useMovie from "../useMovie";
import {
    expectedMovieStructure,
    expectedActorStructure,
    expectedWorkerStructure,
    testMovieId,
} from "./test-utils/constants";


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
});

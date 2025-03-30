const api = require("../../data/api");
const { renderHook, waitFor } = require('@testing-library/react');
const { Movie } = require("../../models/movie");
const useFavorites = require("../../hooks/useFavorites");

/*
import api from "../../data/api";
import { renderHook, waitFor } from '@testing-library/react';
import { Movie } from "../../models/movie"
import useFavorites from "../../hooks/useFavorites";
*/

// Mock API Module
jest.mock('../../data/api')

const mockMovies = [
    {
        adult: false,
        backdrop_path: "/gsQJOfeW45KLiQeEIsom94QPQwb.jpg",
        genre_ids: [
            28,
            53
        ],
        id: 1125899,
        original_language: "en",
        original_title: "Cleaner",
        overview: "When a group of radical activists take over an energy company's annual gala, seizing 300 hostages, an ex-soldier turned window cleaner suspended 50 storeys up on the outside of the building must save those trapped inside, including her younger brother.",
        popularity: 572.5151,
        poster_path: "/mwzDApMZAGeYCEVjhegKvCzDX0W.jpg",
        release_date: "2025-02-19",
        title: "Cleaner",
        video: false,
        vote_average: 6.5,
        vote_count: 98
    },
    {
        adult: false,
        backdrop_path: "/ibF5XVxTzf1ayzZrmiJqgeQ39Qk.jpg",
        genre_ids: [
            28,
            10752
        ],
        id: 1373723,
        original_language: "en",
        original_title: "The Codes of War",
        overview: "War stories about family, ethics and honor include the true story of two U.S. Marines who in a span of six seconds, must stand their ground to stop a suicide truck bomb, a Navy Corpsman who attempts to hold on to his humanity, and a WW2 soldier who gets separated from his squad and is forced to re-evaluate his code.",
        popularity: 422.4411,
        poster_path: "/oXeiQAfRK90pxxhP5iKPXQqAIN1.jpg",
        release_date: "2025-03-20",
        title: "The Codes of War",
        video: false,
        vote_average: 7.9,
        vote_count: 8
    }
]

describe('useRecommendedMovies', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should start with page as 1', () => {
        // Render hook
        const { result } = renderHook(() => useFavorites());

        // Expect Page state to equal 1
        expect(result.current[1]).toBe(1);
    })

    it('should fetch and return favorite movies', async () => {
        // Mock API response
        (api.get).mockResolvedValueOnce({
            data: { results: mockMovies }
        });

        // Render hook
        const { result } = renderHook(() => useFavorites());

        // The initial state should be an empty array
        expect(result.current).toEqual([]);

        // Wait for the hook to update the state with the mocked data
        await waitFor(() => {
            expect(result.current).toEqual(mockMovies);
        })
    })
})
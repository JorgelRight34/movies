import { expect } from "vitest";
import { Movie } from "../../models/movie";
import { Actor } from "../../models/actor";
import { Worker } from "../../models/worker";

export const expectedMovieStructure = Object.fromEntries(
    (Object.keys({}) as (keyof Movie)[]).map((key) => [key, expect.anything()])
);

export const expectedActorStructure = Object.fromEntries(
    (Object.keys({}) as (keyof Actor)[]).map(key => [key, expect.anything()])
);

export const expectedWorkerStructure = Object.fromEntries(
    (Object.keys({}) as (keyof Worker)[]).map(key => [key, expect.anything()])
);

export const testMovieId = "1197306";
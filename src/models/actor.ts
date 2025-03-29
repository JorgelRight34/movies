import { Person } from "./person";

export interface Actor extends Person {
  castId: number;
  character: string;
  order: number;
}

import { Person } from "./person";

export interface Worker extends Person {
    department: string,
    job: string
}

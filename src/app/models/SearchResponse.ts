import { Course } from "./Course";
import { Path } from "./Path";
import { User } from "./User";

export interface SearchResponse {
    courses: Course[];
    paths: Path[];
    students: User[];
    trainers: User[]
}
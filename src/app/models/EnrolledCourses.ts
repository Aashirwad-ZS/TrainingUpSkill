import { Course } from './Course';

export interface enrolledCourses {
  averageProgress: number;
  count: number;
  enrolledCourses: Course[];
}

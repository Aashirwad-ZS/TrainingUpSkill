import { createAction, props } from '@ngrx/store';
import { Course } from '../../models/Course';
import { Chapter } from 'src/app/models/Chapter';
import { Ratings } from 'src/app/models/Ratings';

export const loadAllCourses = createAction('[Course] Load All Courses');

export const loadAllCoursesSuccess = createAction(
  '[Course] Load All Courses Success',
  props<{ courses: Course[] }>()
);

export const loadAllCoursesFailed = createAction(
  '[Course] Load All Courses Failed',
  props<{ error: any }>()
);
export const loadEnrolledCourses = createAction(
  '[Course] Load Enrolled Courses'
);

export const loadEnrolledCoursesSuccess = createAction(
  '[Course] Load Enrolled Courses Success',
  props<{ enrolledCourses: Course[] }>()
);

export const loadEnrolledCoursesFailed = createAction(
  '[Course] Load Enrolled Courses Failed',
  props<{ error: any }>()
);
export const loadCourseAboutInfo = createAction(
  '[Course] Load Course About Info',
  props<{ courseId: string }>()
);

export const loadCourseAboutInfoSuccess = createAction(
  '[Course] Load Course About Info Success',
  props<{ course: Course }>()
);

export const loadCourseAboutInfoFailed = createAction(
  '[Course] Load Course About Info Failed',
  props<{ error: any }>()
);
export const loadChapterData = createAction(
  '[Course] Load Chapter Data',
  props<{ courseId: string }>()
);

export const loadChapterDataSuccess = createAction(
  '[Course] Load Chapter Data Success',
  props<{ chapterData: Chapter[] }>()
);

export const loadChapterDataFailed = createAction(
  '[Course] Load Chapter Data Failed',
  props<{ error: any }>()
);
export const loadNoOfEnrolledCourses = createAction(
  '[Course] Load Number of Enrolled Courses'
);

export const loadNoOfEnrolledCoursesSuccess = createAction(
  '[Course] Load Number of Enrolled Courses Success',
  props<{ count: number }>()
);

export const loadNoOfEnrolledCoursesFailed = createAction(
  '[Course] Load Number of Enrolled Courses Failed',
  props<{ error: any }>()
);
export const loadFavoriteCourses = createAction(
  '[Course] Load Favorite Courses'
);

export const loadFavoriteCoursesSuccess = createAction(
  '[Course] Load Favorite Courses Success',
  props<{ favoriteCourses: Course[] }>()
);

export const loadFavoriteCoursesFailed = createAction(
  '[Course] Load Favorite Courses Failed',
  props<{ error: any }>()
);
export const loadCourseRating = createAction(
  '[Course] Load Courses rating',
  props<{ id: string }>()
);
export const loadCourseRatingSuccess = createAction(
  '[Course] Load Courses rating Success',
  props<{ rating: Ratings }>()
);
export const loadCourseRatingFailed = createAction(
  '[Course] Load Courses rating Failed',
  props<{ error: any }>()
);

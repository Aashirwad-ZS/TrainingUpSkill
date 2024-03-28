import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  AllCoursesState,
  EnrolledCoursesState,
  CourseAboutInfoState,
  ChapterDataState,
  NoOfEnrolledCoursesState,
  FavoriteCoursesState,
  RatingState,
} from '../reducer/course.reducer';

// Selectors for All Courses
export const selectAllCoursesState =
  createFeatureSelector<AllCoursesState>('allCourses');

export const selectAllCourses = createSelector(
  selectAllCoursesState,
  (state) => state.allCourses
);

export const selectAllCoursesLoading = createSelector(
  selectAllCoursesState,
  (state) => state.isLoading
);

export const selectAllCoursesError = createSelector(
  selectAllCoursesState,
  (state) => state.error
);

// Selectors for Enrolled Courses
export const selectEnrolledCoursesState =
  createFeatureSelector<EnrolledCoursesState>('enrolledCourses');

export const selectEnrolledCourses = createSelector(
  selectEnrolledCoursesState,
  (state) => state.enrolledCourses
);

export const selectEnrolledCoursesLoading = createSelector(
  selectEnrolledCoursesState,
  (state) => state.isLoading
);

export const selectEnrolledCoursesError = createSelector(
  selectEnrolledCoursesState,
  (state) => state.error
);

// Selectors for Course About Info
export const selectCourseAboutInfoState =
  createFeatureSelector<CourseAboutInfoState>('courseAboutInfo');

export const selectCourseAboutInfo = createSelector(
  selectCourseAboutInfoState,
  (state) => state.courseAboutInfo
);

export const selectCourseAboutInfoLoading = createSelector(
  selectCourseAboutInfoState,
  (state) => state.isLoading
);

export const selectCourseAboutInfoError = createSelector(
  selectCourseAboutInfoState,
  (state) => state.error
);

// Selectors for Chapter Data
export const selectChapterDataState =
  createFeatureSelector<ChapterDataState>('chapterData');

export const selectChapterData = createSelector(
  selectChapterDataState,
  (state) => state.chapterData
);

export const selectChapterDataLoading = createSelector(
  selectChapterDataState,
  (state) => state.isLoading
);

export const selectChapterDataError = createSelector(
  selectChapterDataState,
  (state) => state.error
);

// Selectors for Number of Enrolled Courses
export const selectNoOfEnrolledCoursesState =
  createFeatureSelector<NoOfEnrolledCoursesState>('noOfEnrolledCourses');

export const selectNoOfEnrolledCourses = createSelector(
  selectNoOfEnrolledCoursesState,
  (state) => state.noOfEnrolledCourses
);

export const selectNoOfEnrolledCoursesLoading = createSelector(
  selectNoOfEnrolledCoursesState,
  (state) => state.isLoading
);

export const selectNoOfEnrolledCoursesError = createSelector(
  selectNoOfEnrolledCoursesState,
  (state) => state.error
);

// Selectors for Favorite Courses
export const selectFavoriteCoursesState =
  createFeatureSelector<FavoriteCoursesState>('favoriteCourses');

export const selectFavoriteCourses = createSelector(
  selectFavoriteCoursesState,
  (state) => state.favoriteCourses
);

export const selectFavoriteCoursesLoading = createSelector(
  selectFavoriteCoursesState,
  (state) => state.isLoading
);

export const selectFavoriteCoursesError = createSelector(
  selectFavoriteCoursesState,
  (state) => state.error
);
export const selectCourseRating =
  createFeatureSelector<RatingState>('courseRating');

export const selectRatings = createSelector(
  selectCourseRating,
  (state) => state.rating
);

export const selectRatingsLoading = createSelector(
  selectCourseRating,
  (state) => state.isLoading
);

export const selectRatingError = createSelector(
  selectCourseRating,
  (state) => state.error
);


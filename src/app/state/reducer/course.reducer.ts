import { Action, createReducer, on } from '@ngrx/store';
import * as CourseActions from '../action/course.actions';
import { Course } from '../../models/Course';
import { Chapter } from 'src/app/models/Chapter';
import { Ratings } from 'src/app/models/Ratings';

export interface AllCoursesState {
  allCourses: Course[];
  isLoading: boolean;
  error: any;
}

export interface EnrolledCoursesState {
  enrolledCourses: Course[];
  isLoading: boolean;
  error: any;
}
export interface RatingState {
  rating: Ratings;
  isLoading: boolean;
  error: any;
}

export interface CourseAboutInfoState {
  courseAboutInfo: Course;
  isLoading: boolean;
  error: any;
}

export interface ChapterDataState {
  chapterData: Chapter[];
  isLoading: boolean;
  error: any;
}

export interface NoOfEnrolledCoursesState {
  noOfEnrolledCourses: number;
  isLoading: boolean;
  error: any;
}

export interface FavoriteCoursesState {
  favoriteCourses: Course[];
  isLoading: boolean;
  error: any;
}

export const initialAllCoursesState: AllCoursesState = {
  allCourses: [],
  isLoading: true,
  error: null,
};
export const initialRatingState: RatingState = {
  rating: {
    averageRating: 0,
    rating: {
      fiveStars: 0,
      fourStars: 0,
      threeStars: 0,
      twoStars: 0,
      oneStars: 0,
    },
  },
  isLoading: true,
  error: null,
};

export const initialEnrolledCoursesState: EnrolledCoursesState = {
  enrolledCourses: [],
  isLoading: true,
  error: null,
};

export const initialCourseAboutInfoState: CourseAboutInfoState = {
  courseAboutInfo: {
    id: 0,
    name: '',
    courseName: '',
    imageUrl: '',
    isAccessible: false,
    description: '',
    about: '',
    createdBy: {
      id: 0,
      name: '',
      imageUrl: '',
      email: '',
    },
    createdAt: '',
    isFavourite: false,
    progress: 0,
    enrolledAt: '',
    completedAt: '',
    noOfChapters: 0,
    updatedAt: '',
    level: 0,
  },
  isLoading: true,
  error: null,
};

export const initialChapterDataState: ChapterDataState = {
  chapterData: [],
  isLoading: true,
  error: null,
};

export const initialNoOfEnrolledCoursesState: NoOfEnrolledCoursesState = {
  noOfEnrolledCourses: 0,
  isLoading: true,
  error: null,
};

export const initialFavoriteCoursesState: FavoriteCoursesState = {
  favoriteCourses: [],
  isLoading: true,
  error: null,
};

export const allCoursesReducer = createReducer(
  initialAllCoursesState,
  on(CourseActions.loadAllCourses, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(CourseActions.loadAllCoursesSuccess, (state, { courses }) => ({
    ...state,
    allCourses: courses,
    isLoading: false,
  })),
  on(CourseActions.loadAllCoursesFailed, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);

export const enrolledCoursesReducer = createReducer(
  initialEnrolledCoursesState,
  on(CourseActions.loadEnrolledCourses, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(
    CourseActions.loadEnrolledCoursesSuccess,
    (state, { enrolledCourses }) => ({
      ...state,
      enrolledCourses,
      isLoading: false,
    })
  ),
  on(CourseActions.loadEnrolledCoursesFailed, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);

export const courseAboutInfoReducer = createReducer(
  initialCourseAboutInfoState,
  on(CourseActions.loadCourseAboutInfo, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(CourseActions.loadCourseAboutInfoSuccess, (state, { course }) => ({
    ...state,
    courseAboutInfo: course,
    isLoading: false,
  })),
  on(CourseActions.loadCourseAboutInfoFailed, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);

export const chapterDataReducer = createReducer(
  initialChapterDataState,
  on(CourseActions.loadChapterData, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(CourseActions.loadChapterDataSuccess, (state, { chapterData }) => ({
    ...state,
    chapterData,
    isLoading: false,
  })),
  on(CourseActions.loadChapterDataFailed, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);

export const noOfEnrolledCoursesReducer = createReducer(
  initialNoOfEnrolledCoursesState,
  on(CourseActions.loadNoOfEnrolledCourses, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(CourseActions.loadNoOfEnrolledCoursesSuccess, (state, { count }) => ({
    ...state,
    noOfEnrolledCourses: count,
    isLoading: false,
  })),
  on(CourseActions.loadNoOfEnrolledCoursesFailed, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);

export const favoriteCoursesReducer = createReducer(
  initialFavoriteCoursesState,
  on(CourseActions.loadFavoriteCourses, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(
    CourseActions.loadFavoriteCoursesSuccess,
    (state, { favoriteCourses }) => ({
      ...state,
      favoriteCourses,
      isLoading: false,
    })
  ),
  on(CourseActions.loadFavoriteCoursesFailed, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);
export const courseRatingReducer = createReducer(
  initialRatingState,
  on(CourseActions.loadCourseRating, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(CourseActions.loadCourseRatingSuccess, (state, { rating }) => ({
    ...state,
    rating,
    isLoading: false,
  })),
  on(CourseActions.loadCourseRatingFailed, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);

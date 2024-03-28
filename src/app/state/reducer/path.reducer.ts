import { createReducer, on } from '@ngrx/store';
import * as PathActions from '../action/path.actions';
import { Path, PathData } from '../../models/Path';

export interface AllPathsState {
  allPaths: Path[];
  isLoading: boolean;
  error: any | null;
}

export interface PathByIdState {
  pathById: PathData;
  isLoading: boolean;
  error: any | null;
}

export interface EnrolledPathsState {
  enrolledPaths: Path[];
  isLoading: boolean;
  error: any | null;
}
export interface numberOfEnrolledPathsState {
  numberOfEnrolledPaths: number;
  isLoading: boolean;
  error: any | null;
}

export const initialAllPathsState: AllPathsState = {
  allPaths: [],
  isLoading: true,
  error: null,
};

export const initialPathByIdState: PathByIdState = {
  pathById: {
    id: 0,
    name: '',
    imageUrl: '',
    about: '',
    createdBy: {
      id: 0,
      name: '',
      imageUrl: '',
      email: '',
    },
    updatedAt: '',
    noOfCourses: 0,
    isEnrolled: false,
    isCompleted: false,
    createdAt: '',
    courses: [],
  },
  isLoading: true,
  error: null,
};

export const initialEnrolledPathsState: EnrolledPathsState = {
  enrolledPaths: [],
  isLoading: true,
  error: null,
};
export const initialNumberOfEnrolledPathState: numberOfEnrolledPathsState = {
  numberOfEnrolledPaths: 0,
  isLoading: true,
  error: null,
};

export const pathReducer = createReducer(
  initialAllPathsState,
  on(PathActions.loadAllPaths, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),

  on(PathActions.loadAllPathsSuccess, (state, { paths }) => ({
    ...state,
    allPaths: paths,
    isLoading: false,
    error: null,
  })),

  on(PathActions.loadAllPathsFailed, (state, { error }) => ({
    ...state,
    allPaths: [],
    isLoading: false,
    error,
  }))
);
export const PathByIdReducer = createReducer(
  initialPathByIdState,
  on(PathActions.loadPathById, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),

  on(PathActions.loadPathByIdSuccess, (state, { pathById }) => ({
    ...state,
    pathById: pathById,
    isLoading: false,
    error: null,
  })),

  on(PathActions.loadPathByIdFailed, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);
export const enrolledPathsReducer = createReducer(
  initialEnrolledPathsState,
  on(PathActions.loadEnrolledPaths, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),

  on(PathActions.loadEnrolledPathsSuccess, (state, { enrolledPaths }) => ({
    ...state,
    enrolledPaths: enrolledPaths,
    isLoading: false,
    error: null,
  })),

  on(PathActions.loadEnrolledPathsFailed, (state, { error }) => ({
    ...state,
    enrolledPaths: [],
    isLoading: false,
    error,
  }))
);

export const NoOfenrolledPathsReducer = createReducer(
  initialNumberOfEnrolledPathState,
  on(PathActions.loadNumberOfEnrolledPaths, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),

  on(
    PathActions.loadNumberOfEnrolledPathsSuccess,
    (state, { numberOfEnrolledPaths }) => ({
      ...state,
      numberOfEnrolledPaths: numberOfEnrolledPaths,
      isLoading: false,
      error: null,
    })
  ),

  on(PathActions.loadNumberOfEnrolledPathsFailed, (state, { error }) => ({
    ...state,
    numberOfEnrolledPaths: 0,
    isLoading: false,
    error,
  }))
);

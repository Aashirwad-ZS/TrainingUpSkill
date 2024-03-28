import { createReducer, on } from '@ngrx/store';
import { Batch } from '../../models/Batch';
import * as BatchActions from '../action/batch.actions';
import { User } from 'src/app/models/User';
import { Course } from 'src/app/models/Course';
import { EnrolledBatches } from 'src/app/models/EnrolledBatches';

export interface BatchState {
  batches: Batch[];
  isLoading: boolean;
  error: any;
}
export interface EnrolledbatchState {
  enrolledBatches: EnrolledBatches;
  isLoading: boolean;
  error: any;
}

export interface StudentState {
  students: User[];
  isLoading: boolean;
  error: any;
}

export interface TrainerState {
  trainers: User[];
  isLoading: boolean;
  error: any;
}

export interface BatchDetailsState {
  batchDetails: Batch;
  isLoading: boolean;
  error: any;
}

export interface BatchPathDataState {
  BatchPathData: Course;
  isLoading: boolean;
  error: any;
}

export const initialBatchState: BatchState = {
  batches: [],
  isLoading: true,
  error: null,
};

export const initialEnrolledBatchState: EnrolledbatchState = {
  enrolledBatches: {
    averageProgress: 0,
    count: 0,
    enrolledBatches: [],
  },
  isLoading: true,
  error: 'error',
};

export const initialStudentState: StudentState = {
  students: [],
  isLoading: true,
  error: null,
};

export const initialTrainerState: TrainerState = {
  trainers: [],
  isLoading: true,
  error: null,
};

export const initialBatchDetailsState: BatchDetailsState = {
  batchDetails: {
    createdAt: '',
    createdBy: {
      email: '',
      id: 0,
      imageUrl: '',
      name: '',
      isActive: false,
    },
    endDate: '',
    startDate: '',
    id: 0,
    isAccessible: false,
    name: '',
    noOfPaths: 0,
    noOfStudents: 0,
    noOfTrainers: 0,
    streamName: '',
    stream: {
      streamId: 0,
      streamName: '',
    },
    progress: 0,
  },
  isLoading: true,
  error: null,
};

export const initialBatchPathDataState: BatchPathDataState = {
  BatchPathData: {
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

export const batchReducer = createReducer(
  initialBatchState,
  on(BatchActions.loadAllBatches, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(BatchActions.loadAllBatchesSuccess, (state, { batches }) => ({
    ...state,
    batches,
    isLoading: false,
    error: null,
  })),
  on(BatchActions.loadAllBatchesFailed, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  }))
);

export const studentReducer = createReducer(
  initialStudentState,
  on(BatchActions.loadStudentsById, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(BatchActions.loadStudentsByIdSuccess, (state, { students }) => ({
    ...state,
    students,
    isLoading: false,
    error: null,
  })),
  on(BatchActions.loadStudentsByIdFailed, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);

export const trainerReducer = createReducer(
  initialTrainerState,
  on(BatchActions.loadTrainersById, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(BatchActions.loadTrainersByIdSuccess, (state, { trainers }) => ({
    ...state,
    trainers,
    isLoading: false,
    error: null,
  })),
  on(BatchActions.loadTrainersByIdFailed, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);

export const batchDetailsReducer = createReducer(
  initialBatchDetailsState,
  on(BatchActions.loadBatchById, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(BatchActions.loadBatchByIdSuccess, (state, { batchDetails }) => ({
    ...state,
    batchDetails,
    isLoading: false,
    error: null,
  })),
  on(BatchActions.loadBatchByIdFailed, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);

export const pathDataReducer = createReducer(
  initialBatchPathDataState,
  on(BatchActions.loadBatchPathsById, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(BatchActions.loadBatchPathByIdSuccess, (state, { pathById }) => ({
    ...state,
    BatchPathData: pathById,
    isLoading: false,
    error: null,
  })),
  on(BatchActions.loadBatchPathByIdFailed, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);
export const enrolledBatchesReducer = createReducer(
  initialEnrolledBatchState,
  on(BatchActions.loadEnrolledBatches, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(BatchActions.loadEnrolledBatchesSuccess, (state, { enrolledBatches }) => ({
    ...state,
    enrolledBatches: enrolledBatches,
    isLoading: false,
    error: null,
  })),
  on(BatchActions.loadEnrolledBatchesFailed, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
  }))
);

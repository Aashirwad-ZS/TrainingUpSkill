import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  BatchState,
  StudentState,
  TrainerState,
  BatchDetailsState,
  BatchPathDataState,
  EnrolledbatchState,
} from '../reducer/batch.reducer';

// Selectors for BatchState
export const selectBatchState = createFeatureSelector<BatchState>('batch');

export const selectBatches = createSelector(
  selectBatchState,
  (state) => state.batches
);

export const selectBatchesLoading = createSelector(
  selectBatchState,
  (state) => state.isLoading
);

export const selectBatchesError = createSelector(
  selectBatchState,
  (state) => state.error
);

// Selectors for StudentState
export const selectStudentState =
  createFeatureSelector<StudentState>('student');

export const selectStudents = createSelector(
  selectStudentState,
  (state) => state.students
);

export const selectStudentsLoading = createSelector(
  selectStudentState,
  (state) => state.isLoading
);

export const selectStudentsError = createSelector(
  selectStudentState,
  (state) => state.error
);

// Selectors for TrainerState
export const selectTrainerState =
  createFeatureSelector<TrainerState>('trainer');

export const selectTrainers = createSelector(
  selectTrainerState,
  (state) => state.trainers
);

export const selectTrainersLoading = createSelector(
  selectTrainerState,
  (state) => state.isLoading
);

export const selectTrainersError = createSelector(
  selectTrainerState,
  (state) => state.error
);

// Selectors for BatchDetailsState
export const selectBatchDetailsState =
  createFeatureSelector<BatchDetailsState>('batchDetails');

export const selectBatchDetails = createSelector(
  selectBatchDetailsState,
  (state) => state.batchDetails
);

export const selectBatchDetailsLoading = createSelector(
  selectBatchDetailsState,
  (state) => state.isLoading
);

export const selectBatchDetailsError = createSelector(
  selectBatchDetailsState,
  (state) => state.error
);

// Selectors for BatchPathDataState
export const selectBatchPathDataState =
  createFeatureSelector<BatchPathDataState>('batchPathData');

export const selectBatchPathData = createSelector(
  selectBatchPathDataState,
  (state) => state.BatchPathData
);

export const selectBatchPathDataLoading = createSelector(
  selectBatchPathDataState,
  (state) => state.isLoading
);

export const selectBatchPathDataError = createSelector(
  selectBatchPathDataState,
  (state) => state.error
);

// Selectors for enrolledBatchesState
export const selectEnrolledBatchesState =
  createFeatureSelector<EnrolledbatchState>('enrolledBatches');

export const selectEnrolledBatches = createSelector(
  selectEnrolledBatchesState,
  (state) => state.enrolledBatches
);

export const selectEnrolledBatchesLoading = createSelector(
  selectEnrolledBatchesState,
  (state) => state.isLoading
);

export const selectEnrolledBatchesError = createSelector(
  selectEnrolledBatchesState,
  (state) => state.error
);

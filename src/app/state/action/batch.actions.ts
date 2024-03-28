import { createAction, props } from '@ngrx/store';
import { Batch } from '../../models/Batch';
import { User } from 'src/app/models/User';
import { Course } from 'src/app/models/Course';
import { EnrolledBatches } from 'src/app/models/EnrolledBatches';

// Action for loading all batches
export const loadAllBatches = createAction('[Batch] Load All Batches');

export const loadAllBatchesSuccess = createAction(
  '[Batch] Load All Batches Success',
  props<{ batches: Batch[] }>()
);

export const loadAllBatchesFailed = createAction(
  '[Batch] Load All Batches Failed',
  props<{ error: any }>()
);

// Action for loading batch by ID
export const loadBatchById = createAction(
  '[Batch] Load Batch By ID',
  props<{ id: string }>()
);

export const loadBatchByIdSuccess = createAction(
  '[Batch] Load Batch By ID Success',
  props<{ batchDetails: Batch }>()
);
export const loadBatchByIdFailed = createAction(
  '[Batch] Load Path By ID Failed',
  props<{ error: any }>()
);
// // Action for loading path by ID
export const loadBatchPathsById = createAction(
  '[Batch] Load Path By ID',
  props<{ id: string }>()
);

export const loadBatchPathByIdSuccess = createAction(
  '[Batch] Load Path By ID Success',
  props<{ pathById: Course }>()
);

export const loadBatchPathByIdFailed = createAction(
  '[Batch] Load Path By ID Failed',
  props<{ error: any }>()
);

// Action for loading trainers by ID
export const loadTrainersById = createAction(
  '[Batch] Load Trainers By ID',
  props<{ id: string }>()
);

export const loadTrainersByIdSuccess = createAction(
  '[Batch] Load Trainers By ID Success',
  props<{ trainers: User[] }>()
);

export const loadTrainersByIdFailed = createAction(
  '[Batch] Load Trainers By ID Failed',
  props<{ error: any }>()
);

// Action for loading students by ID
export const loadStudentsById = createAction(
  '[Batch] Load Students By ID',
  props<{ id: string }>()
);

export const loadStudentsByIdSuccess = createAction(
  '[Batch] Load Students By ID Success',
  props<{ students: User[] }>()
);

export const loadStudentsByIdFailed = createAction(
  '[Batch] Load Students By ID Failed',
  props<{ error: any }>()
);

export const loadEnrolledBatches = createAction(
  '[Batch] Load Enrolled Batches'
);
export const loadEnrolledBatchesFailed = createAction(
  '[Batch] Load Enrolled batches Failed',
  props<{ error: any }>()
);
export const loadEnrolledBatchesSuccess = createAction(
  '[Batch] Load Enrolled batches Success',
  props<{ enrolledBatches: EnrolledBatches }>()
);

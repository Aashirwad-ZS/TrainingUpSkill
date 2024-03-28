import { createAction, props } from '@ngrx/store';
import { Path, PathData } from '../../models/Path';

// Action for loading all paths
export const loadAllPaths = createAction('[Path] Load All Paths');

export const loadAllPathsSuccess = createAction(
  '[Path] Load All Paths Success',
  props<{ paths: Path[] }>()
);

export const loadAllPathsFailed = createAction(
  '[Path] Load All Paths Failed',
  props<{ error: any }>()
);

// Action for loading path by ID
export const loadPathById = createAction(
  '[Path] Load Path By ID',
  props<{ id: string }>()
);

export const loadPathByIdSuccess = createAction(
  '[Path] Load Path By ID Success',
  props<{ pathById: PathData }>()
);

export const loadPathByIdFailed = createAction(
  '[Path] Load Path By ID Failed',
  props<{ error: any }>()
);


// Action for loading enrolled paths
export const loadEnrolledPaths = createAction('[Path] Load Enrolled Paths');

export const loadEnrolledPathsSuccess = createAction(
  '[Path] Load Enrolled Paths Success',
  props<{ enrolledPaths: Path[] }>()
);

export const loadEnrolledPathsFailed = createAction(
  '[Path] Load Enrolled Paths Failed',
  props<{ error: any }>()
);

// Action for loading number of enrolled paths
export const loadNumberOfEnrolledPaths = createAction(
  '[Path] Load Number of Enrolled Paths'
);

export const loadNumberOfEnrolledPathsSuccess = createAction(
  '[Path] Load Number of Enrolled Paths Success',
  props<{ numberOfEnrolledPaths: number }>()
);

export const loadNumberOfEnrolledPathsFailed = createAction(
  '[Path] Load Number of Enrolled Paths Failed',
  props<{ error: any }>()
);

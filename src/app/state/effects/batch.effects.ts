import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as BatchActions from '../action/batch.actions';
import { HttpClient } from '@angular/common/http';
import { Batch } from 'src/app/models/Batch';
import { APIResponse } from 'src/app/models/ApiResponse';
import { API } from 'src/app/constants/enums/API';
import { User } from 'src/app/models/User';
import { Course } from 'src/app/models/Course';
import { EnrolledBatches } from 'src/app/models/EnrolledBatches';

@Injectable()
export class BatchEffects {
  private url = API.BASE_URL + API.STUDENT + API.BATCHES + '/';

  loadAllBatches$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BatchActions.loadAllBatches),
      switchMap(() =>
        this.http
          .get<APIResponse<Batch[]>>(
            API.BASE_URL + API.STUDENT + API.BATCHES_ALL
          )
          .pipe(
            map((batch) =>
              BatchActions.loadAllBatchesSuccess({ batches: batch.data })
            ),
            catchError((error) => {
              return of(BatchActions.loadAllBatchesFailed({ error }));
            })
          )
      )
    )
  );
  loadEnrolledBatches$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BatchActions.loadEnrolledBatches),
      switchMap(() =>
        this.http
          .get<APIResponse<EnrolledBatches>>(
            API.BASE_URL +
              API.STUDENT +
              '/331' +
              API.ENROLLED_BATCHES +
              API.PAGE_SIZE
          )
          .pipe(
            map((batch) =>
              BatchActions.loadEnrolledBatchesSuccess({
                enrolledBatches: batch.data,
              })
            ),
            catchError((error) => {
              // console.log(error);
              return of(BatchActions.loadEnrolledBatchesFailed({ error }));
            })
          )
      )
    )
  );
  loadBatchById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BatchActions.loadBatchById),
      switchMap(({ id }) =>
        this.http.get<APIResponse<Batch>>(this.url + id).pipe(
          map((batch) =>
            BatchActions.loadBatchByIdSuccess({ batchDetails: batch.data })
          ),
          catchError((error) => of(BatchActions.loadBatchByIdFailed({ error })))
        )
      )
    )
  );
  loadTrainers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BatchActions.loadTrainersById),
      switchMap(({ id }) =>
        this.http.get<APIResponse<User[]>>(this.url + id + API.TRAINERS).pipe(
          map((trainers) =>
            BatchActions.loadTrainersByIdSuccess({ trainers: trainers.data })
          ),
          catchError((error) =>
            of(BatchActions.loadTrainersByIdFailed({ error }))
          )
        )
      )
    )
  );
  loadStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BatchActions.loadStudentsById),
      switchMap(({ id }) =>
        this.http.get<APIResponse<User[]>>(this.url + id + API.STUDENTS).pipe(
          map((users) =>
            BatchActions.loadStudentsByIdSuccess({ students: users.data })
          ),
          catchError((error) =>
            of(BatchActions.loadStudentsByIdFailed({ error }))
          )
        )
      )
    )
  );
  loadBatchPaths$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BatchActions.loadBatchPathsById),
      switchMap(({ id }) =>
        this.http.get<APIResponse<Course[]>>(this.url + id + API.PATHS).pipe(
          map((pathData) =>
            BatchActions.loadBatchPathByIdSuccess({
              pathById: pathData.data[0],
            })
          ),
          catchError((error) =>
            of(BatchActions.loadBatchPathByIdFailed({ error }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}

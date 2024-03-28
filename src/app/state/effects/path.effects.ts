import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as PathActions from '../action/path.actions';
import { APIResponse } from 'src/app/models/ApiResponse';
import { Path, PathData } from 'src/app/models/Path';
import { EnrolledPathsData } from 'src/app/models/EnrolledPath';
import { API } from 'src/app/constants/enums/API';

@Injectable()
export class PathEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}
  private url = API.BASE_URL + API.STUDENTS + API.PATHS;

  loadAllPaths$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PathActions.loadAllPaths),
      mergeMap(() =>
        this.http.get<APIResponse<Path[]>>(this.url + API.PATHS_ALL).pipe(
          map((paths) =>
            PathActions.loadAllPathsSuccess({ paths: paths.data })
          ),
          catchError((error) => of(PathActions.loadAllPathsFailed({ error })))
        )
      )
    )
  );

  loadEnrolledPaths$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PathActions.loadEnrolledPaths),
      mergeMap(() =>
        this.http
          .get<APIResponse<EnrolledPathsData>>(
            API.BASE_URL + API.STUDENTS + API.ENROLLED_PATHS
          )
          .pipe(
            map((enrolledPaths) =>
              PathActions.loadEnrolledPathsSuccess({
                enrolledPaths: enrolledPaths.data.enrolledPaths,
              })
            ),
            catchError((error) =>
              of(PathActions.loadEnrolledPathsFailed({ error }))
            )
          )
      )
    )
  );

  loadNoOfEnrolledPaths$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PathActions.loadNumberOfEnrolledPaths),
      mergeMap(() =>
        this.http
          .get<APIResponse<number>>(
            API.BASE_URL + API.STUDENTS + API.NO_OF_ENROLLED_PATHS
          )
          .pipe(
            map((count) =>
              PathActions.loadNumberOfEnrolledPathsSuccess({
                numberOfEnrolledPaths: count.data,
              })
            ),
            catchError((error) =>
              of(PathActions.loadNumberOfEnrolledPathsFailed({ error }))
            )
          )
      )
    )
  );
  loadPathDataPath$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PathActions.loadPathById),
      mergeMap(({ id }) =>
        this.http
          .get<APIResponse<PathData>>(this.url + '/' + id + API.PATH_DATA)
          .pipe(
            map((path) =>
              PathActions.loadPathByIdSuccess({ pathById: path.data })
            ),
            catchError((error) => of(PathActions.loadPathByIdFailed({ error })))
          )
      )
    )
  );
}

import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as CourseActions from '../action/course.actions';
import { HttpClient } from '@angular/common/http';
import { Course } from 'src/app/models/Course';
import { APIResponse } from 'src/app/models/ApiResponse';
import { enrolledCourses } from 'src/app/models/EnrolledCourses';
import { Chapter } from 'src/app/models/Chapter';
import { API } from 'src/app/constants/enums/API';
import { Ratings } from 'src/app/models/Ratings';

@Injectable()
export class CourseEffects {
  private url = API.BASE_URL + API.STUDENTS;

  constructor(private actions$: Actions, private http: HttpClient) {}

  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.loadAllCourses),
      switchMap(() =>
        this.http.get<APIResponse<Course[]>>(this.url + API.COURSES_ALL).pipe(
          map((courses) =>
            CourseActions.loadAllCoursesSuccess({ courses: courses.data })
          ),
          catchError((error) => {
            return of(CourseActions.loadAllCoursesFailed({ error }));
          })
        )
      )
    )
  );
  loadNoOfEnrolledCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.loadNoOfEnrolledCourses),
      switchMap(() =>
        this.http
          .get<APIResponse<number>>(this.url + API.NO_OF_ENROLLED_COURSES)
          .pipe(
            map((count) =>
              CourseActions.loadNoOfEnrolledCoursesSuccess({
                count: count.data,
              })
            ),
            catchError((error) =>
              of(CourseActions.loadNoOfEnrolledCoursesFailed({ error }))
            )
          )
      )
    )
  );
  loadCourseAboutInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.loadCourseAboutInfo),
      switchMap(({ courseId }) =>
        this.http
          .get<APIResponse<Course>>(this.url + API.COURSES + '/' + courseId)
          .pipe(
            map((course) =>
              CourseActions.loadCourseAboutInfoSuccess({
                course: course.data,
              })
            ),
            catchError((error) => {
              return of(CourseActions.loadCourseAboutInfoFailed({ error }));
            })
          )
      )
    )
  );
  loadEnrolledCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.loadEnrolledCourses),
      switchMap(() =>
        this.http
          .get<APIResponse<enrolledCourses>>(this.url + API.ENROLLED_COURSES)
          .pipe(
            map((course) =>
              CourseActions.loadEnrolledCoursesSuccess({
                enrolledCourses: course.data.enrolledCourses,
              })
            ),
            catchError((error) =>
              of(CourseActions.loadEnrolledCoursesFailed({ error }))
            )
          )
      )
    )
  );
  loadChapterData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.loadChapterData),
      switchMap(({ courseId }) =>
        this.http
          .get<APIResponse<Chapter[]>>(
            this.url + API.COURSES + '/' + courseId + API.CHAPTERS
          )
          .pipe(
            map((chapterData) =>
              CourseActions.loadChapterDataSuccess({
                chapterData: chapterData.data,
              })
            ),
            catchError((error) =>
              of(CourseActions.loadChapterDataFailed({ error }))
            )
          )
      )
    )
  );
  loadFavoriteCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.loadFavoriteCourses),
      switchMap(() =>
        this.http
          .get<APIResponse<Course[]>>(
            API.BASE_URL + API.STUDENT + API.FAVOURITES
          )
          .pipe(
            map((courses) =>
              CourseActions.loadFavoriteCoursesSuccess({
                favoriteCourses: courses.data,
              })
            ),
            catchError((error) =>
              of(CourseActions.loadFavoriteCoursesFailed({ error }))
            )
          )
      )
    )
  );
  loadCourseRating$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.loadCourseRating),
      switchMap(({ id }) =>
        this.http
          .get<APIResponse<Ratings>>(
            API.BASE_URL + API.STUDENTS + API.COURSES + `/${id}` + API.RATINGS
          )
          .pipe(
            map((rating) =>
              CourseActions.loadCourseRatingSuccess({
                rating: rating.data,
              })
            ),
            catchError((error) =>
              of(CourseActions.loadCourseRatingFailed({ error }))
            )
          )
      )
    )
  );
}

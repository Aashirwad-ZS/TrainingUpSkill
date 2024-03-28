import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of, throwError } from 'rxjs';

import { PathEffects } from './path.effects';
import * as PathActions from '../action/path.actions';
import { HttpClient } from '@angular/common/http';
import { cold, hot } from 'jasmine-marbles';

describe('PathEffects', () => {
  let actions$: Observable<any>;
  let effects: PathEffects;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PathEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(PathEffects);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadAllPaths$', () => {
    it('should return a LOAD_ALL_PATHS_SUCCESS action on success', () => {
      const paths = [{ id: 1, name: 'Sample Path', pathName: 'sample_path', imageUrl: 'https://example.com/sample_image.jpg', isAccessible: true, noOfCourses: 5, progress: 0, completedAt: null }];
      const apiResponse = { data: paths }; // Wrap paths in an object with a data property
      const action = PathActions.loadAllPaths();
      const outcome = PathActions.loadAllPathsSuccess({ paths });

      actions$ = hot('-a', { a: action });
      const response = cold('-a|', { a: apiResponse }); // Use apiResponse here
      const expected = cold('--b', { b: outcome });

      spyOn(http, 'get').and.returnValue(response);

      expect(effects.loadAllPaths$).toBeObservable(expected);
    });

    it('should return a LOAD_ALL_PATHS_FAILED action on error', () => {
      const error = new Error('Error loading all paths');
      const action = PathActions.loadAllPaths();
      const outcome = PathActions.loadAllPathsFailed({ error });

      actions$ = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });

      spyOn(http, 'get').and.returnValue(response);

      expect(effects.loadAllPaths$).toBeObservable(expected);
    });
  });

  it('should return a LOAD_ENROLLED_PATHS_SUCCESS action on success', () => {
    const enrolledPaths = [{ id: 1, name: 'Sample Path', pathName: 'sample_path', imageUrl: 'https://example.com/sample_image.jpg', isAccessible: true, noOfCourses: 5, progress: 0, completedAt: null }];
    const apiResponse = { data: { enrolledPaths } };
    const action = PathActions.loadEnrolledPaths();
    const outcome = PathActions.loadEnrolledPathsSuccess({ enrolledPaths });

    actions$ = hot('-a', { a: action });
    const response = cold('-a|', { a: apiResponse });
    const expected = cold('--b', { b: outcome });

    spyOn(http, 'get').and.returnValue(response);

    expect(effects.loadEnrolledPaths$).toBeObservable(expected);
  });

  it('should return a LOAD_ENROLLED_PATHS_FAILED action on error', () => {
    const error = new Error('Error loading enrolled paths');
    const action = PathActions.loadEnrolledPaths();
    const outcome = PathActions.loadEnrolledPathsFailed({ error });

    actions$ = hot('-a', { a: action });
    const response = cold('-#|', {}, error);
    const expected = cold('--b', { b: outcome });

    spyOn(http, 'get').and.returnValue(response);

    expect(effects.loadEnrolledPaths$).toBeObservable(expected);
  });

  it('should return a LOAD_NUMBER_OF_ENROLLED_PATHS_SUCCESS action on success', () => {
    const numberOfEnrolledPaths = 5;
    const apiResponse = { data: numberOfEnrolledPaths };
    const action = PathActions.loadNumberOfEnrolledPaths();
    const outcome = PathActions.loadNumberOfEnrolledPathsSuccess({ numberOfEnrolledPaths });

    actions$ = hot('-a', { a: action });
    const response = cold('-a|', { a: apiResponse });
    const expected = cold('--b', { b: outcome });

    spyOn(http, 'get').and.returnValue(response);

    expect(effects.loadNoOfEnrolledPaths$).toBeObservable(expected);
  });

  it('should return a LOAD_NUMBER_OF_ENROLLED_PATHS_FAILED action on error', () => {
    const error = new Error('Error loading number of enrolled paths');
    const action = PathActions.loadNumberOfEnrolledPaths();
    const outcome = PathActions.loadNumberOfEnrolledPathsFailed({ error });

    actions$ = hot('-a', { a: action });
    const response = cold('-#|', {}, error);
    const expected = cold('--b', { b: outcome });

    spyOn(http, 'get').and.returnValue(response);

    expect(effects.loadNoOfEnrolledPaths$).toBeObservable(expected);
  });

  it('should return a LOAD_PATH_BY_ID_SUCCESS action on success', () => {
    const pathById = {
      id: 1,
      name: "Sample Path",
      imageUrl: "https://example.com/sample_image.jpg",
      about: "This is a sample path about text.",
      createdBy: {
        id: 1,
        name: "John Doe",
        imageUrl: "https://example.com/user_image.jpg",
        email: "john@example.com",
      },
      updatedAt: "2024-03-24T12:00:00Z",
      noOfCourses: 5,
      isEnrolled: true,
      isCompleted: false,
      createdAt: "2024-03-20T08:00:00Z",
      courses: [
        {
          id: 1,
          name: "Introduction to TypeScript",
          courseName: "Intro to TS",
          imageUrl: "http://example.com/course.jpg",
          isAccessible: true,
          description: "This is a beginner's course on TypeScript.",
          about: "In this course, you will learn the basics of TypeScript.",
          createdBy: {
            id: 101,
            name: "John Doe",
            imageUrl: "http://example.com/john.jpg",
            email: "john@example.com"
          },
          createdAt: "2024-03-24T13:46:46.000Z",
          isFavourite: false,
          progress: 0,
          enrolledAt: "2024-03-24T13:46:46.000Z",
          completedAt: "",
          noOfChapters: 10,
          updatedAt: "2024-03-24T13:46:46.000Z",
          level: 1
        }
      ],
    };
    const apiResponse = { data: pathById };
    const action = PathActions.loadPathById({ id: '1' });
    const outcome = PathActions.loadPathByIdSuccess({ pathById });

    actions$ = hot('-a', { a: action });
    const response = cold('-a|', { a: apiResponse });
    const expected = cold('--b', { b: outcome });

    spyOn(http, 'get').and.returnValue(response);

    expect(effects.loadPathDataPath$).toBeObservable(expected);
  });

  it('should return a LOAD_PATH_BY_ID_FAILED action on error', () => {
    const error = new Error('Error loading path data');
    const action = PathActions.loadPathById({ id: '1' });
    const outcome = PathActions.loadPathByIdFailed({ error });

    actions$ = hot('-a', { a: action });
    const response = cold('-#|', {}, error);
    const expected = cold('--b', { b: outcome });

    spyOn(http, 'get').and.returnValue(response);

    expect(effects.loadPathDataPath$).toBeObservable(expected);
  });

});


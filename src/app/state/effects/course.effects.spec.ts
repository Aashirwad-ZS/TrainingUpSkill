import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Actions } from '@ngrx/effects';

import { CourseEffects } from './course.effects';
import * as CourseActions from '../action/course.actions';
import { HttpClient } from '@angular/common/http';

describe('CourseEffects', () => {
  let actions$: Observable<any>;
  let effects: CourseEffects;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CourseEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(CourseEffects);
    http = TestBed.inject(HttpClient);
  });

  it('should load all courses', (done) => {
    const courses = [{
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
    }];
    const action = CourseActions.loadAllCourses();
    const outcome = CourseActions.loadAllCoursesSuccess({ courses });

    actions$ = of(action);

    spyOn(http, 'get').and.returnValue(of({ data: courses })); // Mock the http.get method to return the data property

    effects.loadCourses$.subscribe(action => {
      expect(action).toEqual(outcome);
      done();
    });
  });

  it('should fail to load all courses', (done) => {
    const error = new Error('Error loading courses');
    const action = CourseActions.loadAllCourses();
    const outcome = CourseActions.loadAllCoursesFailed({ error });

    actions$ = of(action);

    spyOn(http, 'get').and.returnValue(throwError(error));

    effects.loadCourses$.subscribe(action => {
      expect(action).toEqual(outcome);
      done();
    });
  });

  it('should load number of enrolled courses', (done) => {
    const count = 5;
    const action = CourseActions.loadNoOfEnrolledCourses();
    const outcome = CourseActions.loadNoOfEnrolledCoursesSuccess({ count });

    actions$ = of(action);

    spyOn(http, 'get').and.returnValue(of({ data: count }));

    effects.loadNoOfEnrolledCourses$.subscribe(action => {
      expect(action).toEqual(outcome);
      done();
    });
  });

  it('should fail to load number of enrolled courses', (done) => {
    const error = new Error('Error loading number of enrolled courses');
    const action = CourseActions.loadNoOfEnrolledCourses();
    const outcome = CourseActions.loadNoOfEnrolledCoursesFailed({ error });

    actions$ = of(action);

    spyOn(http, 'get').and.returnValue(throwError(error));

    effects.loadNoOfEnrolledCourses$.subscribe(action => {
      expect(action).toEqual(outcome);
      done();
    });
  });

  it('should load course about info', (done) => {
    const course = {
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
    };
    const action = CourseActions.loadCourseAboutInfo({ courseId: '1' });
    const outcome = CourseActions.loadCourseAboutInfoSuccess({ course });

    actions$ = of(action);

    spyOn(http, 'get').and.returnValue(of({ data: course })); // Mock the http.get method to return the data property

    effects.loadCourseAboutInfo$.subscribe(action => {
      expect(action).toEqual(outcome);
      done();
    });
  });

  it('should fail to load course about info', (done) => {
    const error = new Error('Error loading course about info');
    const action = CourseActions.loadCourseAboutInfo({ courseId: '1' });
    const outcome = CourseActions.loadCourseAboutInfoFailed({ error });

    actions$ = of(action);

    spyOn(http, 'get').and.returnValue(throwError(error));

    effects.loadCourseAboutInfo$.subscribe(action => {
      expect(action).toEqual(outcome);
      done();
    });
  });


  it('should load enrolled courses', (done) => {
    const enrolledCourses = [{
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
    }];
    const action = CourseActions.loadEnrolledCourses();
    const outcome = CourseActions.loadEnrolledCoursesSuccess({ enrolledCourses });

    actions$ = of(action);

    spyOn(http, 'get').and.returnValue(of({ data: { enrolledCourses } })); // Mock the http.get method to return the data property

    effects.loadEnrolledCourses$.subscribe(action => {
      expect(action).toEqual(outcome);
      done();
    });
  });

  it('should fail to load enrolled courses', (done) => {
    const error = new Error('Error loading enrolled courses');
    const action = CourseActions.loadEnrolledCourses();
    const outcome = CourseActions.loadEnrolledCoursesFailed({ error });

    actions$ = of(action);

    spyOn(http, 'get').and.returnValue(throwError(error));

    effects.loadEnrolledCourses$.subscribe(action => {
      expect(action).toEqual(outcome);
      done();
    });
  });

  it('should load chapter data', (done) => {
    const chapterData = [{
      id: 1,
      name: "Introduction to TypeScript",
      resourceResponses: [
        {
          id: 101,
          resourceName: "TypeScript Basics",
          resourceLink: "http://example.com/resource1",
          isCompleted: false,
          isVisited: false
        },
        {
          id: 102,
          resourceName: "Advanced TypeScript",
          resourceLink: "http://example.com/resource2",
          isCompleted: false,
          isVisited: false
        }
      ],
      quizResponses: [
        {
          id: 201,
          name: "Quiz 1",
          link: "http://example.com/quiz1",
          status: "Not Started",
          quizType: "Multiple Choice"
        },
        {
          id: 202,
          name: "Quiz 2",
          link: "http://example.com/quiz2",
          status: "Not Started",
          quizType: "True or False"
        }
      ],
      progress: 0
    }];
    const action = CourseActions.loadChapterData({ courseId: '1' });
    const outcome = CourseActions.loadChapterDataSuccess({ chapterData });

    actions$ = of(action);

    spyOn(http, 'get').and.returnValue(of({ data: chapterData })); // Mock the http.get method to return the data property

    effects.loadChapterData$.subscribe(action => {
      expect(action).toEqual(outcome);
      done();
    });
  });

  it('should fail to load chapter data', (done) => {
    const error = new Error('Error loading chapter data');
    const action = CourseActions.loadChapterData({ courseId: '1' });
    const outcome = CourseActions.loadChapterDataFailed({ error });

    actions$ = of(action);

    spyOn(http, 'get').and.returnValue(throwError(error));

    effects.loadChapterData$.subscribe(action => {
      expect(action).toEqual(outcome);
      done();
    });
  });

  it('should load favorite courses', (done) => {
    const favoriteCourses = [{
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
    }];
    const action = CourseActions.loadFavoriteCourses();
    const outcome = CourseActions.loadFavoriteCoursesSuccess({ favoriteCourses });

    actions$ = of(action);

    spyOn(http, 'get').and.returnValue(of({ data: favoriteCourses })); // Mock the http.get method to return the data property

    effects.loadFavoriteCourses$.subscribe(action => {
      expect(action).toEqual(outcome);
      done();
    });
  });

  it('should fail to load favorite courses', (done) => {
    const error = new Error('Error loading favorite courses');
    const action = CourseActions.loadFavoriteCourses();
    const outcome = CourseActions.loadFavoriteCoursesFailed({ error });

    actions$ = of(action);

    spyOn(http, 'get').and.returnValue(throwError(error));

    effects.loadFavoriteCourses$.subscribe(action => {
      expect(action).toEqual(outcome);
      done();
    });
  });
});

import * as CourseActions from './course.actions';
import { Course } from '../../models/Course';
import { Chapter } from 'src/app/models/Chapter';

describe('Course Actions', () => {
  it('should create the loadAllCourses action', () => {
    const action = CourseActions.loadAllCourses();
    expect(action.type).toEqual('[Course] Load All Courses');
  });

  it('should create the loadAllCoursesSuccess action', () => {
    const courses: Course[] = [{
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
    const action = CourseActions.loadAllCoursesSuccess({ courses });
    expect(action.type).toEqual('[Course] Load All Courses Success');
    expect(action.courses).toEqual(courses);
  });

  it('should create the loadEnrolledCourses action', () => {
    const action = CourseActions.loadEnrolledCourses();
    expect(action.type).toEqual('[Course] Load Enrolled Courses');
  });

  it('should create the loadEnrolledCoursesSuccess action', () => {
    const enrolledCourses: Course[] = [{
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
    const action = CourseActions.loadEnrolledCoursesSuccess({ enrolledCourses });
    expect(action.type).toEqual('[Course] Load Enrolled Courses Success');
    expect(action.enrolledCourses).toEqual(enrolledCourses);
  });

  it('should create the loadFavoriteCourses action', () => {
    const action = CourseActions.loadFavoriteCourses();
    expect(action.type).toEqual('[Course] Load Favorite Courses');
  });

  it('should create the loadFavoriteCoursesSuccess action', () => {
    const favoriteCourses: Course[] = [{
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
    const action = CourseActions.loadFavoriteCoursesSuccess({ favoriteCourses });
    expect(action.type).toEqual('[Course] Load Favorite Courses Success');
    expect(action.favoriteCourses).toEqual(favoriteCourses);
  });

  it('should create the loadCourseAboutInfo action', () => {
    const courseId = '2';
    const action = CourseActions.loadCourseAboutInfo({ courseId });
    expect(action.type).toEqual('[Course] Load Course About Info');
    expect(action.courseId).toEqual(courseId);
  });

  it('should create the loadCourseAboutInfoSuccess action', () => {
    const course: Course = {
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
    const action = CourseActions.loadCourseAboutInfoSuccess({ course });
    expect(action.type).toEqual('[Course] Load Course About Info Success');
    expect(action.course).toEqual(course);
  });

  it('should create the loadChapterData action', () => {
    const courseId = '1';
    const action = CourseActions.loadChapterData({ courseId });
    expect(action.type).toEqual('[Course] Load Chapter Data');
    expect(action.courseId).toEqual(courseId);
  });

  it('should create the loadChapterDataSuccess action', () => {
    const chapterData: Chapter[] = [{
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
    const action = CourseActions.loadChapterDataSuccess({ chapterData });
    expect(action.type).toEqual('[Course] Load Chapter Data Success');
    expect(action.chapterData).toEqual(chapterData);
  });

  it('should create the loadNoOfEnrolledCourses action', () => {
    const action = CourseActions.loadNoOfEnrolledCourses();
    expect(action.type).toEqual('[Course] Load Number of Enrolled Courses');
  });

  it('should create the loadNoOfEnrolledCoursesSuccess action', () => {
    const count = 5;
    const action = CourseActions.loadNoOfEnrolledCoursesSuccess({ count });
    expect(action.type).toEqual('[Course] Load Number of Enrolled Courses Success');
    expect(action.count).toEqual(count);
  });

  it('should create the loadAllCoursesFailed action', () => {
    const error = 'Error message';
    const action = CourseActions.loadAllCoursesFailed({ error });
    expect(action.type).toEqual('[Course] Load All Courses Failed');
    expect(action.error).toEqual(error);
  });

  it('should create the loadEnrolledCoursesFailed action', () => {
    const error = 'Error message';
    const action = CourseActions.loadEnrolledCoursesFailed({ error });
    expect(action.type).toEqual('[Course] Load Enrolled Courses Failed');
    expect(action.error).toEqual(error);
  });

  it('should create the loadCourseAboutInfoFailed action', () => {
    const error = 'Error message';
    const action = CourseActions.loadCourseAboutInfoFailed({ error });
    expect(action.type).toEqual('[Course] Load Course About Info Failed');
    expect(action.error).toEqual(error);
  });

  it('should create the loadChapterDataFailed action', () => {
    const error = 'Error message';
    const action = CourseActions.loadChapterDataFailed({ error });
    expect(action.type).toEqual('[Course] Load Chapter Data Failed');
    expect(action.error).toEqual(error);
  });

  it('should create the loadNoOfEnrolledCoursesFailed action', () => {
    const error = 'Error message';
    const action = CourseActions.loadNoOfEnrolledCoursesFailed({ error });
    expect(action.type).toEqual('[Course] Load Number of Enrolled Courses Failed');
    expect(action.error).toEqual(error);
  });

  it('should create the loadFavoriteCoursesFailed action', () => {
    const error = 'Error message';
    const action = CourseActions.loadFavoriteCoursesFailed({ error });
    expect(action.type).toEqual('[Course] Load Favorite Courses Failed');
    expect(action.error).toEqual(error);
  });

});

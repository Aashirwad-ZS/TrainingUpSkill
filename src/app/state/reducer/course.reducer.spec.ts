import { initialAllCoursesState,
         initialEnrolledCoursesState,
         initialCourseAboutInfoState,
         initialChapterDataState,
         initialNoOfEnrolledCoursesState,
         initialFavoriteCoursesState,
         allCoursesReducer,
         enrolledCoursesReducer,
         courseAboutInfoReducer,
         chapterDataReducer,
         noOfEnrolledCoursesReducer,
         favoriteCoursesReducer } from './course.reducer';
import * as CourseActions from '../action/course.actions';

describe('CourseReducer', () => {

  it('should handle loadAllCourses actions', () => {
    const action = CourseActions.loadAllCourses();
    const state = allCoursesReducer(initialAllCoursesState, action);

    expect(state.isLoading).toBe(true);
    expect(state.error).toBe(null);
  });

  it('should handle loadAllCoursesSuccess actions', () => {
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
    const action = CourseActions.loadAllCoursesSuccess({ courses });
    const state = allCoursesReducer(initialAllCoursesState, action);

    expect(state.allCourses).toBe(courses);
    expect(state.isLoading).toBe(true);
    expect(state.error).toBe(null);
  });

  it('should handle loadAllCoursesFailed action', () => {
    const error = new Error("LoadAllCourses failed");
    const action = CourseActions.loadAllCoursesFailed({ error });
    const state = allCoursesReducer(initialAllCoursesState, action);

    expect(state.isLoading).toBe(false);
    expect(state.error).toBe(error);
  });

  it('should handle loadEnrolledCourses actions', () => {
    const action = CourseActions.loadEnrolledCourses();
    const state = enrolledCoursesReducer(initialEnrolledCoursesState, action);

    expect(state.isLoading).toBe(true);
    expect(state.error).toBe(null);
  });

  it('should handle loadEnrolledCoursesSuccess actions', () => {
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
    const action = CourseActions.loadEnrolledCoursesSuccess({ enrolledCourses });
    const state = enrolledCoursesReducer(initialEnrolledCoursesState, action);

    expect(state.enrolledCourses).toBe(enrolledCourses);
    expect(state.isLoading).toBe(false);
    expect(state.error).toBe(null);
  });

  it('should handle loadEnrolledCoursesFailed action', () => {
    const error = new Error("LoadEnrolledCourses failed");
    const action = CourseActions.loadEnrolledCoursesFailed({ error });
    const state = enrolledCoursesReducer(initialEnrolledCoursesState, action);

    expect(state.isLoading).toBe(false);
    expect(state.error).toBe(error);
  });

  it('should handle loadCourseAboutInfo actions', () => {
    const action = CourseActions.loadCourseAboutInfo({courseId: '2'});
    const state = courseAboutInfoReducer(initialCourseAboutInfoState, action);

    expect(state.isLoading).toBe(true);
    expect(state.error).toBe(null);
  });

  it('should handle loadCourseAboutInfoSuccess actions', () => {
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

    const action = CourseActions.loadCourseAboutInfoSuccess({course});
    const state = courseAboutInfoReducer(initialCourseAboutInfoState, action);

    expect(state.courseAboutInfo).toEqual(course);
    expect(state.isLoading).toBe(false);
  });

  it('should handle loadCourseAboutInfoFailed action', () => {
    const error = new Error("LoadCourseAboutInfo failed");
    const action = CourseActions.loadCourseAboutInfoFailed({ error });
    const state = courseAboutInfoReducer(initialCourseAboutInfoState, action);

    expect(state.isLoading).toBe(false);
    expect(state.error).toBe(error);
  });

  it('should handle loadChapterData action', () => {
    const action = CourseActions.loadChapterData({courseId: '2'});
    const state = chapterDataReducer(initialChapterDataState,action);

    expect(state.isLoading).toBe(true);
    expect(state.error).toBe(null);
  });

  it('should handle loadChapterDataSuccess action', () => {
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
    const action = CourseActions.loadChapterDataSuccess({chapterData});
    const state = chapterDataReducer(initialChapterDataState,action);

    expect(state.chapterData).toBe(chapterData);
    expect(state.isLoading).toBe(false);
  });

  it('should handle loadChapterDataError action', () => {
    const error = new Error("LoadChapterData failed");
    const action = CourseActions.loadChapterDataFailed({error});
    const state = chapterDataReducer(initialChapterDataState,action);

    expect(state.isLoading).toBe(false);
    expect(state.error).toBe(error);
  });

  it('should handle loadNoOfEnrolledCourses action', () => {
    const action = CourseActions.loadNoOfEnrolledCourses();
    const state = noOfEnrolledCoursesReducer(initialNoOfEnrolledCoursesState,action);

    expect(state.isLoading).toBe(true);
    expect(state.error).toBe(null);
  });

  it('should handle loadNoOfEnrolledCoursesSuccess action', () => {
    const count = 3;
    const action = CourseActions.loadNoOfEnrolledCoursesSuccess({count});
    const state = noOfEnrolledCoursesReducer(initialNoOfEnrolledCoursesState,action);

    expect(state.noOfEnrolledCourses).toBe(count);
    expect(state.isLoading).toBe(false);
  });

  it('should handle loadNoOfEnrolledCoursesSuccess action', () => {
    const error = new Error("LoadNoOfEnrolledCourses failed");
    const action = CourseActions.loadNoOfEnrolledCoursesFailed({error});
    const state = noOfEnrolledCoursesReducer(initialNoOfEnrolledCoursesState,action);

    expect(state.isLoading).toBe(false);
    expect(state.error).toBe(error);
  });

  it('should handle loadFavoriteCourses action', () => {
    const action = CourseActions.loadFavoriteCourses();
    const state = favoriteCoursesReducer(initialFavoriteCoursesState, action);

    expect(state.isLoading).toBe(true);
    expect(state.error).toBe(null);
  });

  it('should handle loadFavoriteCoursesSuccess action', () => {
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
    const action = CourseActions.loadFavoriteCoursesSuccess({favoriteCourses});
    const state = favoriteCoursesReducer(initialFavoriteCoursesState, action);

    expect(state.favoriteCourses).toBe(favoriteCourses);
    expect(state.isLoading).toBe(false);
  })

  it('should handle loadFavoriteCoursesFailed action', () => {
    const error = new Error("LoadFavoriteCourses action");
    const action = CourseActions.loadFavoriteCoursesFailed({error});
    const state = favoriteCoursesReducer(initialFavoriteCoursesState,action);

    expect(state.isLoading).toBe(false);
    expect(state.error).toBe(error);
  });
});

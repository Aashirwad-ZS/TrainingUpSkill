import * as fromCourse from './course.selector';
import { AllCoursesState,
  EnrolledCoursesState,
  CourseAboutInfoState,
  ChapterDataState,
  NoOfEnrolledCoursesState,
  FavoriteCoursesState, } from '../reducer/course.reducer';

describe('Course Selectors', () => {
  const initialAllCoursesState: AllCoursesState = {
    allCourses: [],
    isLoading: true,
    error: null,
  };

  const initialEnrolledCoursesState: EnrolledCoursesState = {
    enrolledCourses: [],
    isLoading: true,
    error: null,
  };

  const initialCourseAboutInfoState: CourseAboutInfoState = {
    courseAboutInfo: {
      id: 0,
      name: '',
      courseName: '',
      imageUrl: '',
      isAccessible: false,
      description: '',
      about: '',
      createdBy: {
        id: 0,
        name: '',
        imageUrl: '',
        email: '',
      },
      createdAt: '',
      isFavourite: false,
      progress: 0,
      enrolledAt: '',
      completedAt: '',
      noOfChapters: 0,
      updatedAt: '',
      level: 0,
    },
    isLoading: true,
    error: null,
  };

  const initialChapterDataState: ChapterDataState = {
    chapterData: [],
    isLoading: true,
    error: null,
  };

  const initialNoOfEnrolledCoursesState: NoOfEnrolledCoursesState = {
    noOfEnrolledCourses: 0,
    isLoading: true,
    error: null,
  };

  const initialFavoriteCoursesState: FavoriteCoursesState = {
    favoriteCourses: [],
    isLoading: true,
    error: null,
  };

  it('should select all courses', () => {
    const result = fromCourse.selectAllCourses.projector(initialAllCoursesState);
    expect(result).toEqual([]);
  });

  it('should select the loading state of all courses', () => {
    const result = fromCourse.selectAllCoursesLoading.projector(initialAllCoursesState);
    expect(result).toEqual(true);
  });

  it('should select the error of all courses', () => {
    const result = fromCourse.selectAllCoursesError.projector(initialAllCoursesState);
    expect(result).toBeNull();
  });

  it('should select the enrolled courses', () => {
    const result = fromCourse.selectEnrolledCourses.projector(initialEnrolledCoursesState);
    expect(result).toEqual([]);
  });

  it('should select the loading state of enrolled courses', () => {
    const result = fromCourse.selectEnrolledCoursesLoading.projector(initialEnrolledCoursesState);
    expect(result).toBe(true);
  });

  it('should select the error for enrolled courses', () => {
    const result = fromCourse.selectEnrolledCoursesError.projector(initialEnrolledCoursesState);
    expect(result).toBeNull();
  });

  it('should select the course about info', () => {
    const result = fromCourse.selectCourseAboutInfo.projector(initialCourseAboutInfoState);
    expect(result).toBe(initialCourseAboutInfoState.courseAboutInfo);
  });

  it('should select the loading state of course about info', () => {
    const result = fromCourse.selectCourseAboutInfoLoading.projector(initialCourseAboutInfoState);
    expect(result).toBe(true);
  });

  it('should select the error of course about info', () => {
    const result = fromCourse.selectCourseAboutInfoError.projector(initialCourseAboutInfoState);
    expect(result).toEqual(null);
  });

  it('should select the chapter data', () => {
    const result = fromCourse.selectChapterData.projector(initialChapterDataState);
    expect(result).toEqual([]);
  });

  it('should select the loading state of chapter data', () => {
    const result = fromCourse.selectChapterDataLoading.projector(initialChapterDataState);
    expect(result).toBe(true);
  })

  it('should select the error of chapter data', () => {
    const result = fromCourse.selectChapterDataError.projector(initialChapterDataState);
    expect(result).toEqual(null);
  })

  it('should select the number of enrolled courses', () => {
    const result = fromCourse.selectNoOfEnrolledCourses.projector(initialNoOfEnrolledCoursesState);
    expect(result).toEqual(0);
  });

  it('should select the loading state of number of enrolled courses', () => {
    const result = fromCourse.selectNoOfEnrolledCoursesLoading.projector(initialNoOfEnrolledCoursesState);
    expect(result).toBe(true);
  });

  it('should select the error of number of enrolled courses', () => {
    const result = fromCourse.selectNoOfEnrolledCoursesError.projector(initialNoOfEnrolledCoursesState);
    expect(result).toEqual(null);
  });

  it('should select the favorite courses', () => {
    const result = fromCourse.selectFavoriteCourses.projector(initialFavoriteCoursesState);
    expect(result).toEqual([]);
  });

  it('should select the loading state of favorite courses', () => {
    const result = fromCourse.selectFavoriteCoursesLoading.projector(initialFavoriteCoursesState);
    expect(result).toBe(true);
  });

  it('should select the error of favorite courses', () => {
    const result = fromCourse.selectFavoriteCoursesError.projector(initialFavoriteCoursesState);
    expect(result).toEqual(null);
  });

});

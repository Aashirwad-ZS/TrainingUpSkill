import * as PathActions from './path.actions';
import { Path, PathData } from '../../models/Path';

describe('Path Actions', () => {
  it('should create the loadAllPaths action', () => {
    const action = PathActions.loadAllPaths();
    expect(action.type).toEqual('[Path] Load All Paths');
  });

  it('should create the loadAllPathsSuccess action', () => {
    const paths: Path[] = [{
      id: 1,
      name: "Sample Path",
      pathName: "sample_path",
      imageUrl: "https://example.com/sample_image.jpg",
      isAccessible: true,
      noOfCourses: 5,
      progress: 0,
      completedAt: null,
    }];
    const action = PathActions.loadAllPathsSuccess({ paths });
    expect(action.type).toEqual('[Path] Load All Paths Success');
    expect(action.paths).toEqual(paths);
  });

  it('should create the loadAllPathsFailed action', () => {
    const error = 'Error message';
    const action = PathActions.loadAllPathsFailed({ error });
    expect(action.type).toEqual('[Path] Load All Paths Failed');
    expect(action.error).toEqual(error);
  });

  it('should create the loadPathById action', () => {
    const id = 'path1';
    const action = PathActions.loadPathById({ id });
    expect(action.type).toEqual('[Path] Load Path By ID');
    expect(action.id).toEqual(id);
  });

  it('should create the loadPathByIdSuccess action', () => {
    const pathById: PathData = {
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
    const action = PathActions.loadPathByIdSuccess({ pathById });
    expect(action.type).toEqual('[Path] Load Path By ID Success');
    expect(action.pathById).toEqual(pathById);
  });

  it('should create the loadPathByIdFailed action', () => {
    const error = 'Error message';
    const action = PathActions.loadPathByIdFailed({ error });
    expect(action.type).toEqual('[Path] Load Path By ID Failed');
    expect(action.error).toEqual(error);
  });

  it('should create the loadEnrolledPaths action', () => {
    const action = PathActions.loadEnrolledPaths();
    expect(action.type).toEqual('[Path] Load Enrolled Paths');
  });

  it('should create the loadEnrolledPathsSuccess action', () => {
    const enrolledPaths: Path[] = [{
      id: 1,
      name: "Sample Path",
      pathName: "sample_path",
      imageUrl: "https://example.com/sample_image.jpg",
      isAccessible: true,
      noOfCourses: 5,
      progress: 0,
      completedAt: null,
    }];
    const action = PathActions.loadEnrolledPathsSuccess({ enrolledPaths });
    expect(action.type).toEqual('[Path] Load Enrolled Paths Success');
    expect(action.enrolledPaths).toEqual(enrolledPaths);
  });

  it('should create the loadEnrolledPathsFailed action', () => {
    const error = 'Error message';
    const action = PathActions.loadEnrolledPathsFailed({ error });
    expect(action.type).toEqual('[Path] Load Enrolled Paths Failed');
    expect(action.error).toEqual(error);
  });

  it('should create the loadNumberOfEnrolledPaths action', () => {
    const action = PathActions.loadNumberOfEnrolledPaths();
    expect(action.type).toEqual('[Path] Load Number of Enrolled Paths');
  });

  it('should create the loadNumberOfEnrolledPathsSuccess action', () => {
    const numberOfEnrolledPaths = 5;
    const action = PathActions.loadNumberOfEnrolledPathsSuccess({ numberOfEnrolledPaths });
    expect(action.type).toEqual('[Path] Load Number of Enrolled Paths Success');
    expect(action.numberOfEnrolledPaths).toEqual(numberOfEnrolledPaths);
  });

  it('should create the loadNumberOfEnrolledPathsFailed action', () => {
    const error = 'Error message';
    const action = PathActions.loadNumberOfEnrolledPathsFailed({ error });
    expect(action.type).toEqual('[Path] Load Number of Enrolled Paths Failed');
    expect(action.error).toEqual(error);
  });
});

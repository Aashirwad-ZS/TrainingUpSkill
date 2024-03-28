import * as fromPath from './path.selector';
import {
  AllPathsState,
  EnrolledPathsState,
  PathByIdState,
  numberOfEnrolledPathsState,
} from '../reducer/path.reducer';

describe('Path Selectors', () => {
  const initialAllPathsState: AllPathsState = {
    allPaths: [],
    isLoading: true,
    error: null,
  };

  const initialPathByIdState: PathByIdState = {
    pathById: {
      id: 0,
      name: '',
      imageUrl: '',
      about: '',
      createdBy: {
        id: 0,
        name: '',
        imageUrl: '',
        email: '',
      },
      updatedAt: '',
      noOfCourses: 0,
      isEnrolled: false,
      isCompleted: false,
      createdAt: '',
      courses: [],
    },
    isLoading: true,
    error: null,
  };

  const initialEnrolledPathsState: EnrolledPathsState = {
    enrolledPaths: [],
    isLoading: true,
    error: null,
  };
  const initialNumberOfEnrolledPathState: numberOfEnrolledPathsState = {
    numberOfEnrolledPaths: 0,
    isLoading: true,
    error: null,
  };

  it('should select all paths', () => {
    const result = fromPath.selectAllPaths.projector(initialAllPathsState);
    expect(result).toEqual([]);
  });

  it('should select loading state of all paths', () => {
    const result = fromPath.selectAllPathsLoading.projector(initialAllPathsState);
    expect(result).toEqual(true);
  });

  it('should select the error of all paths', () => {
    const result = fromPath.selectAllPathsError.projector(initialAllPathsState);
    expect(result).toBeNull();
  });

  it('should select the path by id', () => {
    const result = fromPath.selectPathById.projector(initialPathByIdState);
    expect(result).toBe(initialPathByIdState.pathById);
  });

  it('should select the loading state of path by id', () => {
    const result = fromPath.selectPathByIdLoading.projector(initialPathByIdState);
    expect(result).toEqual(true);
  });

  it('should select the error for path by id', () => {
    const result = fromPath.selectPathByIdError.projector(initialPathByIdState);
    expect(result).toBeNull();
  });

  it('should select the enrolled paths', () => {
    const result = fromPath.selectEnrolledPaths.projector(initialEnrolledPathsState);
    expect(result).toEqual([]);
  });

  it('should select the loading state of enrolled paths', () => {
    const result = fromPath.selectEnrolledPathsLoading.projector(initialEnrolledPathsState);
    expect(result).toBe(true);
  })

  it('should select the error of enrolled paths', () => {
    const result = fromPath.selectEnrolledPathsError.projector(initialEnrolledPathsState);
    expect(result).toBeNull;
  })

  it('should select the number of enrolled paths', () => {
    const result = fromPath.selectNoOfEnrolledPaths.projector(initialNumberOfEnrolledPathState);
    expect(result).toBe(0);
  })

  it('should select the loading state of number of enrolled paths', () => {
    const result = fromPath.selectNoOfEnrolledPathsLoading.projector(initialNumberOfEnrolledPathState);
    expect(result).toBe(true);
  })

  it('should select the error of number of enrolled paths', () => {
    const result = fromPath.selectNoOfEnrolledPathsError.projector(initialNumberOfEnrolledPathState);
    expect(result).toBeNull;
  })

});

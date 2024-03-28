import { Batch } from 'src/app/models/Batch';
import * as BatchActions from '../action/batch.actions';
import { initialBatchState,
         initialEnrolledBatchState,
         initialStudentState,
         initialTrainerState,
         initialBatchDetailsState,
         initialBatchPathDataState,
         batchReducer,
         studentReducer,
         trainerReducer,
         batchDetailsReducer,
         pathDataReducer,
         enrolledBatchesReducer } from './batch.reducer';

describe('Batch Reducer', () => {

  it('should handle loadAllBatches action', () => {
    const action = BatchActions.loadAllBatches();
    const state = batchReducer(initialBatchState, action);

    expect(state.isLoading).toBe(true);
    expect(state.error).toBe(null);
  });

  it('should handle loadAllBatchesSuccess', () => {
    const batches = [{
      createdAt: '2024-03-24T13:00:03Z',
      createdBy: {
        id: 1,
        name: 'John Doe',
        imageUrl: 'https://example.com/john-doe.jpg',
        email: 'john.doe@example.com',
        isActive: true,
      },
      endDate: '2024-06-24T13:00:03Z',
      startDate: '2024-03-24T13:00:03Z',
      id: 1,
      isAccessible: true,
      name: 'Batch 1',
      noOfPaths: 10,
      noOfStudents: 30,
      noOfTrainers: 5,
      streamName: 'Stream 1',
      stream: {
        streamId: 1,
        streamName: 'Stream 1',
      },
      progress: 50,
    }];
    const action = BatchActions.loadAllBatchesSuccess({batches});
    const state = batchReducer(initialBatchState, action);

    expect(state.batches).toBe(batches);
    expect(state.isLoading).toBe(false);
    expect(state.error).toBe(null);
  });

  it('should handle loadAllBatchesFailed action', () => {
    const error = new Error('LoadAllBatches Failed');
    const action = BatchActions.loadAllBatchesFailed({error});
    const state = batchReducer(initialBatchState, action);

    expect(state.isLoading).toBe(false);
    expect(state.error).toBe(error);
  });

  it('should handle loadStudentsById action', () => {
    const action = BatchActions.loadStudentsById({id: '2'});
    const state = studentReducer(initialStudentState, action);

    expect(state.isLoading).toBe(true);
    expect(state.error).toBe(null);
  });

  it('should handle loadStudentByIdSuccess action', () => {
    const students = [{
      email: 'john.doe@example.com',
      id: 1,
      imageUrl: 'https://example.com/john-doe.jpg',
      name: 'John Doe',
      isActive: true,
    }];
    const action = BatchActions.loadStudentsByIdSuccess({students});
    const state = studentReducer(initialStudentState, action);

    expect(state.students).toBe(students);
    expect(state.isLoading).toBe(false);
    expect(state.error).toBe(null);
  });

  it('should handle loadStudentsByIdFailed action', () => {
    const error = new Error('LoadStudentsById Failed');
    const action = BatchActions.loadStudentsByIdFailed({error});
    const state = studentReducer(initialStudentState, action);

    expect(state.isLoading).toBe(false);
    expect(state.error).toBe(error);
  });

  it('should handle loadTrainersById', () => {
    const action = BatchActions.loadTrainersById({id: '2'});
    const state = trainerReducer(initialTrainerState, action);

    expect(state.isLoading).toBe(true);
    expect(state.error).toBe(null);
  });

  it('should handle loadTrainersByIdSuccess action', () => {
    const trainers = [{
      email: 'john.doe@example.com',
      id: 1,
      imageUrl: 'https://example.com/john-doe.jpg',
      name: 'John Doe',
      isActive: true,
    }];
    const action = BatchActions.loadTrainersByIdSuccess({trainers});
    const state = trainerReducer(initialTrainerState, action);

    expect(state.trainers).toBe(trainers);
    expect(state.isLoading).toBe(false);
    expect(state.error).toBe(null);
  });

  it('should handle loadTrainersByIdFailed action', () => {
    const error = new Error('LoadTrainersByID Failed');
    const action = BatchActions.loadTrainersByIdFailed({error});
    const state = trainerReducer(initialTrainerState, action);

    expect(state.isLoading).toBe(false);
    expect(state.error).toBe(error);
  });

  it('should handle loadBatchById', () => {
    const action = BatchActions.loadBatchById({id: '2'});
    const state = batchDetailsReducer(initialBatchDetailsState, action);

    expect(state.isLoading).toBe(true);
    expect(state.error).toBe(null);
  });

  it('should handle loadBatchByIdSuccess action', () => {
    const batchDetails = {
      createdAt: '2024-03-24T13:00:03Z',
      createdBy: {
        id: 1,
        name: 'John Doe',
        imageUrl: 'https://example.com/john-doe.jpg',
        email: 'john.doe@example.com',
        isActive: true,
      },
      endDate: '2024-06-24T13:00:03Z',
      startDate: '2024-03-24T13:00:03Z',
      id: 1,
      isAccessible: true,
      name: 'Batch 1',
      noOfPaths: 10,
      noOfStudents: 30,
      noOfTrainers: 5,
      streamName: 'Stream 1',
      stream: {
        streamId: 1,
        streamName: 'Stream 1',
      },
      progress: 50,
    };
    const action = BatchActions.loadBatchByIdSuccess({batchDetails});
    const state = batchDetailsReducer(initialBatchDetailsState, action);

    expect(state.batchDetails).toBe(batchDetails);
    expect(state.isLoading).toBe(false);
    expect(state.error).toBe(null);
  });

  it('should handle loadBatchByIdFailed action', () => {
    const error = new Error('LoadBatchById Failed');
    const action = BatchActions.loadBatchPathByIdFailed({error});
    const state = batchDetailsReducer(initialBatchDetailsState, action);

    expect(state.isLoading).toBe(false);
    expect(state.error).toBe(error);
  });

  it('should handle loadBatchPathsById', () => {
    const action = BatchActions.loadBatchPathsById({id: '2'});
    const state = pathDataReducer(initialBatchPathDataState, action);

    expect(state.isLoading).toBe(true);
    expect(state.error).toBe(null);
  });

  it('should handle loadBatchPathsByIdSuccess action', () => {
    const pathById = {
      id: 1,
      name: 'Path 1',
      courseName: 'Course 1',
      imageUrl: 'https://example.com/path-1.jpg',
      isAccessible: true,
      description: 'Description for Path 1',
      about: 'About Path 1',
      createdBy: {
        id: 1,
        name: 'John Doe',
        imageUrl: 'https://example.com/john-doe.jpg',
        email: 'john.doe@example.com',
      },
      createdAt: '2024-03-24T13:00:03Z',
      isFavourite: false,
      progress: 50,
      enrolledAt: '2024-03-24T13:00:03Z',
      completedAt: '2024-06-24T13:00:03Z',
      noOfChapters: 10,
      updatedAt: '2024-06-24T13:00:03Z',
      level: 1,
    };
    const action = BatchActions.loadBatchPathByIdSuccess({pathById});
    const state = pathDataReducer(initialBatchPathDataState, action);

    expect(state.BatchPathData).toBe(pathById);
    expect(state.isLoading).toBe(false);
    expect(state.error).toBe(null);
  });

  it('should handle loadBatchPathByIdFailed action', () => {
    const error = new Error('LoadBatchPathById Failed');
    const action = BatchActions.loadBatchPathByIdFailed({error});
    const state = pathDataReducer(initialBatchPathDataState, action);

    expect(state.isLoading).toBe(false);
    expect(state.error).toBe(error);
  });

  it('should handle loadEnrolledBatches', () => {
    const action = BatchActions.loadEnrolledBatches();
    const state = enrolledBatchesReducer(initialEnrolledBatchState, action);

    expect(state.isLoading).toBe(true);
    expect(state.error).toBe(null);
  });

  it('should handle loadEnrolledBatchesSuccess action', () => {
    const enrolledBatches = {
      averageProgress: 50,
      count: 4,
      enrolledBatches:  [{
        id: 2,
        name: 'Java',
        stream: 'Java',
        progress: 50,
      }]
    };
    const action = BatchActions.loadEnrolledBatchesSuccess({enrolledBatches});
    const state = enrolledBatchesReducer(initialEnrolledBatchState, action);

    expect(state.enrolledBatches).toBe(enrolledBatches);
    expect(state.isLoading).toBe(false);
    expect(state.error).toBe(null);
  });

  it('should handle loadEnrolledBatchesFailed action', () => {
    const error = new Error('LoadEnrolledBatches Failed');
    const action = BatchActions.loadEnrolledBatchesFailed({error});
    const state = enrolledBatchesReducer(initialEnrolledBatchState, action);

    expect(state.isLoading).toBe(false);
    expect(state.error).toBe(error);
  });
});


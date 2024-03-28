import * as fromBatch from './batch.selector';
import { BatchState,
  StudentState,
  TrainerState,
  BatchDetailsState,
  BatchPathDataState,
  EnrolledbatchState, } from '../reducer/batch.reducer';

describe('Batch Selectors', () => {

  const initialBatchState: BatchState = {
    batches: [],
    isLoading: true,
    error: null,
  };

  const initialEnrolledBatchState: EnrolledbatchState = {
    enrolledBatches: {
      averageProgress: 0,
      count: 0,
      enrolledBatches: [],
    },
    isLoading: true,
    error: 'error',
  };

  const initialStudentState: StudentState = {
    students: [],
    isLoading: true,
    error: null,
  };

  const initialTrainerState: TrainerState = {
    trainers: [],
    isLoading: true,
    error: null,
  };

  const initialBatchDetailsState: BatchDetailsState = {
    batchDetails: {
      createdAt: '',
      createdBy: {
        email: '',
        id: 0,
        imageUrl: '',
        name: '',
        isActive: false,
      },
      endDate: '',
      startDate: '',
      id: 0,
      isAccessible: false,
      name: '',
      noOfPaths: 0,
      noOfStudents: 0,
      noOfTrainers: 0,
      streamName: '',
      stream: {
        streamId: 0,
        streamName: '',
      },
      progress: 0,
    },
    isLoading: true,
    error: null,
  };

  const initialBatchPathDataState: BatchPathDataState = {
    BatchPathData: {
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

  it('should select the list of batches', () => {
    const result = fromBatch.selectBatches.projector(initialBatchState);
    expect(result).toEqual([]);
  });

  it('should select the loading state of batches', () => {
    const result = fromBatch.selectBatchesLoading.projector(initialBatchState);
    expect(result).toBe(true);
  });

  it('should select the error of batches', () => {
    const result = fromBatch.selectBatchesError.projector(initialBatchState);
    expect(result).toBe(null);
  });

  it('should select the list of students', () => {
    const result = fromBatch.selectStudents.projector(initialStudentState);
    expect(result).toEqual([]);
  });

  it('should select the loading state of students', () => {
    const result = fromBatch.selectStudentsLoading.projector(initialStudentState);
    expect(result).toBe(true);
  });

  it('should select the error of students', () => {
    const result = fromBatch.selectStudentsError.projector(initialStudentState);
    expect(result).toBe(null);
  });

  it('should select the list of trainers', () => {
    const result = fromBatch.selectTrainers.projector(initialTrainerState);
    expect(result).toEqual([]);
  });

  it('should select the loading state of trainers', () => {
    const result = fromBatch.selectTrainersLoading.projector(initialTrainerState);
    expect(result).toBe(true);
  });

  it('should select the error of trainers', () => {
    const result = fromBatch.selectTrainersError.projector(initialStudentState);
    expect(result).toBe(null);
  });

  it('should select the batch details', () => {
    const result = fromBatch.selectBatchDetails.projector(initialBatchDetailsState);
    expect(result).toBe(initialBatchDetailsState.batchDetails);
  });

  it('should select the loading state of batch details', () => {
    const result = fromBatch.selectBatchDetailsLoading.projector(initialBatchDetailsState);
    expect(result).toBe(true);
  });

  it('should select the error of batch details', () => {
    const result = fromBatch.selectBatchDetailsError.projector(initialBatchDetailsState);
    expect(result).toBe(null);
  });

  it('should select the batch path data', () => {
    const result = fromBatch.selectBatchPathData.projector(initialBatchPathDataState);
    expect(result).toBe(initialBatchPathDataState.BatchPathData);
  });

  it('should select the loading state of batch path data', () => {
    const result = fromBatch.selectBatchPathDataLoading.projector(initialBatchPathDataState);
    expect(result).toBe(true);
  })

  it('should select the error of batch path data', () => {
    const result = fromBatch.selectBatchPathDataError.projector(initialBatchPathDataState);
    expect(result).toBe(null);
  })

  it('should select the enrolled batches', () => {
    const result = fromBatch.selectEnrolledBatches.projector(initialEnrolledBatchState);
    expect(result).toBe(initialEnrolledBatchState.enrolledBatches);
  })

  it('should select the loading state of enrolled batches', () => {
    const result = fromBatch.selectEnrolledBatchesLoading.projector(initialEnrolledBatchState);
    expect(result).toBe(true);
  })

  it('should select the error of enrolled batches', () => {
    const result = fromBatch.selectEnrolledBatchesError.projector(initialEnrolledBatchState);
    expect(result).toBe(initialEnrolledBatchState.error);
  })
});

import * as fromActions from './batch.actions';
import { Batch } from '../../models/Batch';

describe('Batch Actions', () => {
    it('should loadAllBatches', () => {
      const action = fromActions.loadAllBatches();

      expect({ ...action }).toEqual({
        type: '[Batch] Load All Batches',
      });
    });

    it('should loadAllBatchesSuccess', () => {
      const batches: Batch[] = [{
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
      const action = fromActions.loadAllBatchesSuccess({ batches });

      expect({ ...action }).toEqual({
        type: '[Batch] Load All Batches Success',
        batches,
      });
    });

    it('should loadAllBatchesFailed', () => {
      const error = new Error('Load Error');
      const action = fromActions.loadAllBatchesFailed({ error });

      expect({ ...action }).toEqual({
        type: '[Batch] Load All Batches Failed',
        error,
      });
    });

    it('should loadBatchById', () => {
      const id = '1';
      const action = fromActions.loadBatchById({ id });
      expect({ ...action }).toEqual({
        type: '[Batch] Load Batch By ID',
        id,
      });
    });

    it('should loadBatchByIdSuccess', () => {
      const batchDetails: Batch = {
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
      const action = fromActions.loadBatchByIdSuccess({ batchDetails });
      expect({ ...action }).toEqual({
        type: '[Batch] Load Batch By ID Success',
        batchDetails,
      });
    });

    it('should loadBatchByIdFailed', () => {
      const error = new Error('Load Error');
      const action = fromActions.loadBatchByIdFailed({ error });
      expect({ ...action }).toEqual({
        type: '[Batch] Load Path By ID Failed',
        error,
      });
    });

    it('should loadBatchPathById', () => {
      const id = '1';
      const action = fromActions.loadBatchPathsById({ id });
      expect({ ...action }).toEqual({
        type: '[Batch] Load Path By ID',
        id,
      });
    });

    it('should loadBatchPathByIdSuccess', () => {
      const pathById = {
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
      const action = fromActions.loadBatchPathByIdSuccess({ pathById });
      expect({ ...action }).toEqual({
        type: '[Batch] Load Path By ID Success',
        pathById,
      });
    });

    it('should loadBatchPathByIdFailed', () => {
      const error = new Error('Load Error');
      const action = fromActions.loadBatchPathByIdFailed({ error });
      expect({ ...action }).toEqual({
        type: '[Batch] Load Path By ID Failed',
        error,
      });
    });

    it('should loadTrainersById', () => {
      const id = '1';
      const action = fromActions.loadTrainersById({ id });
      expect({ ...action }).toEqual({
        type: '[Batch] Load Trainers By ID',
        id,
      });
    });

    it('should loadTrainersByIdSuccess', () => {
      const trainers = [{
        email: 'john.doe@example.com',
        id: 1,
        imageUrl: 'https://example.com/john-doe.jpg',
        name: 'John Doe',
        isActive: true,
      }];
      const action = fromActions.loadTrainersByIdSuccess({ trainers });
      expect({ ...action }).toEqual({
        type: '[Batch] Load Trainers By ID Success',
        trainers,
      });
    });

    it('should loadTrainersByIdFailed', () => {
      const error = new Error('Load Error');
      const action = fromActions.loadTrainersByIdFailed({ error });
      expect({ ...action }).toEqual({
        type: '[Batch] Load Trainers By ID Failed',
        error,
      });
    });

    it('should loadStudentsById', () => {
      const id = '1';
      const action = fromActions.loadStudentsById({ id });
      expect({ ...action }).toEqual({
        type: '[Batch] Load Students By ID',
        id,
      });
    });

    it('should loadStudentsByIdSuccess', () => {
      const students = [{
        email: 'john.doe@example.com',
        id: 1,
        imageUrl: 'https://example.com/john-doe.jpg',
        name: 'John Doe',
        isActive: true,
      }];
      const action = fromActions.loadStudentsByIdSuccess({ students });
      expect({ ...action }).toEqual({
        type: '[Batch] Load Students By ID Success',
        students,
      });
    });

    it('should loadStudentsByIdFailed', () => {
      const error = new Error('Load Error');
      const action = fromActions.loadStudentsByIdFailed({ error });
      expect({ ...action }).toEqual({
        type: '[Batch] Load Students By ID Failed',
        error,
      });
    });
});

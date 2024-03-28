import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BatchEffects } from "./batch.effects"
import * as BatchActions from '../action/batch.actions';
import { HttpClient } from '@angular/common/http';

describe('BatchEffects', () => {
  let actions$: Observable<any>;
  let effects: BatchEffects;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        BatchEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(BatchEffects);
    http = TestBed.inject(HttpClient);
  });

  it('should load all batches', (done) => {
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
    const action = BatchActions.loadAllBatches();
    const outcome = BatchActions.loadAllBatchesSuccess({ batches });

    actions$ = of(action);

    spyOn(http, 'get').and.returnValue(of({data : batches}));

    effects.loadAllBatches$.subscribe((action: any) => {
      expect(action).toEqual(outcome);
      done();
    });
  });

  it('should fail to load all batches', (done) => {
    const error = new Error('Error loading batches');
    const action = BatchActions.loadAllBatches();
    const outcome = BatchActions.loadAllBatchesFailed({ error });

    actions$ = of(action);

    spyOn(http, 'get').and.returnValue(throwError(error));

    effects.loadAllBatches$.subscribe(action => {
      expect(action).toEqual(outcome);
      done();
    });
  });

  it('should load enrolled batches', (done) => {
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
    const action = BatchActions.loadEnrolledBatches();
    const outcome = BatchActions.loadEnrolledBatchesSuccess({ enrolledBatches });

    actions$ = of(action);

    spyOn(http, 'get').and.returnValue(of({data : enrolledBatches}));

    effects.loadEnrolledBatches$.subscribe((action: any) => {
      expect(action).toEqual(outcome);
      done();
    });
  });

  it('should fail to load all batches', (done) => {
    const error = new Error('Error loading batches');
    const action = BatchActions.loadEnrolledBatches();
    const outcome = BatchActions.loadEnrolledBatchesFailed({ error });

    actions$ = of(action);

    spyOn(http, 'get').and.returnValue(throwError(error));

    effects.loadEnrolledBatches$.subscribe(action => {
      expect(action).toEqual(outcome);
      done();
    });
  });

  it('should load batch by id', (done) => {
    const batch = {
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
    const action = BatchActions.loadBatchById({ id: '1' });
    const outcome = BatchActions.loadBatchByIdSuccess({ batchDetails: batch });

    actions$ = of(action);

    spyOn(http, 'get').and.returnValue(of({data : batch}));

    effects.loadBatchById$.subscribe(action => {
      expect(action).toEqual(outcome);
      done();
    });
  });

  it('should fail to load batch by id', (done) => {
    const error = new Error('Error loading batch');
    const action = BatchActions.loadBatchById({ id: '1' });
    const outcome = BatchActions.loadBatchByIdFailed({ error });

    actions$ = of(action);

    spyOn(http, 'get').and.returnValue(throwError(error));

    effects.loadBatchById$.subscribe(action => {
      expect(action).toEqual(outcome);
      done();
    });
  });

  it('should load trainers by id', (done) => {
    const trainers = [{ email: 'john.doe@example.com', id: 1, imageUrl: 'https://example.com/john-doe.jpg', name: 'John Doe', isActive: true }];
    const action = BatchActions.loadTrainersById({ id: '1' });
    const outcome = BatchActions.loadTrainersByIdSuccess({ trainers });

    actions$ = of(action);

    spyOn(http, 'get').and.returnValue(of({ data: trainers }));

    effects.loadTrainers$.subscribe(action => {
      expect(action).toEqual(outcome);
      done();
    });
  });


  it('should fail to load trainers by id', (done) => {
    const error = new Error('Error loading trainers');
    const action = BatchActions.loadTrainersById({ id: '1' });
    const outcome = BatchActions.loadTrainersByIdFailed({ error });

    actions$ = of(action);

    spyOn(http, 'get').and.returnValue(throwError(error));

    effects.loadTrainers$.subscribe(action => {
      expect(action).toEqual(outcome);
      done();
    });
  });

  it('should load students by id', (done) => {
    const students = [{
      email: 'john.doe@example.com',
      id: 1,
      imageUrl: 'https://example.com/john-doe.jpg',
      name: 'John Doe',
      isActive: true,
    }];
    const action = BatchActions.loadStudentsById({ id: '1' });
    const outcome = BatchActions.loadStudentsByIdSuccess({ students });

    actions$ = of(action);

    spyOn(http, 'get').and.returnValue(of({data : students}));

    effects.loadStudents$.subscribe(action => {
      expect(action).toEqual(outcome);
      done();
    });
  });

  it('should fail to load students by id', (done) => {
    const error = new Error('Error loading students');
    const action = BatchActions.loadStudentsById({ id: '1' });
    const outcome = BatchActions.loadStudentsByIdFailed({ error });

    actions$ = of(action);

    spyOn(http, 'get').and.returnValue(throwError(error));

    effects.loadStudents$.subscribe(action => {
      expect(action).toEqual(outcome);
      done();
    });
  });

  it('should load batch paths by id', (done) => {
    const paths = [{
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
    const action = BatchActions.loadBatchPathsById({ id: '1' });
    const outcome = BatchActions.loadBatchPathByIdSuccess({ pathById: paths[0] });

    actions$ = of(action);

    spyOn(http, 'get').and.returnValue(of({data : paths}));

    effects.loadBatchPaths$.subscribe(action => {
      expect(action).toEqual(outcome);
      done();
    });
  });

  it('should fail to load batch paths by id', (done) => {
    const error = new Error('Error loading batch paths');
    const action = BatchActions.loadBatchPathsById({ id: '1' });
    const outcome = BatchActions.loadBatchPathByIdFailed({ error });

    actions$ = of(action);

    spyOn(http, 'get').and.returnValue(throwError(error));

    effects.loadBatchPaths$.subscribe(action => {
      expect(action).toEqual(outcome);
      done();
    });
  });
});

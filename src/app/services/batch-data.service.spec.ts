import { TestBed } from '@angular/core/testing';

import { BatchDataService } from './batch-data.service';

describe('BatchDataService', () => {
  let service: BatchDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatchDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

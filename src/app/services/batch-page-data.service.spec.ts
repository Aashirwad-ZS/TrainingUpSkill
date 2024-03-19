import { TestBed } from '@angular/core/testing';

import { BatchPageDataService } from './batch-page-data.service';

describe('BatchPageDataService', () => {
  let service: BatchPageDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatchPageDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

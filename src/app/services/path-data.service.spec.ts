import { TestBed } from '@angular/core/testing';

import { PathDataService } from './path-data.service';

describe('PathDataService', () => {
  let service: PathDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PathDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

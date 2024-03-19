import { TestBed } from '@angular/core/testing';

import { ZopsmartApiInterceptorService } from './zopsmart-api-interceptor.service';

describe('ZopsmartApiInterceptorService', () => {
  let service: ZopsmartApiInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZopsmartApiInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

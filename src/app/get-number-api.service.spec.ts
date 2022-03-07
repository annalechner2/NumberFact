import { TestBed } from '@angular/core/testing';

import { GetNumberApiService } from './get-number-api.service';

describe('GetNumberApiService', () => {
  let service: GetNumberApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetNumberApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

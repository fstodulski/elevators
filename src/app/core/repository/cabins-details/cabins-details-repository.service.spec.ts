import { TestBed } from '@angular/core/testing';

import { CabinsDetailsRepositoryService } from './cabins-details-repository.service';

describe('CabinsDetailsRepositoryService', () => {
  let service: CabinsDetailsRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CabinsDetailsRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

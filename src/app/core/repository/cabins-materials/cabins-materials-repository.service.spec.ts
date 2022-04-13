import { TestBed } from '@angular/core/testing';

import { CabinsMaterialsRepositoryService } from './cabins-materials-repository.service';

describe('CabinsMaterialsRepositoryService', () => {
  let service: CabinsMaterialsRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({ teardown: { destroyAfterEach: false } });
    service = TestBed.inject(CabinsMaterialsRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

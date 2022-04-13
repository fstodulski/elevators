import { TestBed } from '@angular/core/testing';

import { CabinsRealisationRepositoryService } from './cabins-realisation-repository.service';

describe('CabinsRealisationRepositoryService', () => {
  let service: CabinsRealisationRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({ teardown: { destroyAfterEach: false } });
    service = TestBed.inject(CabinsRealisationRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

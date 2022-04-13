import { TestBed } from '@angular/core/testing';

import { CabinsRealisationService } from './cabins-realisation.service';

describe('CabinsRealisationService', () => {
  let service: CabinsRealisationService;

  beforeEach(() => {
    TestBed.configureTestingModule({ teardown: { destroyAfterEach: false } });
    service = TestBed.inject(CabinsRealisationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

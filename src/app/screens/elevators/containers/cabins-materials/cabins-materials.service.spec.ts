import { TestBed } from '@angular/core/testing';

import { CabinsMaterialsService } from './cabins-materials.service';

describe('CabinsMaterialsService', () => {
  let service: CabinsMaterialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CabinsMaterialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

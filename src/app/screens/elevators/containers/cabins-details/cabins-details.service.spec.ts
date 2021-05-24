import { TestBed } from '@angular/core/testing';

import { CabinsDetailsService } from './cabins-details.service';

describe('CabinsDetailsService', () => {
  let service: CabinsDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CabinsDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

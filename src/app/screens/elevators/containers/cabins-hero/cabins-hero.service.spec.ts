import { TestBed } from '@angular/core/testing';

import { CabinsHeroService } from './cabins-hero.service';

describe('CabinsHeroService', () => {
  let service: CabinsHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CabinsHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

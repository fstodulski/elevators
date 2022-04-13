import { TestBed } from '@angular/core/testing';

import { CabinsHeroService } from './cabins-hero.service';

describe('CabinsHeroService', () => {
  let service: CabinsHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({ teardown: { destroyAfterEach: false } });
    service = TestBed.inject(CabinsHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

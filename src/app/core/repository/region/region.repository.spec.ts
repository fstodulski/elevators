import { TestBed } from '@angular/core/testing';

import { RegionRepository } from './region.repository';

describe('RegionService', () => {
  let service: RegionRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({ teardown: { destroyAfterEach: false } });
    service = TestBed.inject(RegionRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

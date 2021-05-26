import { TestBed } from '@angular/core/testing';

import { CompanyCategoriesRepositoryService } from './company-categories-repository.service';

describe('CompanyCategoriesRepositoryService', () => {
  let service: CompanyCategoriesRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyCategoriesRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

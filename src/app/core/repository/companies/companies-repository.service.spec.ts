import { TestBed } from '@angular/core/testing';

import { CompaniesRepositoryService } from './companies-repository.service';

describe('CompaniesRepositoryService', () => {
  let service: CompaniesRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompaniesRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CompanyDatasourceService } from './company.service';

describe('CompanyService', () => {
  let service: CompanyDatasourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyDatasourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

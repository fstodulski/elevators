import { TestBed } from '@angular/core/testing';

import { CompanyDatasourceService } from './company.service';

describe('CompanyService', () => {
  let service: CompanyDatasourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({ teardown: { destroyAfterEach: false } });
    service = TestBed.inject(CompanyDatasourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

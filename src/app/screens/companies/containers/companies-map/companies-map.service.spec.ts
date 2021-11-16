import { TestBed } from '@angular/core/testing';

import { CompaniesMapService } from './companies-map.service';

describe('CompaniesMapService', () => {
  let service: CompaniesMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompaniesMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

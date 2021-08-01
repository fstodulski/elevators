import { TestBed } from '@angular/core/testing';

import { CatalogueCtaService } from './catalogue-cta.service';

describe('CatalogueCtaService', () => {
  let service: CatalogueCtaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogueCtaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { InspirationCategoryService } from './inspiration-category.service';

describe('InspirationCategoryService', () => {
  let service: InspirationCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InspirationCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

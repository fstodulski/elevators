import { TestBed } from '@angular/core/testing';

import { LanguageGuard } from './language.guard';

describe('LanguageGuard', () => {
  let guard: LanguageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({ teardown: { destroyAfterEach: false } });
    guard = TestBed.inject(LanguageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

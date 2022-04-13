import { TestBed } from '@angular/core/testing';

import { SubscribeService } from './subscribe.service';

describe('SubscribeService', () => {
  let service: SubscribeService;

  beforeEach(() => {
    TestBed.configureTestingModule({ teardown: { destroyAfterEach: false } });
    service = TestBed.inject(SubscribeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

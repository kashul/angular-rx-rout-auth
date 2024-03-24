import { TestBed } from '@angular/core/testing';

import { TestRoutGuardGuard } from './test-rout-guard.guard';

describe('TestRoutGuardGuard', () => {
  let guard: TestRoutGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TestRoutGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

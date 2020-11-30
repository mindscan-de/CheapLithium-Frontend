import { TestBed } from '@angular/core/testing';

import { DecisionThreadBackendService } from './decision-thread-backend.service';

describe('DecisionThreadBackendService', () => {
  let service: DecisionThreadBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecisionThreadBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

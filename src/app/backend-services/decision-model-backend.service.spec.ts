import { TestBed } from '@angular/core/testing';

import { DecisionModelBackendService } from './decision-model-backend.service';

describe('DecisionModelBackendService', () => {
  let service: DecisionModelBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecisionModelBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { KnowledgeBaseBackendService } from './knowledge-base-backend.service';

describe('KnowledgeBaseBackendService', () => {
  let service: KnowledgeBaseBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KnowledgeBaseBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

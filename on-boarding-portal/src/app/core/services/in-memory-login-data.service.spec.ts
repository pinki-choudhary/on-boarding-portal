import { TestBed } from '@angular/core/testing';

import { InMemoryLoginDataService } from './in-memory-login-data.service';

describe('InMemoryLoginDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryLoginDataService = TestBed.get(InMemoryLoginDataService);
    expect(service).toBeTruthy();
  });
});

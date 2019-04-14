import { TestBed } from '@angular/core/testing';

import { StudentOnboardService } from './student-onboard.service';

describe('StudentOnboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentOnboardService = TestBed.get(StudentOnboardService);
    expect(service).toBeTruthy();
  });
});

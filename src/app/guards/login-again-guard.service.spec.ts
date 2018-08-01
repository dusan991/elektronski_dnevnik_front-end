import { TestBed, inject } from '@angular/core/testing';

import { LoginAgainGuardService } from './login-again-guard.service';

describe('LoginAgainGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginAgainGuardService]
    });
  });

  it('should be created', inject([LoginAgainGuardService], (service: LoginAgainGuardService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { AuthSecretService } from './auth-secret.service';

describe('AuthSecretService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthSecretService]
    });
  });

  it('should be created', inject([AuthSecretService], (service: AuthSecretService) => {
    expect(service).toBeTruthy();
  }));
});

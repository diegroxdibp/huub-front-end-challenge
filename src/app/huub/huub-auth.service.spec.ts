import { TestBed } from '@angular/core/testing';

import { HuubAuthService } from './huub-auth.service';

describe('HuubAuthService', () => {
  let service: HuubAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HuubAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

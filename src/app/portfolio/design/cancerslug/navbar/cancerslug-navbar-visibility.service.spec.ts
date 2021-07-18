import { TestBed } from '@angular/core/testing';

import { CancerslugNavbarVisibilityService } from './cancerslug-navbar-visibility.service';

describe('CancerslugNavbarVisibilityService', () => {
  let service: CancerslugNavbarVisibilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CancerslugNavbarVisibilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

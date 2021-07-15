import { TestBed } from '@angular/core/testing';

import { HuubServiceService } from './huub-service.service';

describe('HuubServiceService', () => {
  let service: HuubServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HuubServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

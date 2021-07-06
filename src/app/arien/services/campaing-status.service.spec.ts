import { TestBed } from '@angular/core/testing';

import { CampaingStatusService } from './campaing-status.service';

describe('CampaingStatusService', () => {
  let service: CampaingStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampaingStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

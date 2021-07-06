import { TestBed } from '@angular/core/testing';

import { EnviromentStatusService } from './enviroment-status.service';

describe('EnviromentStatusService', () => {
  let service: EnviromentStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviromentStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

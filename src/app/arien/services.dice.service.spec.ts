import { TestBed } from '@angular/core/testing';

import { Services.DiceService } from './services.dice.service';

describe('Services.DiceService', () => {
  let service: Services.DiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Services.DiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

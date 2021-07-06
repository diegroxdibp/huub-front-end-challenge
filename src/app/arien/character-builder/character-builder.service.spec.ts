import { TestBed } from '@angular/core/testing';

import { CharacterBuilderService } from './character-builder.service';

describe('CharacterBuilderService', () => {
  let service: CharacterBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArienComponent } from './arien.component';

describe('ArienComponent', () => {
  let component: ArienComponent;
  let fixture: ComponentFixture<ArienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

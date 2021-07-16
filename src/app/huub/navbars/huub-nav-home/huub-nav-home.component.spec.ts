import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuubNavHomeComponent } from './huub-nav-home.component';

describe('HuubNavHomeComponent', () => {
  let component: HuubNavHomeComponent;
  let fixture: ComponentFixture<HuubNavHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuubNavHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuubNavHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

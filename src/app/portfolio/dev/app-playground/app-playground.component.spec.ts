import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPlaygroundComponent } from './app-playground.component';

describe('AppPlaygroundComponent', () => {
  let component: AppPlaygroundComponent;
  let fixture: ComponentFixture<AppPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPlaygroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

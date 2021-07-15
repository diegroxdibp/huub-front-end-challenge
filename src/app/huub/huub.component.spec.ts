import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuubComponent } from './huub.component';

describe('HuubComponent', () => {
  let component: HuubComponent;
  let fixture: ComponentFixture<HuubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

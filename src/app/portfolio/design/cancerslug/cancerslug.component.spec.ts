/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CancerslugComponent } from './cancerslug.component';

describe('CancerslugComponent', () => {
  let component: CancerslugComponent;
  let fixture: ComponentFixture<CancerslugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancerslugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancerslugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

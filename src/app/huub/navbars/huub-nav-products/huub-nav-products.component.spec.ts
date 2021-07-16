import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuubNavProductsComponent } from './huub-nav-products.component';

describe('HuubNavProductsComponent', () => {
  let component: HuubNavProductsComponent;
  let fixture: ComponentFixture<HuubNavProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuubNavProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuubNavProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

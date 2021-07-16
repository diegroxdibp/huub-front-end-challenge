import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuubNavWishlistComponent } from './huub-nav-wishlist.component';

describe('HuubNavWishlistComponent', () => {
  let component: HuubNavWishlistComponent;
  let fixture: ComponentFixture<HuubNavWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuubNavWishlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuubNavWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

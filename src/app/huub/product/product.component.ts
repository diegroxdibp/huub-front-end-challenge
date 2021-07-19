import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { HuubAuthService } from '../huub-auth.service';
import { IProduct } from '../models/IProduct';
import { User } from '../models/user';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @ViewChild('expansionPanel') expansionPanel: MatExpansionPanel;
  @Input() product: IProduct;
  user: User;
  isInWishlist: boolean;
  isInWishlistColorTitle: string;
  isInWishlistColorButton: string;
  constructor(private huub: HuubAuthService) { }

  ngOnInit(): void {
    this.user = this.huub.getUserFromLocalStorage();
    this.checkIfInWishlist();
  }

  addToWishlist(): void {
    this.user = this.huub.getUserFromLocalStorage();
    this.user.wishlist.add(this.product);
    this.huub.saveToLocalStorage(this.user);
    this.checkIfInWishlist();
  }

  wishlistToggle(): void {
    if (!this.user.wishlist.products.filter((product: IProduct) => product?.id === this.product?.id).length) {
      this.addToWishlist();
    } else {
      this.removeFromWishlist();
    }
    this.checkIfInWishlist();
    console.log(this.expansionPanel)
    this.expansionPanel._body.nativeElement.scrollIntoView({behavior: 'smooth'});
    this.expansionPanel.expanded = !this.expansionPanel.expanded;
  }

  removeFromWishlist(): void {
    this.user = this.huub.getUserFromLocalStorage();
    this.user.wishlist.remove(this.product);
    this.huub.saveToLocalStorage(this.user);
    this.checkIfInWishlist();
  }

  checkIfInWishlist(): void {
    if (this.user.wishlist.products.filter((product: IProduct) => product?.id === this.product?.id).length) {
      this.isInWishlist = true;
      this.isInWishlistColorTitle = 'springgreen';
      this.isInWishlistColorButton = 'springgreen';
    } else {
      this.isInWishlist = false;
      this.isInWishlistColorTitle = 'initial';
      this.isInWishlistColorButton = 'blueviolet';
    }
  }
}

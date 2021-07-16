import { Component, Input, OnInit } from '@angular/core';
import { HuubAuthService } from '../huub-auth.service';
import { User } from '../models/user';
import { Wishlist } from '../models/wishlist';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  user: User;
  wishlist: Wishlist;
  constructor(private auth: HuubAuthService) {
    const user = this.auth.getUserFromLocalStorage();
    console.log(user)
    this.user = user;
    this.wishlist = user.wishlist;
    console.log(this.wishlist)
  }

  ngOnInit(): void {
  }
}

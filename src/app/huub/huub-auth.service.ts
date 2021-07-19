import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from './models/IProduct';
import { User } from './models/user';
import { Wishlist } from './models/wishlist';

@Injectable({
  providedIn: 'root'
})
export class HuubAuthService {
  constructor() {
  }

  saveToLocalStorage(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUserFromLocalStorage(): User {
    const userJSON = JSON.parse(localStorage.getItem('user'));
    const wishlist = new Wishlist();
    if (userJSON) {
      userJSON.wishlist.products.forEach((product: IProduct) => {
        wishlist.add(product);
      })
      const user = new User(userJSON.username, userJSON.jwt, userJSON.expiresAt, wishlist);
      return user;
    }
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  public isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  isLoggedOut(): boolean {
    return !this.isLoggedIn();
  }
}


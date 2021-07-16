import { IProduct } from './IProduct';

export class Wishlist {
  products: IProduct[];
  constructor(products: IProduct[] = []) {
    this.products = products;
  }


  add(productToAdd: IProduct): void {
    this.products.push(productToAdd);
  }

  remove(productToRemove: IProduct): void {
    this.products = this.products.filter(
      (productInWishlist: IProduct) => productInWishlist.id !== productToRemove.id
    );
  }

  isInWishlist(productToCheck: IProduct): boolean {
    if (this.products.filter((productInWishlist: IProduct) => productToCheck.id === productInWishlist.id).length) {
      return true;
    } else {
      return false;
    }
  }
}

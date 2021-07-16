import { IProduct } from './IProduct';

export class Wishlist {
  products: IProduct[];
  constructor(products: IProduct[] = []) {
    this.products = products;
  }
}

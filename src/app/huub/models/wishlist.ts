import { IProducts } from './IProducts';

export class Wishlist {
  products: IProducts[];
  constructor(products: IProducts[] = []) {
    this.products = products;
  }
}

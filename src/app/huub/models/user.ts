import * as moment from 'moment';
import { Wishlist } from './wishlist';

export class User {
  username: string;
  jwt: string;
  expiresAt: string;
  wishlist: Wishlist;
  constructor(username: string, jwt: string = 'ERROR', expiresAt: number, wishlist: Wishlist = new Wishlist()) {
    this.username = username;
    this.jwt = jwt;
    this.expiresAt = moment().add(expiresAt, 'ms').format('d/M/YYYY');
    this.wishlist = wishlist;
  }
}

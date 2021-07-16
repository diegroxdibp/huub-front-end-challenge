import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { shareReplay, tap } from 'rxjs/operators';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class HuubAuthService {
  constructor(private http: HttpClient) {

  }

  login(email: string, password: string) {
    return this.http.post<any>('/api/login', { email, password }).pipe(
      tap(res => this.setSession),
      shareReplay()
    );
  }

  private setSession(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout() {
    localStorage.removeItem('user');
  }

  public isLoggedIn() {
    return !!localStorage.getItem('user');
    // return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  saveToLocalStorage(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUserFromLocalStorage(): User {
    const userJSON = JSON.parse(localStorage.getItem('user'));
    const user = new User(userJSON.username, userJSON.password, userJSON.jwt, userJSON.expiresAt);
    console.log(userJSON);
    console.log(user);
    return user;
  }
}


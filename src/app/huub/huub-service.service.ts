import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { HuubAuthService } from './huub-auth.service';
import { IResponse } from './models/IResponse';

@Injectable({
  providedIn: 'root'
})
export class HuubServiceService {
  authEndpoint = 'https://api.brand.uat.thehuub.io/authenticate';
  givenEndpoint = 'https://api.brand.uat.thehuub.io/products?page=1&page_size=10';
  authInfo = {
    email: 'case_study@thehuub.io',
    password: 'HUUBrocks2020sucks'
  };

  constructor(
    public http: HttpClient,
    private auth: HuubAuthService
  ) { }

  getToken(): Observable<any> {
    return this.http.post<any>(this.authEndpoint, this.authInfo);
  }

  getUserToken() {
    const header = {
      headers: new HttpHeaders({
        jwt: this.auth.getUserFromLocalStorage().jwt
      })
    }
    return header;
  }

  // Response with given with default parameters
  getResponse(pageNumber: number = 1, pageSize: number = 20): Observable<IResponse> {
    return this.http.get<IResponse>(this.endpoint(pageNumber, pageSize), this.getUserToken()).pipe(
      shareReplay()
    );
  }

  endpoint(pageNumber: number = 1, pageSize: number = 20): string {
    return `https://api.brand.uat.thehuub.io/products?page=${pageNumber}&page_size=${pageSize}`;
  }

  // Response that gets the total item count from paginator and use as paramater to get all procuts
  getAllProducts(): Observable<any> {
    return this.http.get<IResponse>(this.endpoint(), this.getUserToken()).pipe(
      map(response => this.http.get<IResponse>(this.endpoint(1, response.paginator.total_items_count), this.getUserToken())));
  }
}

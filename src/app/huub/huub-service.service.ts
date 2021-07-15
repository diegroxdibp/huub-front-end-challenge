import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, last, map, share, shareReplay, tap } from 'rxjs/operators';
import { IProducts } from './models/IProducts';
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
  httpOptions = {
    headers: new HttpHeaders({
      jwt: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpZCI6MzcxLCJmaXJzdF9uYW1lIjoiQ2FzZSIsImxhc3RfbmFtZSI6IlN0dWR5IiwiZW1haWwiOiJjYXNlX3N0dWR5QHRoZWh1dWIuaW8iLCJyb2xlcyI6W3sicm9sZSI6IkJyYW5kX0FwaV9Vc2VyIiwiZGVzY3JpcHRpb24iOiJVc2VyIGZvciBCcmFuZCBBUEkifV0sImJyYW5kX2lkIjoiMTMxIiwiZXhwIjoxNjI2NzA5MTg1fQ.AUI8XhLC0ad-FcFE7XllzY7EmLLqzUt2_-m7f9mvpY6DrvhDUa0-raBJkwLevIjixPrsgrEik2klePDqdfSTAYicS-NsczSaH8NtVP0FnQ6nBfXCUoRKZVhouO3wIFoavymAD67xXEdIuWT4okEEGHbg6QNqBArWaCCPV-VpXP4'
    })
  };
  constructor(public http: HttpClient) { }

  getToken(): Observable<any> {
    return this.http.post<any>(this.authEndpoint, this.authInfo);
  }

  endpoint(pageNumber: number = 1, pageSize: number = 10): string {
    return `https://api.brand.uat.thehuub.io/products?page=${pageNumber}&page_size=${pageSize}`;
  }

  // Response with given endpoint default parameters
  getResponse(pageNumber: number = 1, pageSize: number = 10): Observable<IResponse> {
    return this.http.get<IResponse>(this.endpoint(pageNumber, pageSize), this.httpOptions).pipe(
      shareReplay()
    );
  }

  getPaginator(): any {
    let paginator;
    this.getResponse().subscribe(data => paginator = data.paginator);
    return paginator;
  }

  // Response that gets the total item count from paginator and use as paramatere to get all procuts
  getAllProducts(): Observable<any> {
    return this.http.get<IResponse>(this.endpoint(), this.httpOptions).pipe(
      map(response => this.http.get<IResponse>(this.endpoint(1, response.paginator.total_items_count), this.httpOptions)));
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HuubServiceService } from '../huub-service.service';
import { IProduct } from '../models/IProduct';
import { IResponse } from '../models/IResponse';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @Input() products$: Observable<IResponse>;
  products: IProduct[];
  paginator;
  constructor(private huub: HuubServiceService) { }

  ngOnInit(): void {
    this.products$.subscribe((response: IResponse) => {
      this.paginator = response.paginator;
      this.products = response.data;
    });
  }

  updatePage(pageEvent: any): void {
    console.log('New current page is', pageEvent.page);
    console.log('New current page limit is', pageEvent.pageSize);
    // Get response with the custon parameters of products per page and/or what page to go
    this.products$ = this.huub.getResponse(pageEvent.page, pageEvent.pageSize);
    this.products$.subscribe((response: IResponse) => this.products = response.data);
  }
}

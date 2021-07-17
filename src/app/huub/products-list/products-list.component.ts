import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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
  paginator: any;
  constructor(private huub: HuubServiceService) { }

  ngOnInit(): void {
    this.products$.subscribe((response: IResponse) => {
      this.paginator = response.paginator;
      this.products = response.data;
    });
  }

  // Get response with the custom parameters of products per page and/or what page to go
  updatePage(pageEvent: PageEvent): void {
    this.products$ = this.huub.getResponse(pageEvent.pageIndex + 1, pageEvent.pageSize);
    this.products$.subscribe((response: IResponse) => this.products = response.data);
  }
}

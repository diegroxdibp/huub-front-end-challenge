import { Component, Input, OnInit } from '@angular/core';
import { HuubServiceService } from '../huub-service.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @Input() products$;
  products;
  paginator;
  constructor(private huub: HuubServiceService) { }

  ngOnInit(): void {
    this.products$.subscribe(data => this.paginator = data.paginator);
    this.huub.getProducts().subscribe(data => this.products = data);
  }

  updatePage(pageEvent: any): void {
    console.log('New current page is', pageEvent.page);
    console.log('New current page limit is', pageEvent.pageSize);
    this.products$ = this.huub.getResponse(pageEvent.page, pageEvent.pageSize);
    this.products$.subscribe(data => this.products = data.data);
  }
}

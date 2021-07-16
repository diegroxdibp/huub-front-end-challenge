import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HuubServiceService } from '../huub-service.service';
import { IProduct } from '../models/IProduct';
import { IResponse } from '../models/IResponse';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<any>;
  products: any;
  allProducts$: Observable<any>;
  allProducts: IProduct[];
  paginator: any;

  constructor(private huub: HuubServiceService) { }

  ngOnInit(): void {
    this.products$ = this.huub.getResponse();
    this.products$.subscribe(response => {
      this.paginator = response.paginator;
      this.products = response.data;
    });
    this.huub.getAllProducts().subscribe(response => {
      this.allProducts$ = response;
      response.subscribe((data: IResponse) => this.allProducts = data.data);
    });
  }
}

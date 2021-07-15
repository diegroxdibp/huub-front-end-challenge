import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { HuubServiceService } from '../huub-service.service';
import { Products } from '../models/Products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<any>;
  response: Response;
  // products: Products[];
  products: any;
  allProducts: any;
  allProducts$: any;
  paginator: any;

  constructor(private huub: HuubServiceService) { }

  ngOnInit(): void {
    this.products$ = this.huub.getResponse();
    // this.products$.subscribe(data => this.products = data.data);
    // this.products$.subscribe(data => console.log(data));
    this.products$.subscribe(data => this.paginator = data.paginator);
    // this.paginator = this.huub.getPaginator();
    // // this.getAllProducts();
    // console.log(this.huub.getProducts());
    this.huub.getProducts().subscribe(data => this.products = data);
    this.huub.getAllProducts().subscribe(data => {
      this.allProducts$ = data;
      data.subscribe(data => this.allProducts = data.data);
    });
  }


  getAllProducts(): void {
    this.products$ = this.huub.getResponse(1, this.paginator.total_items_count);
    this.products$.subscribe(data => this.allProducts = data.data);
  }

  test() {
    // this.products$ = this.huub.getFullResponse(1, this.paginator.total_items_count);
    // this.products$.subscribe(data => this.allProducts = data.data);
    // // console.log(this.products);
    // // console.log(this.paginator);
    // console.log(this.allProducts);
    console.log(this.products);
    console.log(this.allProducts);
  }
}

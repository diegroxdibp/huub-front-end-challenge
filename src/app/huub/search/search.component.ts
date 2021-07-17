import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { debounceTime, map, startWith, tap } from 'rxjs/operators';
import { HuubServiceService } from '../huub-service.service';
import { IProduct } from '../models/IProduct';
import { IResponse } from '../models/IResponse';

@Component({
  selector: 'app-product-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class ProductsSearchComponent implements OnInit, AfterViewInit {
  // @Output() updatePage = new EventEmitter<any>();
  @Input() allProducts$;
  arrayOfObservablesOfchunkedArraysOfSearchedProducts;
  result$;
  products;
  searchResult: IProduct[];
  pageSize = 20;
  numberOfProductsFoundOnSearch = 0;
  constructor(private huub: HuubServiceService) { }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }
  search($event) {
    const searchTerm = $event.target.value;

    this.allProducts$.subscribe((response: IResponse) => {
      this.products = response.data;
    });


    this.allProducts$.pipe(
      map((response: IResponse) => response.data),
      map((products: IProduct[]) => {
        const arrayOfSearchedProducts = products.filter(
          (product: IProduct) => product.name.toLowerCase().includes(searchTerm.toLowerCase().toString())
        );
        this.numberOfProductsFoundOnSearch = arrayOfSearchedProducts.length;
        const chunkSize = this.pageSize;
        const chunkedArraysOfSearchedProducts = this.arraySplitter(arrayOfSearchedProducts, chunkSize);
        const arrayOfObservablesOfchunkedArraysOfSearchedProducts = [];
        chunkedArraysOfSearchedProducts.forEach(array => {
          arrayOfObservablesOfchunkedArraysOfSearchedProducts.push(of(array));
        });
        this.arrayOfObservablesOfchunkedArraysOfSearchedProducts = arrayOfObservablesOfchunkedArraysOfSearchedProducts;
        return chunkedArraysOfSearchedProducts[0];
      }),
      debounceTime(2000),
    ).subscribe((response: IProduct[]) => {
      console.log(response);
      this.searchResult = response;
      this.result$ = of(response);
    });
  }

  // Get response with the custom parameters of products per page and/or what page to go
  updatePage(pageEvent: any): void {
    this.pageSize = pageEvent.pageSize;
    const page = pageEvent.page;
    this.arrayOfObservablesOfchunkedArraysOfSearchedProducts[page - 1].subscribe(response => this.searchResult = response);
  }

  arraySplitter(array: any[], chunkSize: number) {
    const numberOfElementsInArray = array.length;
    const chunkedArrays = [];
    for (let i = 0; i < numberOfElementsInArray; i += chunkSize) {
      const chunkOfArray = array.slice(i, i + chunkSize);
      chunkedArrays.push(chunkOfArray);
    }
    return chunkedArrays;
  }
}

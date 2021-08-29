import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { PageEvent } from '@angular/material/paginator';
import { IProduct } from '../models/IProduct';
import { IResponse } from '../models/IResponse';

@Component({
  selector: 'app-product-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class ProductsSearchComponent implements OnInit {
  // Obervable with products sent by the parent component
  @Input() allProducts$: Observable<IResponse>;
  // Array of products to be used on pagination
  arrayOfSearchedProducts: IProduct[];
  // Array of products to be shown on view
  searchResult: IProduct[];
  // Starting value of paginator page size
  pageSize = 20;
  // Total number of products found to make pagination calculations and to be show on view
  numberOfProductsFoundOnSearch: number;
  // Subject to watch keyup events and debounce so we don't have to send a server request on every keystroke
  searchTextChanged = new Subject<string>();

  constructor() { }

  ngOnInit(): void {
    this.searchTextChanged.pipe(
      debounceTime(500),
      distinctUntilChanged(),
    ).subscribe((searchTerm: string) => {
      this.getProducts(searchTerm);
    });
  }

  search($event: KeyboardEvent): void {
    const searchTerm = ($event.target as HTMLInputElement).value;
    this.searchTextChanged.next(searchTerm);
  }

  getProducts(searchTerm: string): void {
    this.allProducts$.pipe(
      map((response: IResponse) => response.data),
      map((products: IProduct[]) => {
        const arrayOfSearchedProducts = products.filter(
          (product: IProduct) => product.name.toLowerCase().includes(searchTerm.toLowerCase().toString())
        );
        this.arrayOfSearchedProducts = arrayOfSearchedProducts;
        this.numberOfProductsFoundOnSearch = arrayOfSearchedProducts.length;
        const chunkSize = this.pageSize;
        this.splitArrayByPageSizeAndReturnChunkCorrespondingToPageNumber(arrayOfSearchedProducts, chunkSize, this.pageSize);
        const chunkedArraysOfSearchedProducts = this.splitArrayByPage(arrayOfSearchedProducts, chunkSize);
        return chunkedArraysOfSearchedProducts[0];
      }),
    ).subscribe((response: IProduct[]) => {
      this.searchResult = response;
    });
  }

  // Triggered by paginator, updates the view with the parameters sent by the paginator
  updatePage(pageEvent: PageEvent): void {
    const page = pageEvent.pageIndex + 1;
    const pageSize = pageEvent.pageSize;
    this.pageSize = pageSize;
    this.searchResult = this.splitArrayByPageSizeAndReturnChunkCorrespondingToPageNumber(this.arrayOfSearchedProducts, pageSize, page);
  }

  splitArrayByPageSizeAndReturnChunkCorrespondingToPageNumber(array: IProduct[], chunkSize: number, page: number): IProduct[] {
    const pageAsIndex = page - 1;
    const splittedArray = this.splitArrayByPage(array, chunkSize);
    const chunkReferringToPage = splittedArray[pageAsIndex];
    return chunkReferringToPage;
  }

  splitArrayByPage(array: IProduct[], chunkSize: number): IProduct[][] {
    const numberOfElementsInArray = array.length;
    const chunkedArrays = [];
    for (let i = 0; i < numberOfElementsInArray; i += chunkSize) {
      const chunkOfArray = array.slice(i, i + chunkSize);
      chunkedArrays.push(chunkOfArray);
    }
    return chunkedArrays;
  }
}

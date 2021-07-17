import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { HuubServiceService } from '../huub-service.service';
import { IProduct } from '../models/IProduct';
import { IResponse } from '../models/IResponse';

@Component({
  selector: 'app-product-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class ProductsSearchComponent implements OnInit {
  // Obervable sent by the parent
  @Input() allProducts$: Observable<IResponse>;
  // Array of products to be used on pagination
  arrayOfSearchedProducts: IProduct[];
  // Array of products to be shown on view
  searchResult: IProduct[];
  // Starting value of paginator page size
  pageSize = 20;
  // Total number of products found
  numberOfProductsFoundOnSearch: number;
  constructor(private huub: HuubServiceService) { }

  ngOnInit(): void {
  }

  search($event: KeyboardEvent): void {
    console.log($event);
    const searchTerm = ($event.target as HTMLInputElement).value;
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
      debounceTime(2000),
    ).subscribe((response: IProduct[]) => {
      console.log(response);
      this.searchResult = response;
    });
  }

  splitArrayByPageSizeAndReturnChunkCorrespondingToPageNumber(array: IProduct[], chunkSize: number, page: number): IProduct[] {
    const pageAsIndex = page - 1;
    const splittedArray = this.splitArrayByPage(array, chunkSize);
    const chunkReferringToPage = splittedArray[pageAsIndex];
    return chunkReferringToPage;
  }

  // Triggered by paginator // Updates the view with the parameters sent by the paginator
  updatePage(pageEvent: PageEvent): void {
    const page = pageEvent.pageIndex + 1;
    const pageSize = pageEvent.pageSize;
    this.pageSize = pageSize;
    this.searchResult = this.splitArrayByPageSizeAndReturnChunkCorrespondingToPageNumber(this.arrayOfSearchedProducts, pageSize, page);
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

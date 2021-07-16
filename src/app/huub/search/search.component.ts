import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, map, startWith, tap } from 'rxjs/operators';
import { HuubServiceService } from '../huub-service.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class ProductsSearchComponent implements OnInit {
  // @Output() updatePage = new EventEmitter<any>();
  @Input() allProducts$;
  searchResult;

  constructor(private huub: HuubServiceService) { }

  ngOnInit() {

  }

  search($event) {
    const searchTerm = $event.target.value;
    const result = this.allProducts$.pipe(
      map((response: any) => response.data),
      map((products: any) => products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))),
      debounceTime(1000),
    ).subscribe(data => this.searchResult = data);
  }

}

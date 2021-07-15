import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Output() updatePage = new EventEmitter<any>();
  @Input() paginator;
  form: FormGroup;
  pageSize = 20;
  pageSizeOptions = [10, 20, 30];
  page = 0;
  goToProductNumer: number;
  constructor() {
    this.form = new FormGroup({
      goToProduct: new FormControl('', [Validators.min(0), Validators.max(100)]),
      lastName: new FormControl(''),
      age: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  onPageChange($event: PageEvent): void {
    console.log(this.paginator);
    const pageEvent = {
      page: $event.pageIndex + 1,
      pageSize: $event.pageSize,
    };
    this.updatePage.emit(pageEvent);
  }

  onSubmit(): void {

  }

  minMaxer(): void {
    const inputValue = this.goToProductNumer;
    const min = 0;
    const max = this.paginator?.total_items_count;
    let output: number;
    if (inputValue < min) {
      output = min;
    } else if (inputValue > max) {
      output = max;
    } else {
      output = inputValue;
    }
    this.goToProductNumer = output;
  }

}

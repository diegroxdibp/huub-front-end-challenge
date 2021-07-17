import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Output() updatePage = new EventEmitter<object>();
  @Input() numberOfElements: number;
  pageSizeOptions = [10, 20, 30];
  // form: FormGroup;
  // goToProductNumer: number;
  constructor() {
    // this.form = new FormGroup({
    //   goToProduct: new FormControl('', [Validators.min(0), Validators.max(100)]),
    //   lastName: new FormControl(''),
    //   age: new FormControl('')
    // });
  }

  ngOnInit(): void {
  }

  get pageSize(): number {
    return this.pageSizeOptions[1];
  }

  onPageChange($event: PageEvent): void {
    this.updatePage.emit($event);
  }

  onSubmit(): void { }

  // WIP Feature
  // minMaxer(): void {
  //   const inputValue = this.goToProductNumer;
  //   const min = 0;
  //   const max = this.numberOfElements;
  //   let output: number;
  //   if (inputValue < min) {
  //     output = min;
  //   } else if (inputValue > max) {
  //     output = max;
  //   } else {
  //     output = inputValue;
  //   }
  //   this.goToProductNumer = output;
  // }
}

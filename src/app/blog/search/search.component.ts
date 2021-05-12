import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { BlogManagerService } from '../blog-manager.service';
import { MatRadioChange } from '@angular/material/radio';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchInputValue: string;
  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  postsTitles = [];
  postsDates = [];
  postsTags = [];
  postsId = [];
  activeRadioButton: string;

  constructor(
    private blogManager: BlogManagerService,
    public dialog: MatDialog,
    private dialogRef: MatDialogRef<SearchComponent>,
  ) { }

  ngOnInit(): void {
    this.activeRadioButton = '1';
    this.options = this.blogManager.getListOfPostTitles();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    // tslint:disable-next-line: deprecation
    this.dialogRef.keydownEvents().subscribe(event => {
      if (event.key === 'Escape') {
        this.onCancel();
      }
    });
  }

  radioButtonChange(event: MatRadioChange): void {
    this.activeRadioButton = event.value;
    const selectedOption = event.value;
    this.changeOptions(selectedOption);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    this.searchInputValue = '';
  }

  private _filter(value: string): string[] {
    this.changeOptions(this.activeRadioButton);
    const filterValue = value.toLowerCase();
    switch (this.activeRadioButton) {
      case '1':
        return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
      case '2':
        return this.options.filter(option => option.toLocaleString().toLowerCase().indexOf(filterValue) === 0);
      case '3':
        return this.options.filter(option => option[0].toLowerCase().indexOf(filterValue) === 0);
      case '4':
        return this.options.filter(option => option.toString().toLowerCase().indexOf(filterValue) === 0);
    }
  }

  changeOptions(option: string): void {
    const key = option;
    switch (key) {
      case '1':
        this.options = this.blogManager.getListOfPostTitles();
        break;
      case '2':
        this.options = this.blogManager.getListOfPostDatesToLocaleString();
        break;
      case '3':
        this.options = this.blogManager.getListOfPostTags();
        break;
      case '4':
        this.options = this.blogManager.getListOfPostId();
        break;
    }
  }

  emptyQueryArrays(): void {
    this.postsTitles = [];
    this.postsDates = [];
    this.postsTags = [];
    this.postsId = [];
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  search(): void {
    const filterValue = this.searchInputValue.toLowerCase();
    let filterResult: string[] = [];
    switch (this.activeRadioButton) {
      case '1':
        filterResult = this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
        break;
      case '2':
        filterResult = this.options.filter(option => option.toLocaleString().toLowerCase().indexOf(filterValue) === 0);
        break;
      case '3':
        filterResult = this.options.filter(option => option[0].toLowerCase().indexOf(filterValue) === 0);
        break;
      case '4':
        filterResult = this.options.filter(option => option.toString().toLowerCase().indexOf(filterValue) === 0);
        break;
    }
    console.log(filterResult);
  }
}

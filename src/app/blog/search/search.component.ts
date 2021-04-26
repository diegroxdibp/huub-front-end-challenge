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


  constructor(private blogManager: BlogManagerService,
              public dialog: MatDialog,
              private dialogRef: MatDialogRef<SearchComponent>) { }

  searchInputValue: string;
  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  postsTitles = [];
  postsDates = [];
  postsTags = [];
  postsId = [];

  ngOnInit(): void {
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
    console.log(this.myControl.value);
    const key = event.value;
    this.emptyQueryArrays();
    this.searchInputValue =  ' ';

    switch (key) {
      case '1':
        this.blogManager.blogPosts.forEach(post => this.postsTitles.push(post.title));
        this.options = this.postsTitles;
        console.log(this.options);
        break;
      case '2':
        this.blogManager.blogPosts.forEach(post => this.postsDates.push(post.date.toLocaleString()));
        this.options = this.postsDates;
        console.log(this.options);
        break;
      case '3':
        this.blogManager.blogPosts.forEach(post => post.postTags.forEach(tag => this.postsTags.push(tag)));
        this.options = this.postsTags;
        console.log(this.postsTags);
        break;
      case '4':
        this.blogManager.blogPosts.forEach(post => this.postsId.push(post.id.toString()));
        this.options = this.postsId;
        console.log(this.postsId);
        break;
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
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
}

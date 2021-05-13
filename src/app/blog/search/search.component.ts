import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { iif, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { BlogManagerService } from '../blog-manager.service';
import { MatRadioChange } from '@angular/material/radio';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit {
  @ViewChild('searchField') searchField: ElementRef;
  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  postsTitles = [];
  postsDates = [];
  postsTags = [];
  postsId = [];
  activeRadioButton: string;
  queriedPosts: Post[];

  constructor(
    private blogManager: BlogManagerService,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<SearchComponent>,
    private cd: ChangeDetectorRef
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

  ngAfterViewInit(): void {
    this.searchField.nativeElement.focus();
    this.cd.detectChanges();
  }

  radioButtonChange(event: MatRadioChange): void {
    this.activeRadioButton = event.value;
    const selectedOption = event.value;
    this.optionsFromRadioButton(selectedOption);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    this.searchField.nativeElement.value = '';
  }

  private _filter(value: string): string[] {
    this.optionsFromRadioButton(this.activeRadioButton);
    let filterValue: any;
    switch (this.activeRadioButton) {
      case '1':
        filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
      case '2':
        filterValue = value.toLocaleString().toLowerCase();
        return this.options.filter(option => option.toLocaleString().toLowerCase().indexOf(filterValue) === 0);
      case '3':
        filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
      case '4':
        filterValue = value.toString().toLowerCase();
        return this.options.filter(option => option.toString().toLowerCase().indexOf(filterValue) === 0);
    }
  }

  optionsFromRadioButton(option: string): void {
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
    const listOfPosts = this.blogManager.getListOfPosts();
    let filterValue: any;
    let filteredResult: string[] = [];
    console.log(this.options);
    switch (this.activeRadioButton) {
      case '1':
        filterValue = this.searchField.nativeElement.value.toLowerCase();
        filteredResult = this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
        break;
      case '2':
        filterValue = this.searchField.nativeElement.value.toLocaleString().toLowerCase();
        filteredResult = this.options.filter(option => option.toLocaleString().toLowerCase().indexOf(filterValue) === 0);
        break;
      case '3':
        if (this.searchField.nativeElement.value) {
          filterValue = this.searchField.nativeElement.value.toLowerCase();
          filteredResult = this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
        }
        break;
      case '4':
        filterValue = this.searchField.nativeElement.value.toString().toLowerCase();
        filteredResult = this.options.filter(option => option.toString().toLowerCase().indexOf(filterValue) === 0);
        break;
    }
    let listOfMatchingPosts: Array<Post> = [];

    filteredResult.forEach(result => {
      listOfPosts.forEach(post => {
        if (post.title === result) { listOfMatchingPosts.push(post); }
      });
    });

    switch (this.activeRadioButton) {
      case '1':
        listOfMatchingPosts = [];
        filteredResult.forEach(result => {
          listOfPosts.forEach(post => {
            if (post.title === result) { listOfMatchingPosts.push(post); }
          });
        });
        break;
      case '2':
        listOfMatchingPosts = [];
        filteredResult.forEach(result => {
          listOfPosts.forEach(post => {
            if (post.date.toLocaleString() === result) { listOfMatchingPosts.push(post); }
          });
        });
        break;
      case '3':
        listOfMatchingPosts = [];
        filteredResult.forEach(result => {
          listOfPosts.forEach(post => {
            post.postTags.forEach(tag => {
              if (tag === result && !listOfMatchingPosts.includes(post)) {
                listOfMatchingPosts.push(post);
              }
            });
          });
        });
        break;
      case '4':
        listOfMatchingPosts = [];
        filteredResult.forEach(result => {
          listOfPosts.forEach(post => {
            if (post.id === parseInt(result, 10)) { listOfMatchingPosts.push(post); }
          });
        });
        break;
    }
    // console.log(listOfMatchingPosts);
    this.queriedPosts = listOfMatchingPosts;
  }
}

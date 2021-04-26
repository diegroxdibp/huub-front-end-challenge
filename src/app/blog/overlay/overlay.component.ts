import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { backToTop } from 'src/app/shared/utilty';
import { BlogManagerService } from '../blog-manager.service';
import { MatRadioChange } from '@angular/material/radio';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NewPostFormComponent } from '../new-post-form/new-post-form.component';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {

  constructor(public blogManager: BlogManagerService,
              public dialog: MatDialog) { }

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
  }

  radioButtonChange(event: MatRadioChange): void {
    const key = event.value;
    this.emptyQueryArrays();
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

  backToTop(): void {
    backToTop();
  }

  emptyQueryArrays(): void {
    this.postsTitles = [];
    this.postsDates = [];
    this.postsTags = [];
    this.postsId = [];
  }

  openNewPostDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(NewPostFormComponent, dialogConfig);
  }

  openSearchDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(SearchComponent, dialogConfig);
  }
}

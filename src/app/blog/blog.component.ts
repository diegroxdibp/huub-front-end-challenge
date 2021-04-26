import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { backToTop } from '../shared/utilty';
import { BlogManagerService } from './blog-manager.service';
import { NewPostFormComponent } from './new-post-form/new-post-form.component';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  constructor(
    public blogManager: BlogManagerService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
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

  backToTop(): void {
    backToTop();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { backToTop } from 'src/app/shared/utilty';
import { BlogManagerService } from '../blog-manager.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NewPostFormComponent } from '../new-post-form/new-post-form.component';
import { SearchComponent } from '../search/search.component';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
  isExtraSmall: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.XSmall);
  constructor(
    public blogManager: BlogManagerService,
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver) { }

  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  postsTitles = [];
  postsDates = [];
  postsTags = [];
  postsId = [];

  ngOnInit(): void {

  }

  backToTop(): void {
    backToTop();
  }

  openNewPostDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    window.innerWidth < 600 ? dialogConfig.width = '100%' : dialogConfig.width = '60%';
    this.dialog.open(NewPostFormComponent, dialogConfig);

  }

  openSearchDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    window.innerWidth < 600 ? dialogConfig.width = '100%' : dialogConfig.width = '60%';
    this.dialog.open(SearchComponent, dialogConfig);
  }
}

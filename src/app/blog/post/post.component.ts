import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';
import { BlogManagerService } from '../blog-manager.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditPostDialogComponent } from './edit-post-dialog/edit-post-dialog.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  editMode = false;
  constructor(private blogManager: BlogManagerService,
              public dialog: MatDialog,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // If url matches the ID of an post, se post to be the one that matches the ID on url
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    const numberOfPost = this.blogManager.getNumberOfPosts();
    if (id <= numberOfPost) {
      const fetchedPost = this.blogManager.getPostById(id);
      this.post = fetchedPost;
    }
  }

  getElements(): void {
  }

  deletePost(): void {
    this.blogManager.blogPosts = this.blogManager.blogPosts.filter(post => post.id !== this.post.id);
    this.blogManager.saveToLocalStorage();
  }

  editPost(): void {
    const title = document.querySelector('.title');
    this.editMode = !this.editMode;
  }

  saveChange(): void{
    this.blogManager.saveToLocalStorage();
    console.log('salvou!');
  }

  editPostDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(EditPostDialogComponent, dialogConfig);
  }
}

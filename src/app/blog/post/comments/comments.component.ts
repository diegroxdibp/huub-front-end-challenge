import { Component, Input, OnInit } from '@angular/core';
import { PostComment } from 'src/app/models/post-comment';
import { BlogManagerService } from '../../blog-manager.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() comment: PostComment;

  constructor(private blogManager: BlogManagerService) {
  }
  ngOnInit(): void {
  }

  addLike(): void {
    ++this.comment.likes;
    this.blogManager.saveToLocalStorage();
  }

  addDislike(): void {
    ++this.comment.dislikes;
    this.blogManager.saveToLocalStorage();
  }
}

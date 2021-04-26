import { Component, Input, OnInit } from '@angular/core';
import { PostComment } from 'src/app/models/post-comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() comment: PostComment;

  constructor() {
  }
  ngOnInit(): void {

  }
}

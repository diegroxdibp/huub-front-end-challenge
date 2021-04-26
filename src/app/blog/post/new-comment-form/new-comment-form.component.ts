import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/models/post';
import { PostComment } from 'src/app/models/post-comment';
import { BlogManagerService } from '../../blog-manager.service';

@Component({
  selector: 'app-new-comment-form',
  templateUrl: './new-comment-form.component.html',
  styleUrls: ['./new-comment-form.component.scss']
})
export class NewCommentFormComponent implements OnInit {
  @Input() post: Post;
  commentForm: FormGroup;
  showCommentForm = false;
  constructor(private blogManager: BlogManagerService) {
    this.commentForm = new FormGroup({
      author: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      comment: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
  }
  onSubmit(): void {
    const postAuthor = this.commentForm.value.author;
    const postComment = this.commentForm.value.comment;
    const comment = new PostComment(postAuthor, postComment);
    this.post.comments.push(comment);
    this.toggleNewCommentForm();
    localStorage.setItem('blogPosts', JSON.stringify(this.blogManager.blogPosts));
  }

  toggleNewCommentForm(): void {
    this.showCommentForm = !this.showCommentForm;
  }
}

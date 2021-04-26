import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { BlogManagerService } from '../../blog-manager.service';

@Component({
  selector: 'app-widget-bar',
  templateUrl: './widget-bar.component.html',
  styleUrls: ['./widget-bar.component.scss']
})
export class WidgetBarComponent implements OnInit {

  @Input() post: Post;

  likesdislikes = new EventEmitter();

  constructor(private blogManager: BlogManagerService) { }

  ngOnInit(): void {
  }

  addLike(): void {
    const postOnList = this.blogManager.getPostById(this.post.id);
    ++postOnList.likes;
    this.blogManager.saveToLocalStorage();
  }

  addDislike(): void {
    const postOnList = this.blogManager.getPostById(this.post.id);
    ++postOnList.dislikes;
    this.blogManager.saveToLocalStorage();
  }
}

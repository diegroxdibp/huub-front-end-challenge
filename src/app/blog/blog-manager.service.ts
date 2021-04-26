import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export abstract class BlogManagerService {

  blogPosts: Array<Post>;
  tags: Array<string>;
  constructor() {
    this.blogPosts = this.arrayOfPostFromParsedJSON() || [];
    this.tags = JSON.parse(localStorage.getItem('tags'));
  }

  arrayOfPostFromParsedJSON(): Array<Post> {
    const arrayFromParsedObj = JSON.parse(localStorage.getItem('blogPosts'));
    console.log(arrayFromParsedObj);
    let arrayOfPosts: Array<Post> = [];
    if (arrayFromParsedObj) {
      arrayFromParsedObj.forEach(parsedObj => {
        const parsedObjToClassInstance = new Post(
          parsedObj.title,
          parsedObj.img,
          parsedObj.text,
          parsedObj.id,
          parsedObj.posterEmail,
          parsedObj.postTags,
          parsedObj.postScheduled,
          parsedObj.scheduledDate,
          new Date(parsedObj.date),
          parsedObj.likes,
          parsedObj.dislikes,
          parsedObj.comments);
        arrayOfPosts.unshift(parsedObjToClassInstance);
        console.log(parsedObjToClassInstance);
      });
    }
    arrayOfPosts = this.sortPostsFromLastToFirst(arrayOfPosts);
    return arrayOfPosts;
  }

  getPostById(id: number): Post {
    for (const post of this.blogPosts) {
      if (id === post.id) {
        return post;
      }
    }
  }

  getFirstPost(): Post {
    const firstPost: Post = this.blogPosts[0];
    return firstPost;
  }

  getLastPost(): Post {
    const lastPost: Post = this.blogPosts[this.blogPosts.length - 1];
    return lastPost;
  }

  getNumberOfPosts(): number {
    const NumberOfPosts: number = this.blogPosts.length;
    return NumberOfPosts;
  }

  generateNewPostId(): number {
    // last post is the first because of unshift
    // also not using length so I wont have new ID havingthe same ID of a deleted post
    const lastPost = this.getFirstPost();
    let newPostId: number;
    if (lastPost) {
      newPostId = lastPost.id + 1;
    } else {
      newPostId = 1;
    }
    return newPostId;
  }

  saveToLocalStorage(): void {
    localStorage.setItem('blogPosts', JSON.stringify(this.blogPosts));
    localStorage.setItem('tags', JSON.stringify(this.tags));
  }

  sortPostsFromFirstToLast(arrayToBeSorted: Array<Post>): Array<Post> {
    const sortedArray = arrayToBeSorted.sort((a, b) => a.id - b.id);
    return sortedArray;
  }

  sortPostsFromLastToFirst(arrayToBeSorted: Array<Post>): Array<Post> {
    const sortedArray = arrayToBeSorted.sort((a, b) => b.id - a.id);
    return sortedArray;
  }
}

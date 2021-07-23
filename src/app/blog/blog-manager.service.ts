import { PostComment } from 'src/app/models/post-comment';
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
    this.tags = JSON.parse(localStorage.getItem('tags')) || [];
  }

  arrayOfPostFromParsedJSON(): Array<Post> {
    const arrayFromParsedObj = JSON.parse(localStorage.getItem('blogPosts'));
    // console.log(arrayFromParsedObj);
    let arrayOfPosts: Array<Post> = [];
    if (arrayFromParsedObj) {
      arrayFromParsedObj.forEach(parsedObj => {
        const listOfParsedCommentsToClassInstace: PostComment[] = [];
        parsedObj.comments.forEach(comment => {
          const parsedCommentToClassInstance = new PostComment(comment.author, comment.comment, comment.likes, comment.dislikes);
          listOfParsedCommentsToClassInstace.push(parsedCommentToClassInstance);
        });

        const parsedObjToClassInstance = new Post(
          parsedObj.title,
          parsedObj.img,
          parsedObj.text,
          parsedObj.id,
          parsedObj.posterEmail,
          parsedObj.postTags,
          parsedObj.postScheduled,
          new Date(parsedObj.scheduledDate),
          new Date(parsedObj.date),
          parsedObj.wasEdited,
          new Date(parsedObj.editDate),
          parsedObj.likes,
          parsedObj.dislikes,
          listOfParsedCommentsToClassInstace);
        arrayOfPosts.unshift(parsedObjToClassInstance);
        console.log(parsedObjToClassInstance);
      });
    }
    arrayOfPosts = this.sortPostsFromLastToFirst(arrayOfPosts);
    return arrayOfPosts;
  }

  getListOfPosts(): Array<Post> {
    return this.blogPosts;
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
    const NumberOfPosts: number = this.blogPosts.length + 1;
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

  getListOfPostTitles(): Array<string> {
    const listOfPostTitles = [];
    this.blogPosts.forEach(post => listOfPostTitles.push(post.title));
    return listOfPostTitles;
  }

  getListOfPostDates(): Array<string> {
    const listOfPostDates = [];
    this.blogPosts.forEach(post => listOfPostDates.push(post.date));
    return listOfPostDates;
  }

  getListOfPostDatesToLocaleString(): Array<string> {
    const listOfPostDates = [];
    this.blogPosts.forEach(post => listOfPostDates.push(post.date.toLocaleString()));
    return listOfPostDates;
  }

  getListOfPostTags(): Array<string> {
    const listOfPostTags = [];
    this.blogPosts.forEach(post => post.postTags.forEach(tag => {
      listOfPostTags.push(tag);
    }));
    return listOfPostTags;
  }

  getListOfPostId(): Array<string> {
    const listOfPostId = [];
    this.blogPosts.forEach(post => listOfPostId.push(post.id));
    return listOfPostId;
  }
}

export class PostComment {
  author: string;
  comment: string;
  likes: number;
  dislikes: number;
  commentDate: Date = new Date();
  constructor(author: string, comment: string, likes: number = 0, dislikes: number = 0) {
    this.author = author;
    this.comment = comment;
    this.likes = likes;
    this.dislikes = dislikes;
  }
}

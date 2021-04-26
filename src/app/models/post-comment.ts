export class PostComment {
  author: string;
  comment: string;
  commentDate: Date = new Date();
  constructor(author: string, comment: string) {
    this.author = author;
    this.comment = comment;
  }
}

import { PostComment } from './post-comment';

export class Post {
  title: string;
  id: number;
  posterEmail: string;
  postTags: Array<string>;
  date: Date;
  postScheduled: boolean;
  scheduledDate: Date;
  img: string;
  text: string;
  likes: number;
  dislikes: number;
  comments: Array<PostComment>;
  constructor(title: string, postImage: string, text: string, newPostId: number = 0, posterEmail: string = 'Anonymous',
              postTags: Array<string> = [], postScheduled: boolean = false, postScheduledDate: Date = null, date: Date = new Date(),
              likes: number = 0, dislikes: number = 0, comments: Array<PostComment> = []) {
    this.title = title;
    this.id = newPostId;
    this.posterEmail = posterEmail;
    this.postTags = postTags;
    this.postScheduled = postScheduled;
    this.scheduledDate = postScheduledDate;
    this.date = date;
    this.img = this.imgPlaceholder(postImage);
    this.text = text;
    this.likes = likes;
    this.dislikes = dislikes;
    this.comments = comments;
  }

  imgPlaceholder(imageUrl: string): string {
    if (imageUrl.trim() === '') {
      return 'https://picsum.photos/900';
    } else { return imageUrl; }
  }
}

import { PostComment } from './post-comment';

export class Post {
  title: string;
  id: number;
  posterEmail: string;
  postTags: Array<string>;
  postScheduled: boolean;
  scheduledDate: Date;
  date: Date;
  wasEdited: boolean;
  editDate: Date;
  img: string;
  text: string;
  likes: number;
  dislikes: number;
  comments: Array<PostComment>;
  constructor(title: string, postImage: string, text: string, newPostId: number = 0, posterEmail: string = 'Anonymous',
              postTags: Array<string> = [], postScheduled: boolean = false, postScheduledDate: Date = null, date: Date = new Date(),
              wasEdited = false, editDate = null, likes: number = 0, dislikes: number = 0, comments: Array<PostComment> = []) {
    this.title = title;
    this.id = newPostId;
    this.posterEmail = posterEmail;
    this.postTags = postTags;
    this.postScheduled = postScheduled;
    this.scheduledDate = postScheduledDate;
    this.date = date;
    this.wasEdited = wasEdited;
    this.editDate = editDate;
    this.img = this.imgPlaceholder(postImage);
    this.text = text;
    this.likes = likes;
    this.dislikes = dislikes;
    this.comments = comments;
  }

  postEdited(): void{
    this.wasEdited = true;
    this.editDate = new Date();
  }

  imgPlaceholder(imageUrl: string): string {
    if (imageUrl.trim() === '') {
      return 'https://picsum.photos/900';
    } else { return imageUrl; }
  }
}

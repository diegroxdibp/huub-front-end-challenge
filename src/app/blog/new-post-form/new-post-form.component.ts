import { Component, Output, EventEmitter, OnInit, ElementRef, ViewChild, Inject, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Post } from 'src/app/models/post';
import { BlogManagerService } from '../blog-manager.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { isPriorToDate } from 'src/app/shared/validators';
import { MatDialogRef } from '@angular/material/dialog';
import { backToTop } from 'src/app/shared/utilty';

@Component({
  selector: 'app-new-post-form',
  templateUrl: './new-post-form.component.html',
  styleUrls: ['./new-post-form.component.scss']
})
export class NewPostFormComponent implements OnInit, AfterViewInit {

  @Output() postCreationMode = new EventEmitter<boolean>();
  @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  @ViewChild('firstField') firstFIeld: ElementRef;

  form: FormGroup;
  minDate: Date = new Date();
  schedulePost = false;

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA, SPACE];
  tagCtrl = new FormControl();
  filteredtags: Observable<string[]>;
  tags: string[] = [];
  alltags: string[];

  constructor(
    private blogManager: BlogManagerService,
    private dialogRef: MatDialogRef<NewPostFormComponent>,
    private cd: ChangeDetectorRef
  ) {

    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      scheduleCheckbox: new FormControl(),
      date: new FormControl('', isPriorToDate(this.form?.value?.date)),
      tags: new FormControl(),
      text: new FormControl('', [Validators.required, Validators.maxLength(500)]),
      image: new FormControl('', [Validators.required, Validators.pattern(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)]),
    });
    this.filteredtags = this.tagCtrl.valueChanges.pipe(
      // tslint:disable-next-line: deprecation
      startWith(null),
      map((tag: string | null) => tag ? this._filter(tag) : this.alltags.slice()));
    this.alltags = blogManager.tags;
  }

  ngOnInit(): void {
    this.dialogRef.keydownEvents().subscribe(event => {
      if (event.key === 'Escape') {
        this.closeDialogWindow();
      }
    });
  }

  ngAfterViewInit(): void {
    this.firstFIeld.nativeElement.focus();
    this.cd.detectChanges();
  }

  onSubmit(): void {
    let newPost: Post;
    const newPostId: number = this.blogManager.generateNewPostId();
    const postTitle: string = this.form.value.title;
    const posterEmail: string = this.form.value.email;
    const postImage: string = this.form.value.image;
    const postText: string = this.form.value.text;
    const postScheduledDate: Date = this.form.value.date;
    const postTags = this.tags;
    const newTags = postTags.filter(tag => !this.blogManager.tags.includes(tag));
    this.blogManager.tags.push(...newTags);
    if (this.form.value.scheduleCheckbox) {
      newPost = new Post(postTitle, postImage, postText, newPostId, posterEmail, postTags, this.schedulePost, postScheduledDate);
    } else {
      newPost = new Post(postTitle, postImage, postText, newPostId, posterEmail, postTags);
    }
    this.blogManager.blogPosts.unshift(newPost);
    const blogPosts = this.blogManager.blogPosts;
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    localStorage.setItem('tags', JSON.stringify(postTags));
    document.body.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    this.disablePostCreationMode();
    this.resetForm();
    this.closeDialogWindow();
    backToTop();
  }

  resetForm(): void {
    this.form.reset();
  }

  toggleSchedulePost(): void {
    this.schedulePost = !this.schedulePost;
  }

  disablePostCreationMode(): void {
    this.postCreationMode.emit(false);
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our tag
    if ((value || '').trim()) {
      this.tags.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.tagCtrl.setValue(null);
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.viewValue);
    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.alltags.filter(tag => tag.toLowerCase().indexOf(filterValue) === 0);
  }

  closeDialogWindow(): void {
    this.dialogRef.close();
  }
}

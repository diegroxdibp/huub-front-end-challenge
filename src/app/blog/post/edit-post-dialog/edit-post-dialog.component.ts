import { AfterViewInit, Component, Inject, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-edit-post-dialog',
  templateUrl: './edit-post-dialog.component.html',
  styleUrls: ['./edit-post-dialog.component.scss']
})
export class EditPostDialogComponent implements AfterViewInit {
  form: FormGroup;
  unalteredPost: Post;
  titleValue: string;
  editModeTitle = false;
  imageValue: string;
  editModeImage = false;
  textValue: string;
  editModeText = false;
  editModeTags = false;
  fromPage: string;
  fromDialog: string;
  disableAnimation = true;
  constructor(
    private dialogRef: MatDialogRef<EditPostDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.unalteredPost = data.unalteredPost;
    this.fromPage = data.inputValue;
    this.form = new FormGroup({
      title: new FormControl(),
      email: new FormControl(),
      scheduleCheckbox: new FormControl(),
      date: new FormControl(),
      tags: new FormControl(),
      text: new FormControl('', Validators.maxLength(500)),
      image: new FormControl('', Validators.pattern(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)),
    });
  }
  onSubmit(): void {

  }
  confirmAndCloseDialogWindow(): void {
    this.dialogRef.close({ event: 'close', data: this.fromDialog });
  }

  closeDialogWindow(): void {
    this.dialogRef.close();
  }

  ngAfterViewInit(): void {
    this.imageValue = '';
    // timeout required to avoid the dreaded 'ExpressionChangedAfterItHasBeenCheckedError'
    setTimeout(() => this.disableAnimation = false);
  }

  editTitle(): void {
    this.editModeTitle = !this.editModeTitle;
    if (!this.editModeTitle) {
      this.titleValue = '';
    }
  }

  editImage(): void {
    this.editModeImage = !this.editModeImage;
    if (!this.editModeImage) {
      this.imageValue = '';
    }
  }

  editText(): void {
    this.editModeText = !this.editModeText;
    if (!this.editModeText) {
      this.textValue = '';
    }
  }

  editTags(): void {
    this.editModeTags = !this.editModeTags;
  }


}

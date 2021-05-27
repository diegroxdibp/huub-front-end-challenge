import { AfterViewInit, Component, Inject, OnInit, Optional, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatAccordion, MatExpansionPanel } from '@angular/material/expansion';
import { Post } from 'src/app/models/post';
import { BlogManagerService } from '../../blog-manager.service';

@Component({
  selector: 'app-edit-post-dialog',
  templateUrl: './edit-post-dialog.component.html',
  styleUrls: ['./edit-post-dialog.component.scss']
})
export class EditPostDialogComponent implements AfterViewInit {
  @ViewChild(MatAccordion) accordion;
  @ViewChild('title') title: MatExpansionPanel;
  @ViewChild('titleValue') titleValue: ElementRef;
  @ViewChild('image') image: MatExpansionPanel;
  @ViewChild('imageValue') imageValue: ElementRef;
  @ViewChild('text') text: MatExpansionPanel;
  @ViewChild('textValue') textValue: ElementRef;
  formTitle: FormGroup;
  formImage: FormGroup;
  formText: FormGroup;
  originalTitle: string;
  originalImage: string;
  originalText: string;
  editModeTitle = false;
  editModeImage = false;
  editModeText = false;
  editModeTags = false;
  wasEditedTitle = false;
  wasEditedImage = false;
  wasEditedText = false;
  fromDialog: string;
  disableAnimation = true;
  panelHeaderColorTitle: string;
  panelHeaderColorImage: string;
  panelHeaderColorText: string;
  constructor(
    private blogManager: BlogManagerService,
    private dialogRef: MatDialogRef<EditPostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formTitle = new FormGroup({
      title: new FormControl('', Validators.required),
    });
    this.formImage = new FormGroup({
      image: new FormControl('', Validators.pattern(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)),
    });
    this.formText = new FormGroup({
      text: new FormControl('', Validators.maxLength(500)),
    });
    this.originalTitle = this.data.post.title;
    this.originalImage = this.data.post.img;
    this.originalText = this.data.post.text;
  }

  ngAfterViewInit(): void {
    // timeout required to avoid the dreaded 'ExpressionChangedAfterItHasBeenCheckedError'
    setTimeout(() => this.disableAnimation = false);
  }
  editTitle(): void {
    this.editModeTitle = !this.editModeTitle;
    if (!this.editModeTitle) {
      this.titleValue.nativeElement.value = '';
    }
  }

  editTitleCancel(): void {
    this.editModeTitle = !this.editModeTitle;
    if (!this.editModeTitle) {
      this.titleValue.nativeElement.value = '';
    }
    this.title.expanded = false;
  }

  onSubmitTitle(): void {
    this.wasEditedTitle = true;
    this.editModeTitle = !this.editModeTitle;
    this.panelHeaderColorTitle = 'springgreen';
    this.title.expanded = false;
    this.data.post.title = this.formTitle.value.title;
    this.data.post.postEdited();
    this.blogManager.saveToLocalStorage();
  }

  editImage(): void {
    this.editModeImage = !this.editModeImage;
    if (!this.editModeImage) {
      this.formImage.value.image = '';
    }
  }

  editImageCancel(): void {
    this.editModeImage = !this.editModeImage;
    if (!this.editModeImage) {
      this.imageValue.nativeElement.value = '';
    }
    this.image.expanded = false;
  }

  onSubmitImage(): void {
    this.wasEditedImage = true;
    this.editModeImage = !this.editModeImage;
    this.panelHeaderColorImage = 'springgreen';
    this.image.expanded = false;
    this.data.post.img = this.formImage.value.image;
    this.data.post.postEdited();
    this.blogManager.saveToLocalStorage();
  }

  editText(): void {
    this.editModeText = !this.editModeText;
    if (!this.editModeText) {
      this.formText.value.text = '';
    }
  }

  editTextCancel(): void {
    this.editModeText = !this.editModeText;
    if (!this.editModeText) {
      this.textValue.nativeElement.value = '';
    }
    this.text.expanded = false;
  }

  onSubmitText(): void {
    this.wasEditedText = true;
    this.editModeText = !this.editModeText;
    this.panelHeaderColorText = 'springgreen';
    this.text.expanded = false;
    this.data.post.text = this.formText.value.text;
    this.data.post.postEdited();
    this.blogManager.saveToLocalStorage();
  }
  confirmAndCloseDialogWindow(): void {
    this.dialogRef.close({ event: 'close', data: this.fromDialog });
  }

  closeDialogWindow(): void {
    this.dialogRef.close();
  }
}

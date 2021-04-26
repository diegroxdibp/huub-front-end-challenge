import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BlogManagerService } from '../../blog-manager.service';

@Component({
  selector: 'app-edit-post-dialog',
  templateUrl: './edit-post-dialog.component.html',
  styleUrls: ['./edit-post-dialog.component.scss']
})
export class EditPostDialogComponent implements OnInit {

  constructor(
    private blogManager: BlogManagerService,
    private dialogRef: MatDialogRef<EditPostDialogComponent>
  ) { }

  ngOnInit(): void {
  }

  closeDialogWindow(): void {
    this.dialogRef.close();
  }
}

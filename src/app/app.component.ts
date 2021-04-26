import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StandModalComponent } from './stand-modal/stand-modal.component';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NgbCarouselConfig]
})

export class AppComponent {

  title = 'webfolio-angular';

  isActive = false;

  toggleActive(): void {
    this.isActive = !this.isActive;
  }
  // constructor(public dialog: MatDialog) { }

  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  // openDialog(): void {
  //   this.dialog.open(StandModalComponent);
  // }
}

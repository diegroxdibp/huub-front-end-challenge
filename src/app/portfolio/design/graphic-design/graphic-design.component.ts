import { Component, OnInit } from '@angular/core';
import { backToTop } from 'src/app/shared/utilty';

@Component({
  selector: 'app-graphic-design',
  templateUrl: './graphic-design.component.html',
  styleUrls: ['./graphic-design.component.scss']
})
export class GraphicDesignComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  backToTop($event): void {
    $event.target.style.opacity = 0;
    backToTop();
  }
}

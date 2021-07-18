import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { backToTop } from '../shared/utilty';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  glitchClass;
  constructor() { }

  ngOnInit(): void {
  }

  backToTop(): void {
    backToTop();
  }
}

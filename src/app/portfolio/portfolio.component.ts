import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger, query, stagger } from '@angular/animations';
import { backToTop } from '../shared/utilty';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger('welcomeAnimation', [
      transition(':enter', [
        query('.li', [
          style({ opacity: 0 }),
          stagger('1000ms', [
            animate('1000ms', style({ opacity: 1 }))
          ])
        ])
      ])
    ])
  ]
})
export class PortfolioComponent implements OnInit {
  @ViewChild('devPortf') devPortf: ElementRef;
  glitchClass;
  devIsOn = false;
  designIsOn = false;
  constructor() { }

  ngOnInit(): void {
  }

  backToTop(): void {
    backToTop();
  }

  devPort() {
    this.devIsOn = true;
    setTimeout(() => {
      this.devPortf.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start'});
    });
    // const scrolledY = window.scrollY;
    // const navHeight = -66;
    // if (scrolledY) {
    //   window.scroll(0, scrolledY - navHeight);
    // }

  }
}

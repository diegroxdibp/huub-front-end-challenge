import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger, query, stagger } from '@angular/animations';

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

  constructor() { }

  ngOnInit(): void {
  }

}

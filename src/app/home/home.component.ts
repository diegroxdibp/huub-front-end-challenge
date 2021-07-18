import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(4000)
      ])
    ]),
    trigger('menuAnimation', [
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
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
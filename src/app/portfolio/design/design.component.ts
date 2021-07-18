import { Component, OnInit } from '@angular/core';
import { backToTop } from 'src/app/shared/utilty';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  backToTop(): void {
    backToTop();
  }
}

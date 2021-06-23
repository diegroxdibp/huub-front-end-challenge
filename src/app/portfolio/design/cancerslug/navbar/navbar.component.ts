import { Component, OnInit } from '@angular/core';
import { CancerslugNavbarVisibilityService } from './cancerslug-navbar-visibility.service';

@Component({
  selector: 'cancerslug-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class CancerslugNavbarComponent implements OnInit {

  constructor(public cancerslugNavbarVisibilityService: CancerslugNavbarVisibilityService) { }

  ngOnInit() { }

  toLanding() {
    this.cancerslugNavbarVisibilityService.hide();
    this.cancerslugNavbarVisibilityService.isLanding = true;
  }
}

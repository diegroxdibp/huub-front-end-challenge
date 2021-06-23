import { Component, OnInit } from '@angular/core';
import { NavbarVisibilityService } from 'src/app/navbar/navbar-visibility.service';
import { CancerslugNavbarVisibilityService } from '../navbar/cancerslug-navbar-visibility.service';

@Component({
  selector: 'cancerslug-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class CancerslugHomeComponent implements OnInit {

  constructor(public navbarVisibilityService: NavbarVisibilityService,
    public cancerslugNavbarVisibilityService: CancerslugNavbarVisibilityService) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.cancerslugNavbarVisibilityService.updateUrl();
      this.cancerslugNavbarVisibilityService.checkIsLanding();
      this.cancerslugNavbarVisibilityService.show();
    })
  }
}

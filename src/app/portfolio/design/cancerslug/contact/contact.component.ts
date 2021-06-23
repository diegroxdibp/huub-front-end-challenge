import { Component, OnInit } from '@angular/core';
import { NavbarVisibilityService } from 'src/app/navbar/navbar-visibility.service';
import { CancerslugNavbarVisibilityService } from '../navbar/cancerslug-navbar-visibility.service';

@Component({
  selector: 'cancerslug-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class CancerslugContactComponent implements OnInit {

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

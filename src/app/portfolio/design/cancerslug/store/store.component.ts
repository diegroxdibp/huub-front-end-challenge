import { Component, OnInit } from '@angular/core';
import { NavbarVisibilityService } from 'src/app/navbar/navbar-visibility.service';
import { CancerslugNavbarVisibilityService } from 'src/app/portfolio/design/cancerslug/navbar/cancerslug-navbar-visibility.service';

@Component({
  selector: 'cancerslug-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class CancerslugStoreComponent implements OnInit {

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

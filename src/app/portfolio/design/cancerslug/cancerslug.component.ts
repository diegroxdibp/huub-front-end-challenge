import { Component, OnInit } from '@angular/core';
import { NavbarVisibilityService } from 'src/app/navbar/navbar-visibility.service';
import { CancerslugNavbarVisibilityService } from 'src/app/portfolio/design/cancerslug/navbar/cancerslug-navbar-visibility.service';

@Component({
  selector: 'cancerslug',
  templateUrl: './cancerslug.component.html',
  styleUrls: ['./cancerslug.component.scss']
})
export class CancerslugComponent implements OnInit {

  constructor(public navbarVisibilityService: NavbarVisibilityService,
    public cancerslugNavbarVisibilityService: CancerslugNavbarVisibilityService) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.navbarVisibilityService.hide();
    })
  }
}

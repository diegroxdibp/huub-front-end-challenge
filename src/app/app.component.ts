import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarVisibilityService } from './navbar/navbar-visibility.service';
import { slider } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slider
  ]
})

export class AppComponent {

  title = 'webfolio-angular';
  navbarVisible: boolean;
  isActive = false;

  toggleActive(): void {
    this.isActive = !this.isActive;
  }

  constructor(public navbarVisibilityService: NavbarVisibilityService) { }

  // tslint:disable-next-line: typedef
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}

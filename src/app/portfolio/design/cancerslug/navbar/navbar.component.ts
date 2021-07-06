import { animate, animateChild, group, query, sequence, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { CancerslugNavbarVisibilityService } from './cancerslug-navbar-visibility.service';

@Component({
  selector: 'cancerslug-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [

    // trigger('menuAnimation', [
    //   state('collapsed', style({
    //     height: 0,
    //     opacity: 0,
    //   })),
    //   state('expanded', style({
    //     height: '*',
    //     opacity: 1,
    //   })),
    //   transition('collapsed => expanded', [
    //     group([
    //       animate('300ms ease-out'),
    //       query('.li', [
    //         style({ opacity: 0 }),
    //         stagger('300ms', [
    //           animate('1000ms', style({ opacity: 1 }))
    //         ])
    //       ])
    //     ]),
    //   ]),
    //   transition('expanded => collapsed', [
    //     group([
    //       animate('300ms ease-in'),
    //       query('.li', [
    //         style({ opacity: 1 }),
    //         stagger('-300ms', [
    //           animate('1000ms', style({ opacity: 0 }))
    //         ])
    //       ])
    //     ]),
    //   ])
    // ])

  ]
})


// transition('collapsed => expanded', [
//   query('.li', [
//     style({ opacity: 0 }),
//     stagger('300ms', [
//       animate('1000ms', style({ opacity: 1 }))

//     ])
//   ])
// ]),

export class CancerslugNavbarComponent implements OnInit {
  navbarOpened = false;
  navItems;
  constructor(public cancerslugNavbarVisibilityService: CancerslugNavbarVisibilityService) {
  }

  ngOnInit(): void {
    this.navItems = document.querySelectorAll('.nav-item');
    console.log(this.navItems);
  }

  animateNavItems(): void {
    this.navItems.forEach((item, index) => {
      item.style.animation
        ? item.style.animation = ''
        : item.style.animation = `navItemsFade 500ms ease forwards ${index / 7 + 0.2}s`;
    });
  }

  toLanding(): void {
    this.cancerslugNavbarVisibilityService.hide();
    this.cancerslugNavbarVisibilityService.isLanding = true;
  }

  toggleNavbar(): void {
    this.navbarOpened = !this.navbarOpened;
    this.animateNavItems();
  }
}

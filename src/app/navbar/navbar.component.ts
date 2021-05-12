import { backToTop } from 'src/app/shared/utilty';
import { Component, HostBinding, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { animate, state, style, group, transition, trigger, query, stagger, animateChild } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('menuAnimation', [
      state('collapsed', style({
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        opacity: 0
      })),

      transition('collapsed => expanded', [
        animate('300ms ease-out', style({
          height: '*',
          paddingTop: '*',
          paddingBottom: '*'
        })),
        animate('1s', style({ opacity: 1 }))
      ]),

      transition('expanded => collapsed', [
        animate('200ms ease-in')
      ])
    ])

    // trigger('menuAnimation', [
    //   transition(':enter', [
    //     group([
    //       query('ul', [
    //         style({  height: '0px' }),
    //         animate(1000)
    //       ]),
    //       query('.nav-items',
    //         stagger(200, [
    //           style({ opacity: 0, transform: 'translateX(-20px)' }),
    //           animate(1000)
    //         ])
    //       )
    //     ])
    //   ])
    // ])

    // trigger('menuAnimation', [
    //   state('hide', style({ height: '0px'})),
    //   state('show', style({ height: '*'})),
    //   transition('hide<=>show', animate(500)),

    //   query('@navItemsAnimation', animateChild())
    // ]),
    // trigger('navItemsAnimation', [
    //   state('hide', style({opacity: '0' })),
    //   state('show', style({opacity: '1' })),
    //   transition('hide<=>show', animate(500)),
    // ]),

    // trigger('menuAnimation', [
    //   transition(':hide', [
    //     // we set the width of the outer container to 0, and hide the
    //     // overflow (so the inner container won't be visible)
    //     style({ height: '0px' }),
    //     group([
    //       // we animate the outer container width to it's original value
    //       animate('250ms ease-out', style({ height: '*' })),
    //       // in the same time we translate the inner element all the
    //       // way from left to right
    //       query('.nav-items', [
    //         style({ opacity: '0' }),
    //         group([animate('250ms ease-out', style({  opacity: '1' }))]),
    //       ]),
    //     ]),
    //   ]),
    //   transition(':show', [
    //     style({ }),
    //     group([
    //       animate('250ms ease-out', style({ width: '0' })),
    //       query('.nav-items', [
    //         style({  opacity: '1' }),
    //         group([animate('250ms ease-out', style({ opacity: '0' }))]),
    //       ]),
    //     ]),
    //   ]),
    // ])

    // trigger('listAnimation', [
    //   transition('* <=> *', [ // each time the binding value changes
    //     query(':none', [
    //       stagger(1100, [
    //         animate('1s', style({ opacity: 0 }))
    //       ])
    //     ]),
    //     query(':show', [
    //       style({ opacity: 0 }),
    //       stagger(1100, [
    //         animate('1s', style({ opacity: 1 }))
    //       ])
    //     ])
    //   ])
    // ])
  ]
})
export class NavbarComponent {

  @HostBinding('class.navbar-opened') navbarOpened = false;
  isFixedNavbar;
  screenHeight: number;
  screenWidth: number;
  isActive = false;
  stateUl = 'collapsed';
  stateLi = 'collapsed';
  large = false;
  small = false;

  constructor() {
    // this.getScreenSize();
  }

  // @HostListener('window:scroll', [])
  // onWindowScroll(): void {
  //   const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //   if (offset > 10) {
  //     this.isFixedNavbar = true;
  //   } else {
  //     this.isFixedNavbar = false;
  //   }
  // }
  // @HostListener('window:resize', ['$event'])
  // getScreenSize(event?): void {
  //   this.screenHeight = window.innerHeight;
  //   this.screenWidth = window.innerWidth;
  //   console.log(this.screenHeight, this.screenWidth);

  //   if (this.screenWidth >= 800) {
  //     this.large = true;
  //     this.small = false;
  //   } else {
  //     this.small = true;
  //     this.large = false;
  //   }
  // }

  // toggleActive(): void {
  //   this.isActive = !this.isActive;
  //   this.stateUl === 'collapsed' ? this.stateUl = 'expanded' : this.stateUl = 'collapsed';
  //   this.stateLi === 'collapsed' ? this.stateLi = 'expanded' : this.stateLi = 'collapsed';
  //   console.log('ul : ' + this.stateUl);
  //   console.log('li : ' + this.stateLi);
  // }

  toggleNavbar(): void {
    this.navbarOpened = !this.navbarOpened;
  }

  backToTop(): void {
    backToTop();
  }
}

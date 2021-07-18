import { backToTop } from 'src/app/shared/utilty';
import { Component, HostBinding, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { animate, state, style, group, transition, trigger, query, stagger, animateChild } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  // animations: [
  //   trigger('menuAnimation', [
  //     state('collapsed', style({
  //       height: 0,
  //       paddingTop: 0,
  //       paddingBottom: 0,
  //       opacity: 0
  //     })),

  //     transition('collapsed => expanded', [
  //       animate('300ms ease-out', style({
  //         height: '*',
  //         paddingTop: '*',
  //         paddingBottom: '*'
  //       })),
  //       animate('1s', style({ opacity: 1 }))
  //     ]),

  //     transition('expanded => collapsed', [
  //       animate('200ms ease-in')
  //     ])
  //   ])
  // ]
})
export class NavbarComponent {

  @HostBinding('class.navbar-opened') navbarOpened = false;
  isFixedNavbar;
  screenHeight: number;
  screenWidth: number;
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

  toggleNavbar(): void {
    this.navbarOpened = !this.navbarOpened;
  }

  backToTop(): void {
    backToTop();
  }
}

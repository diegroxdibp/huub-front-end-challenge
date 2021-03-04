import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHamburguerToggle]'
})
export class HamburguerToggleDirective {

  navMenu: any = document.getElementsByClassName('.menu');

  @HostBinding('class.is-active')
  private isActive = false;


  @HostListener('click')
  toggleActive(): void {
    this.isActive = !this.isActive;
    // if(this.isActive){
    //   this.navMenu.style.height = '0';
    // } else {
    //   this.navMenu.style.height = 'initial';

    // }
  }
}

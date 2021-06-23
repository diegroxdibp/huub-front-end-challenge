import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CancerslugNavbarVisibilityService {
  visible: boolean;
  isLanding: boolean;
  url: string = "";

  constructor(private router: Router) {
    this.visible = false;
    this.isLanding = true
    this.updateUrl();
    this.checkIsLanding();
  }

  hide() { this.visible = false; }

  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }

  updateUrl(): void {
    this.url = this.router.url;
  }

  checkIsLanding(): void {
    this.isLanding = this.url === "/cancerslug" ? true : false;
  }
}

import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HuubAuthService } from './huub-auth.service';

@Component({
  selector: 'app-huub',
  templateUrl: './huub.component.html',
  styleUrls: ['./huub.component.scss']
})
export class HuubComponent implements OnInit {

  constructor(
    private auth: HuubAuthService,
    private router: Router,
  ) {
    router.events.subscribe((val) => {
      if ((val as NavigationEnd).url === '/huub') {
        this.router.navigate(['huub/home']);
      }
    });
  }

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['huub/home']);
    } else {
      this.router.navigate(['huub/login']);
    }
  }

}

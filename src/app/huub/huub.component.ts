import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    ) { }

  ngOnInit(): void {
    if (this.auth.isLoggedIn()){
      this.router.navigate(['huub/home']);
    } else{
      this.router.navigate(['huub/login']);
    }
    // this.huub.getToken().subscribe(data => console.log(data));
  }

}

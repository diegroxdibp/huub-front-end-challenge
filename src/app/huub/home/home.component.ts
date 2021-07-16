import { Component, OnInit } from '@angular/core';
import { HuubAuthService } from '../huub-auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-huub-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HuubHomeComponent implements OnInit {
  user: User;
  constructor(private auth: HuubAuthService) { }

  ngOnInit(): void {
    this.user = this.auth.getUserFromLocalStorage();
  }

  logout(): void {
    this.auth.logout();
  }
}

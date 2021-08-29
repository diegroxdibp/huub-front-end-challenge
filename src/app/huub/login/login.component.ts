import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HuubAuthService } from '../huub-auth.service';
import { HuubServiceService } from '../huub-service.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
  subject$: Subject<User>;
  loginForm: FormGroup;
  login = 'New Session';

  constructor(
    private huub: HuubServiceService,
    private auth: HuubAuthService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
  }

  submit(): void {
    const username = this.loginForm.value.username;
    this.huub.getToken().subscribe(response => {
      this.subject$.next(new User(username, response.data.jwt, response.data.expiration_time));
    });
    this.createAccountOnServerResponse();
  }

  // Wait for the token from server
  createAccountOnServerResponse(): void {
    this.subject$ = new Subject();
    this.subject$.subscribe(user => {
      this.auth.saveToLocalStorage(user);
      this.router.navigate(['huub/home']);
      this.subject$.complete();
    });
  }
}

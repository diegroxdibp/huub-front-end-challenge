import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { HuubAuthService } from '../huub-auth.service';
import { HuubServiceService } from '../huub-service.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(':enter', [
          style({ opacity: 0, transform: ' rotateY(0) scale(0.8)' }),
          animate(
            '300ms ease-in',
            style({ opacity: 1, transform: ' rotateY(160deg) scale(1)' })
          ),
        ]),
      ]
    )
  ],
})

export class LoginComponent {
  @ViewChild('logo') logo: ElementRef;
  @ViewChild('form') form: ElementRef;
  subject$: Subject<User>;
  loginForm: FormGroup;
  accountCreationMode = false;
  passwordHide = true;
  loginBtnText = 'Login';
  createAccBtnText = 'Create Account';

  constructor(private huub: HuubServiceService,
    private auth: HuubAuthService,
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    }
    );
  }
  toggleAccountCreatrion(): void {
    this.accountCreationMode = !this.accountCreationMode;
  }

  submit($event): void {
    this.subject$ = new Subject();
    this.subject$.subscribe(user => {
      this.auth.saveToLocalStorage(user);
      this.auth.getUserFromLocalStorage();
      this.subject$.complete();
    });
    if ($event.submitter.textContent === this.loginBtnText) {
    }
    if ($event.submitter.textContent === this.createAccBtnText) {
      const username = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      this.huub.getToken().subscribe(response => {
        this.subject$.next(new User(username, password, response.data.jwt, response.data.expiration_time));
      });
    }
  }

  logout(): void {
  }
}

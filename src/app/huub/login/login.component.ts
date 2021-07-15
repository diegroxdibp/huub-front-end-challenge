import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

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
  loginForm: FormGroup;
  accountCreationMode = false;
  passwordHide = true;
  logoHeightSVG: string;
  loginBtnText = 'Login';
  createAccBtnText = 'Submit';

  constructor(public sanitizer: DomSanitizer) {

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
    if ($event.submitter.textContent === this.loginBtnText) {

    }
    if ($event.submitter.textContent === this.createAccBtnText) {

    }
    console.log(this.loginForm)
  }
}

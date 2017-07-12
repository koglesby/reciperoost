import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs/Rx';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
  })
  export class SigninComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  constructor(private authService: AuthService) { }

  passwordRequired: any = false;

  ngOnInit() {
    this.subscription = this.authService.errmessage.subscribe(
      (errmessage) => {
        this.passwordRequired = errmessage;
      }
    )
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

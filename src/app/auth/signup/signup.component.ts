import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  passwordRequired: any = false;
  private subscription: Subscription;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.subscription = this.authService.errmessage.subscribe(
      (errmessage) => {
        this.passwordRequired = errmessage;
      }
    )
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password);
  }

}

import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class AuthService {
  token: string = localStorage.getItem('id_token');
  errmessage = new Subject();

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    var em = email;
    var pword = password;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        response => {
          this.signinUser(email, password);
        }
      )
      .catch(
        error => {
          console.log(error);
          this.errmessage.next(error.message);
        }
      );
  }
  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {this.token = token; localStorage.setItem('id_token', token);}
            )
        }
      )
      .catch(
        error => {
          console.log(error);
          this.errmessage.next(error.message);
        }
      );
  }

  signoutUser() {
    firebase.auth().signOut();
    localStorage.removeItem('id_token');
    this.token = null;
    this.router.navigate(['/']);
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
    );
    return this.token;
  }
  isAuthenticated() {
    return this.token != null;
  }
}
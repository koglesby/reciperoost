import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyADrX4eayMO7UyeNZn8dSE6f_t2pBBZsiM",
      authDomain: "ng-reciperoost.firebaseapp.com"
    });
  }
}

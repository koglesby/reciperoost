import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toggleState = "collapse"

  constructor() { }

  ngOnInit() {
  }

  onHamburgerClick() {
    this.toggleState === "collapse" ? this.toggleState = "default" : this.toggleState = "collapse";
  }
}

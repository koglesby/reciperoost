import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selected = new EventEmitter<string>();
  onNavSelect(feature) {
  	this.selected.emit(feature);
  }

  toggleState = "collapse"

  constructor() { }

  ngOnInit() {
  }

  onHamburgerClick() {
    this.toggleState === "collapse" ? this.toggleState = "default" : this.toggleState = "collapse";
  }
}

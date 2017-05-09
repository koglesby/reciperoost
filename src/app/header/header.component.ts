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

  constructor() { }

  ngOnInit() {
  }

}

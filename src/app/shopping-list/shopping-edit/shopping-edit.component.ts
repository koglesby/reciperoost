import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() itemAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient() {
	// onAddIngredient(name, amount) {
  	// const newIngredient = new Ingredient(name.value, amount.value);
  	const ingName = this.nameInputRef.nativeElement.value;
  	const ingAmount = this.amountInputRef.nativeElement.value
  	const newIngredient = new Ingredient(ingName, ingAmount);
  	this.itemAdded.emit(newIngredient);
  }

}

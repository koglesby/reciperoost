import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() tharecipe: Recipe;
  @Output() selectedRecipe = new EventEmitter<void>();
  
  onSelectRecipe() {
    this.selectedRecipe.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}

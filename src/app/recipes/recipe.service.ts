import {Recipe} from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core'; 
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();
	private recipes: Recipe[] = [
    new Recipe(
    	'Test Recipe',
    	'A tasty test',
    	'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Aloo_chat_Recipe.JPG/1280px-Aloo_chat_Recipe.JPG',
    	[
        new Ingredient('Milk', 2),
        new Ingredient('Cereal', 1)
    	]),
    new Recipe('Different Test Recipe',
      'this is a different test, yumm',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Aloo_chat_Recipe.JPG/1280px-Aloo_chat_Recipe.JPG',
      [
        new Ingredient('Meat', 3),
        new Ingredient('Fries', 12)
      ]),
    new Recipe(
    	'Test Wooo Recipe',
    	'Wooooo!',
    	'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Aloo_chat_Recipe.JPG/1280px-Aloo_chat_Recipe.JPG',
    	[
    	  new Ingredient('Cheese', 2),
    	  new Ingredient('Lobster', 1)
    	])

  ];

  constructor(private shoppinglistService: ShoppingListService) {}

  getRecipes() {
  	return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppinglistService.addIngredients(ingredients);
  }
}
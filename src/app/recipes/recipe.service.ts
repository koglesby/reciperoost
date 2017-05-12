import {Recipe} from './recipe.model';
import { EventEmitter } from '@angular/core'; 
export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();
	private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'this is a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Aloo_chat_Recipe.JPG/1280px-Aloo_chat_Recipe.JPG'),
    new Recipe('Different Test Recipe', 'this is a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Aloo_chat_Recipe.JPG/1280px-Aloo_chat_Recipe.JPG'),
    new Recipe('Test Wooo Recipe', 'this is a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Aloo_chat_Recipe.JPG/1280px-Aloo_chat_Recipe.JPG')

  ];

  getRecipes() {
  	return this.recipes.slice();
  }
}
import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
	private recipes: Recipe[] = [
    new Recipe(
    	'Spaghetti',
    	'Tasty recipe for spaghetti and meatballs.',
    	'https://c1.staticflickr.com/2/1243/824608884_c02e6978bd_b.jpg',
    	[
        new Ingredient('Spaghetti', 1),
        new Ingredient('Meatball', 5),
        new Ingredient('Tomato', 3),
        new Ingredient('Basil', 1),
        new Ingredient('Parmesan', 1)
    	]),
    new Recipe('Double Mack Burger',
      'A classic double cheeseburger',
      'https://upload.wikimedia.org/wikipedia/commons/9/9a/Big_Mac_hamburger.jpg',
      [
        new Ingredient('Beef Patty', 2),
        new Ingredient('Special Sauce', 1),
        new Ingredient('Lettuce', 1),
        new Ingredient('Cheese', 1),
        new Ingredient('Pickle', 2),
        new Ingredient('Onion', 2),
        new Ingredient('Sesame-seed bun', 1)
      ]),
    new Recipe(
    	'Grilled Cheese Sandwhich',
    	'A simple, quick and easy recipe.',
    	'https://upload.wikimedia.org/wikipedia/commons/8/89/Grilled_cheese_sandwich.jpg',
    	[
    	  new Ingredient('Bread slice', 2),
    	  new Ingredient('Cheddar cheese', 1),
        new Ingredient('Shredded Mozzarella', 2),
        new Ingredient('Butter', 1)
    	])

  ];

  constructor(private shoppinglistService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
  	return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppinglistService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  
  removeRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}

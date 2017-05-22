import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class RecipeDbService {
  constructor(private http: Http, private recipeService: RecipeService) {}
  saveRecipe() {
    return this.http.put('https://ng-reciperoost.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }
  
  fetchRecipe() {
    return this.http.get('https://ng-reciperoost.firebaseio.com/recipes.json').map(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            console.log(recipe);
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    )
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }
    );
  }

}
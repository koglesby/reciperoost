import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { RecipeService } from './recipe.service';
@Component({
  selector: 'app-recipes',
	templateUrl: './recipes.component.html',
	styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit {

	ngOnInit() {
		// var user = firebase.auth().currentUser;
		// console.log(user);
	}
}

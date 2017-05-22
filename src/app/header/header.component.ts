import { Component, OnInit } from '@angular/core';
import { RecipeDbService } from '../shared/recipedb.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toggleState = "collapse";

  constructor(private recipeDbService: RecipeDbService) { }

  ngOnInit() {
  }

  onHamburgerClick() {
    this.toggleState === "collapse" ? this.toggleState = "default" : this.toggleState = "collapse";
  }

  onSave() {
    this.recipeDbService.saveRecipe().subscribe(
      (response: Response ) =>{ console.log(response); }
    );
  }
  
  onFetch() {
    this.recipeDbService.fetchRecipe();
  }
}

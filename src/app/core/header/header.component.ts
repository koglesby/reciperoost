import { Component, OnInit } from '@angular/core';
import { RecipeDbService } from '../../shared/recipedb.service';
import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toggleState = "collapse";

  constructor(private recipeDbService: RecipeDbService, private authService: AuthService) { }

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

  onSignout() {
    this.authService.signoutUser();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
  
}

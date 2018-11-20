import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe";
import { map } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";

@Injectable() //3shan a inject recipe service gwa el service de

export class DataStorageService{
  constructor(private http: Http, private recipeService : RecipeService, private authService:AuthService){}

  storeRecipe(){
  
   const token =  this.authService.getToken();
      //put method to overwrite the old data
   return this.http.put('https://ng-recipes-book-25451.firebaseio.com/recipes.json?auth='+ token, this.recipeService.getRecipes());
  }

  getRecipes() {
    
   const token =  this.authService.getToken();
    this.http.get('https://ng-recipes-book-25451.firebaseio.com/recipes.json? auth=' + token)
      .pipe(map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      ))
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}

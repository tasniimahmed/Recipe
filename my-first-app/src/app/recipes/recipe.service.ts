import {Recipe} from './recipe';
import { Injectable} from '@angular/core';
import { ingredient } from '../Shared/ingredient';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
/*recipeSelected = new EventEmitter<Recipe>();*/
recipesChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe('Tasty fries', 'This is simply a test', 'https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/2011-r-xl-aspen-app-bistro-fries.jpg?itok=--_Wvek5', [
        new ingredient('Meat', 1),
        new ingredient('French fries',20)
        ]),
        new Recipe('Burger', 'This is simply a test', 'https://i0.wp.com/fullofplants.com/wp-content/uploads/2018/01/smoky-tempeh-black-bean-burgers-thumb.jpg?fit=1316%2C1315&ssl=1',[
            new ingredient('Meat', 1),
            new ingredient('French fries',20)
        ])
      ];

      constructor(private slService: ShoppingListService){

      }

      setRecipes(recipes: Recipe[]){
          this.recipes = recipes;
          this.recipesChanged.next(this.recipes.slice());
      }

      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(index:number){
          return this.recipes[index];      }

      addIngredientsToShoppingList(ingredients:ingredient[]){
          this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe:Recipe){
          this.recipes.push(recipe);
          this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number,newRecipe: Recipe){
             this.recipes[index] = newRecipe;
             this.recipesChanged.next(this.recipes.slice());
      }
      deleteRecipe(index:number){
          this.recipes.splice(index,1);
          this.recipesChanged.next(this.recipes.slice());
      }
}
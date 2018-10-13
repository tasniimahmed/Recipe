import {Recipe} from './recipe';
import { Injectable} from '@angular/core';
import { ingredient } from '../Shared/ingredient';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
/*recipeSelected = new EventEmitter<Recipe>();*/
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

      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(index:number){
          return this.recipes[index];      }

      addIngredientsToShoppingList(ingredients:ingredient[]){
          this.slService.addIngredients(ingredients);
      }
}
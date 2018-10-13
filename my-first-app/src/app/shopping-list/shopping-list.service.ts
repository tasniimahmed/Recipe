import {ingredient} from '../shared/ingredient';

import { Subject } from 'rxjs';



export class ShoppingListService{
    ingredientsChanged= new Subject<ingredient[]>();
   private ingredients : ingredient[]=[
        new ingredient ('Apples',5),
        new ingredient ('Tomatoes',10),
      ];

      getIngredients(){
          //mynfa3sh slice 3shan btdena copy m3rfsh ast5dmo
          return this.ingredients.slice();
      }
      addIngredient(Ingredient: ingredient){
          this.ingredients.push(Ingredient);
          this.ingredientsChanged.next(this.ingredients.slice());
      }

      addIngredients(ingredients:ingredient[]){
          //..to turn array of ele into list of ele
         this.ingredients.push(...ingredients);
         this.ingredientsChanged.next(this.ingredients.slice());
         //changed 3shan manb3tsh el copy nb3at el main
      }
}
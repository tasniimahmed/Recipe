import {ingredient} from '../shared/ingredient';

import { Subject } from 'rxjs';



export class ShoppingListService{
    ingredientsChanged= new Subject<ingredient[]>();
    startedEditing = new Subject<number>();
   private ingredients : ingredient[]=[
        new ingredient ('Apples',5),
        new ingredient ('Tomatoes',10),
      ];

      getIngredients(){
          //mynfa3sh slice 3shan btdena copy m3rfsh ast5dmo
          return this.ingredients.slice();
      }

      getIngredient(index:number){
          return this.ingredients[index];
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

      updateIngredient(index:number,newIngredient: ingredient){
   this.ingredients[index]=newIngredient;
   this.ingredientsChanged.next(this.ingredients.slice());
      }
      deleteIngredient(index:number){
          //splice to start from a specific element
          this.ingredients.splice(index,1);
          this.ingredientsChanged.next(this.ingredients.slice());
          //slice to pass a copy of my ingredients
;      }
}
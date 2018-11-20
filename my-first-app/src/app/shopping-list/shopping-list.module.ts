import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations:[
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports:[
        CommonModule,
        //to unlock ng-model
        FormsModule
    ]

    //export lel form module 3shan sign in we sign up bardo byst5dmoha wna mas7tha mn appmodule
   // exports:[FormsModule]
   //aw a3ml auth module lel sign in we sign up
})
export class ShoppingListModule{}
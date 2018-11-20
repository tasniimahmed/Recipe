import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//import { HeaderComponent } from './header/header.component';
//import { RecipesComponent } from './recipes/recipes.component';
//import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
//import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
//import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
//import { ShoppingListComponent } from './shopping-list/shopping-list.component';
//import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
//import { DropdownDirective } from './Shared/dropdown.directive';
//import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
//import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
//import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
//import { RecipeService } from './recipes/recipe.service';
//import { DataStorageService } from './Shared/data-storage.service';
//import { SignupComponent } from './auth/signup/signup.component';
//import { SigninComponent } from './auth/signin/signin.component';
//import { AuthService } from './auth/auth.service';
//import { AuthGuard } from './auth/auth-guard.service';
//import { RecipesModule } from './recipes/recipes.module';
import { SharedModule } from './Shared/shared.modules';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
//import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent
   // HeaderComponent,
    //HomeComponent
    //RecipesComponent,
    //RecipeListComponent,
    //RecipeDetailComponent,
   // RecipeItemComponent,
    //ShoppingListComponent,
    //ShoppingEditComponent,
    //DropdownDirective,
   // RecipeStartComponent,
    //RecipeEditComponent,
   // SignupComponent,
    //SigninComponent,
    
    // Recipe.TsComponent,
  ],

  //hena fe browsermodule msh common module 3shan feha kol el common module
  imports: [
    BrowserModule,
    //FormsModule,
    //ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    //RecipesModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule
  ],
  //hanseb RecipeService hena 3shan bnst5dmha fe 7tat tanya bara recipes zai data storage
  
  bootstrap: [AppComponent]
})
export class AppModule { }

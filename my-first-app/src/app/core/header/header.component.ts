import { Component } from '@angular/core';
import { DataStorageService } from '../../Shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService, private authService:AuthService){}

  onSaveData(){
   this.dataStorageService.storeRecipe().subscribe(
     (response: Response)=> {
         console.log(response);
     }
   );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}
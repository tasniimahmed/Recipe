import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loadedFeature='recipe';
  ngOnInit(){
  firebase.initializeApp({
    apiKey: "AIzaSyD0RE18ytX6HB1ACFl06Xr1-WBZB-fx4R8",
    authDomain: "ng-recipes-book-25451.firebaseapp.com"
  });
  }
   onNavigate(feature:string){
     this.loadedFeature = feature;
   }
}

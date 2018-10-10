import { Component, OnInit, ElementRef,EventEmitter ,ViewChild, Output} from '@angular/core';
import {ingredient} from '../../Shared/ingredient';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameInput')nameInputRef: ElementRef;
 @ViewChild('amountInput')amountInputRef: ElementRef;
 @Output()ingredientAdded= new EventEmitter<ingredient>();
  constructor() { }

  ngOnInit() {
  }
  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount =this.amountInputRef.nativeElement.value;
  const newIngredient = new ingredient (ingName,ingAmount);
  this.ingredientAdded.emit(newIngredient);
  }

}

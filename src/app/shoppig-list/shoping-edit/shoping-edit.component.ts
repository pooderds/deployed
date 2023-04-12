import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingridient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {
  // @ViewChild('amountInput', {static: true}) amountInput: ElementRef;
 @ViewChild('nameInput') nameInputRef: ElementRef
 @ViewChild('amountInput') amountInputRef: ElementRef
  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    
  }

  // onAddItem(nameInput: HTMLInputElement) {
  //   this.ingridientAdded.emit({
  //     name: nameInput.value,
  //     amount: this.amountInput.nativeElement.value
  //   })
  // }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value
    const ingAmount = this.amountInputRef.nativeElement.value
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.slService.addIngredient(newIngredient);
  }
}

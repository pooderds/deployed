import { Component, OnDestroy, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingridient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shoppig-list',
  templateUrl: './shoppig-list.component.html',
  styleUrls: ['./shoppig-list.component.css'],
  
})
export class ShoppigListComponent implements OnInit, OnDestroy {
ingredients: Ingredient[];
private igChangeSub: Subscription;

constructor (private slService: ShoppingListService) {}

ngOnInit(): void {
  this.ingredients = this.slService.getIngredients();
  this.igChangeSub = this.slService.ingredientsChanged
  .subscribe(
    (ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    }
  )
}

onEditItem(index: number) {
  this.slService.startedEditing.next(index);
}

ngOnDestroy(): void {
  this.igChangeSub.unsubscribe();
}

}

import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingridient.model';
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shoppig-list',
  templateUrl: './shoppig-list.component.html',
  styleUrls: ['./shoppig-list.component.css'],
  
})
export class ShoppigListComponent implements OnInit {
ingredients: Ingredient[];

constructor (private slService: ShoppingListService) {}

ngOnInit(): void {
  this.ingredients = this.slService.getIngredients();
  this.slService.ingredientsChanged.subscribe(
    (ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    }
  )
}

}

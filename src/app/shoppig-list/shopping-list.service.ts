import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingridient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    let index = this.ingredients.findIndex((i) => i.name === ingredient.name);
    if (index !== -1) {
      let newamount = ingredient.amount + this.ingredients[index].amount;
      ingredient.amount = newamount;

      Object.assign(this.ingredients[index], ingredient);

      this.ingredientsChanged.next(this.ingredients.slice());
    } else {
      this.ingredients.push(ingredient);
      this.ingredientsChanged.next(this.ingredients.slice());
    }
  }

  addIngredients(ingredients: Ingredient[]) {
    const data = ingredients.filter((item) => {
      return !this.ingredients.some((item_1) => {
        return item.name === item_1.name;
      });
    });
    const updated = this.update(ingredients, this.ingredients);
    
    const data1 = JSON.parse(JSON.stringify(data));

    const updated1 = JSON.parse(JSON.stringify(updated));
   
    this.ingredients = [...updated1, ...data1];
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  private update(a: Ingredient[], b: Ingredient[]): Ingredient[] {
    let newarr: Ingredient[] = [];
    for (let obj of a) {
      let foundInB = b.filter((item) => item.name == obj.name);
      newarr.push(...foundInB);
    }
    for (let obj of b) {
      let foundInA = a.filter((item) => item.name == obj.name);
      newarr.push(...foundInA);
    }

    let filtered = {};
    for (const ingr of newarr) {
      if (ingr.name in filtered) {
        filtered[ingr.name].amount += ingr.amount;
      } else {
        filtered[ingr.name] = ingr;
      }
    }
    let filteredArray: Ingredient[] = Object.values(filtered);
    return filteredArray;
  }
}

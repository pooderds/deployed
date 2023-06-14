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
    // const data = ingredients.filter((item) => {
    //   return !this.ingredients.some((item_1) => {
    //     return item.name === item_1.name;
    //   });
    // });

  
    this.ingredients.push(...ingredients);
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

  // private update(a: Ingredient[], b: Ingredient[]) {
  //   let newarr = [];
  //   for (let obj of b) {
  //     let found = a.find((item) => item.name == obj.name);
  //     if (found) {
  //       newarr.push(found);
  //       found.amount += obj.amount;
  //     } else {
  //       newarr.push(obj);
  //     }
  //   }
  //   return newarr;
  // }

  private update(a: Ingredient[]): Ingredient[]{
    const result = a.reduce((acc, obj) => {
      const key = obj.name;
      if (!acc[key]) {
        acc[key] = obj;
      } else {
        acc[key].amount += obj.amount
        // acc[key] = Object.assign(acc[key], obj);
      }
      return acc;
    }, {});
   return Object.values(result);
    
  }


  private filterAndAddIngredients(ingredients: Ingredient[]): Ingredient[] {
    const filteredIngredients = {};
  
    for (const ingredient of ingredients) {
      if (ingredient.name in filteredIngredients) {
        filteredIngredients[ingredient.name].amount += ingredient.amount;
      } else {
        filteredIngredients[ingredient.name] = ingredient;
      }
    }
  
    return Object.values(filteredIngredients);
  }


}

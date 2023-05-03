import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingridient.model';
import { ShoppingListService } from '../shoppig-list/shopping-list.service';
import { Subject } from 'rxjs';
import { ResolveFn } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Tasty Schnitzel', 
  //   'This is simply a test', 
  //   'https://get.pxhere.com/photo/salted-food-stick-basil-tomato-baked-bread-healthy-tableware-recipe-ingredient-plate-baked-goods-dishware-seafood-kitchen-utensil-vegetable-fish-produce-dish-seed-cuisine-finger-food-fast-food-comfort-food-platter-meat-junk-food-delicacy-animal-product-gluten-side-dish-sandwich-serving-tray-breakfast-serveware-la-carte-food-snack-oily-fish-baguette-mexican-food-fruit-anchovy-food-vegan-nutrition-frying-american-food-mediterranean-food-herring-family-superfood-Sole-meuni-re-nuts-seeds-1638278.jpg',
  //   [
  //     new Ingredient('Meat', 1),
  //     new Ingredient ('French Fries', 20)
  //   ]),
  //   new Recipe(
  //     'Big Fat Burger', 
  //   'This is simply a test', 
  //   'https://get.pxhere.com/photo/salted-food-stick-basil-tomato-baked-bread-healthy-tableware-recipe-ingredient-plate-baked-goods-dishware-seafood-kitchen-utensil-vegetable-fish-produce-dish-seed-cuisine-finger-food-fast-food-comfort-food-platter-meat-junk-food-delicacy-animal-product-gluten-side-dish-sandwich-serving-tray-breakfast-serveware-la-carte-food-snack-oily-fish-baguette-mexican-food-fruit-anchovy-food-vegan-nutrition-frying-american-food-mediterranean-food-herring-family-superfood-Sole-meuni-re-nuts-seeds-1638278.jpg',
  //   [
  //     new Ingredient('Buns', 2), 
  //     new Ingredient('Meat', 1)
  //   ]
  //   )
  //  ]; 

  private recipes: Recipe[]=[];
   
  constructor(private slService: ShoppingListService) { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());

  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}

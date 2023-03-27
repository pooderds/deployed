import { Component } from '@angular/core';

import { Recipe } from '../recipe.model'; 


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://get.pxhere.com/photo/salted-food-stick-basil-tomato-baked-bread-healthy-tableware-recipe-ingredient-plate-baked-goods-dishware-seafood-kitchen-utensil-vegetable-fish-produce-dish-seed-cuisine-finger-food-fast-food-comfort-food-platter-meat-junk-food-delicacy-animal-product-gluten-side-dish-sandwich-serving-tray-breakfast-serveware-la-carte-food-snack-oily-fish-baguette-mexican-food-fruit-anchovy-food-vegan-nutrition-frying-american-food-mediterranean-food-herring-family-superfood-Sole-meuni-re-nuts-seeds-1638278.jpg')
   ];
  constructor() {}
  ngOnInit(): void {
    
  }
}

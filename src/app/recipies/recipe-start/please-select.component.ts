import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-please-select',
  templateUrl: './please-select.component.html',
})
export class PleaseSelectComponent implements OnInit {
  loaded: boolean;
 sub: Subscription;
  constructor(private recipeService: RecipeService){}

   ngOnInit(): void {
     this.sub =   this.recipeService.recipesChanged
       .subscribe((recipes: Recipe[])=> {
        if(recipes != null){
          this.loaded = true;
        }
        else {
          this.loaded = false;
        }
       })
   }
  ngDestroy(): void {
      this.sub.unsubscribe();
      this.loaded = false;
  }
}

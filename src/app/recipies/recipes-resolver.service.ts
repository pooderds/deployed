import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "./recipe.model";
import { DataStorageService } from "../shared/data-storage.service";
import { Observable } from "rxjs";
import { RecipeService } from "./recipe.service";

@Injectable({ providedIn: 'root'})
export class RecipesResolverService implements Resolve<Recipe[]>{

    constructor(private dataStorageService: DataStorageService,
                private recipeService: RecipeService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
        const recipes = this.recipeService.getRecipes();
        if(recipes.length === 0) {
            return this.dataStorageService.fetchRecipes();
            
        } else {
            return recipes;
        }

    }
}  

// export const RecipesResolverService: ResolveFn<Recipe[]> = (
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
// ) => {

// const recipes = inject(RecipeService).getRecipes();
// if(recipes.length === 0) {
//     return inject(DataStorageService).fetchRecipes();
// } else {
//     return recipes;
// }
// }

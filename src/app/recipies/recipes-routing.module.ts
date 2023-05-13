import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGard } from "../auth/auth/auth.guard";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { PleaseSelectComponent } from "./recipe-start/please-select.component";
import { RecipesResolverService } from "./recipes-resolver.service";
import { RecipiesComponent } from "./recipies.component";

const routes: Routes = [
    {
        path: '', component: RecipiesComponent,
        canActivate: [AuthGard],
        children: [
    
          { path: '', component: PleaseSelectComponent },
          { path: 'new', component: RecipeEditComponent},
          { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService] },
          { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]},
        ]
      },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipesRoutingModule {}
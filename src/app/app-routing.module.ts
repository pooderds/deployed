import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipiesComponent } from './recipies/recipies.component';
import { ShoppigListComponent } from './shoppig-list/shoppig-list.component';
import { ShopingEditComponent } from './shoppig-list/shoping-edit/shoping-edit.component';
import { RecipeDetailComponent } from './recipies/recipe-detail/recipe-detail.component';
import { PleaseSelectComponent } from './recipies/recipe-start/please-select.component';
import { RecipeEditComponent } from './recipies/recipe-edit/recipe-edit.component';
import { RecipesResolverService } from './recipies/recipes-resolver.service';
import { AuthComponent } from './auth/auth/auth.component';
import { AuthGard } from './auth/auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes', component: RecipiesComponent,
    canActivate: [AuthGard],
    children: [

      { path: '', component: PleaseSelectComponent },
      { path: 'new', component: RecipeEditComponent},
      { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService] },
      { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]},
    ]
  },
  {
    path: 'shopping-list', component: ShoppigListComponent, children: [
      { path: 'shopping-edit', component: ShopingEditComponent }
    ]
  },
  { path: 'auth', component: AuthComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

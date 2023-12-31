import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGard } from '../auth/auth/auth.guard';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { PleaseSelectComponent } from './recipe-start/please-select.component';
import { RecipesResolverService } from './recipes-resolver.service';
import { RecipiesComponent } from './recipies.component';
import { UnsavedGuard } from '../shared/guards/changes-saved/changes-saved.guard';

const routes: Routes = [
  {
    path: '',
    component: RecipiesComponent,
    canActivate: [AuthGard],
    children: [
      { path: '', component: PleaseSelectComponent },
      {
        path: 'new',
        component: RecipeEditComponent,
        canDeactivate: [UnsavedGuard],
      },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipesResolverService],
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: [RecipesResolverService],
        canDeactivate: [UnsavedGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}

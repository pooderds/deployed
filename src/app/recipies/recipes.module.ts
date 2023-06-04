import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipiesComponent } from './recipies.component';
import { PleaseSelectComponent } from './recipe-start/please-select.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { UnsavedGuard } from './changes-saved.guard';

@NgModule({
  declarations: [
    RecipiesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    PleaseSelectComponent,
    RecipeEditComponent,
    RecipeBookComponent,
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule
  ],
  providers: [UnsavedGuard]
})
export class RecipesModule {}

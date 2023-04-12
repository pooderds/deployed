import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { RecipeListComponent } from './recipies/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipies/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipies/recipe-list/recipe-item/recipe-item.component';
import { ShoppigListComponent } from './shoppig-list/shoppig-list.component';
import { ShopingEditComponent } from './shoppig-list/shoping-edit/shoping-edit.component';
import { FormsModule } from '@angular/forms';
import { DropDownDirective } from './shared/drop-down.directive';
import { ShoppingListService } from './shoppig-list/shopping-list.service';
import { PleaseSelectComponent } from './recipies/recipe-start/please-select.component';
import { RecipeEditComponent } from './recipies/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipiesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppigListComponent,
    ShopingEditComponent,
    DropDownDirective,
    PleaseSelectComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

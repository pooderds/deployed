import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    loadChildren: () =>
    import('./recipies/recipes.module')
    .then((module) => module.RecipesModule)
  },
  {
    path: 'shopping-list',
    loadChildren: () =>
    import('./shoppig-list/shopping-list.module')
    .then((m) => m.ShopppingListModule)
  },
  {
    path: 'auth',
    loadChildren: ()=> 
    import('./auth/auth/auth.module')
    .then((m)=> m.AuthModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

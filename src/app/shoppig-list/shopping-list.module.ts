import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ShopingEditComponent } from './shoping-edit/shoping-edit.component';
import { ShoppigListComponent } from './shoppig-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ShoppigListComponent, ShopingEditComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ShoppigListComponent
      },
    ]),
    FormsModule,
    SharedModule,
  ],
  exports: [ShoppigListComponent, ShopingEditComponent]
})
export class ShopppingListModule {}

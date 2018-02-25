import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishlistRoutingModule } from './wishlist-routing.module';
import { WishlistComponent } from './wishlist.component';
import { TabComponent } from './tab/tab.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    WishlistRoutingModule
  ],
  declarations: [WishlistComponent, TabComponent, ListComponent, FormComponent]
})
export class WishlistModule { }

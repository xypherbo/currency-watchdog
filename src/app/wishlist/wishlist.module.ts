import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishlistRoutingModule } from './wishlist-routing.module';
import { WishlistComponent } from './wishlist.component';

@NgModule({
  imports: [
    CommonModule,
    WishlistRoutingModule
  ],
  declarations: [WishlistComponent]
})
export class WishlistModule { }

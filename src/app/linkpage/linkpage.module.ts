import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkpageRoutingModule } from './linkpage-routing.module';
import { LinkpageComponent } from './linkpage.component'

@NgModule({
  imports: [
    CommonModule,
    LinkpageRoutingModule
  ],
  declarations: [LinkpageComponent]
})
export class LinkpageModule { }

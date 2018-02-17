import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { LinkpageComponent } from './linkpage.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [LinkpageComponent],
  exports: [LinkpageComponent]
})
export class LinkpageModule { }

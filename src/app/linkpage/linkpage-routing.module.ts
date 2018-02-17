import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinkpageComponent } from './linkpage.component'

const routes: Routes = [
  { path: 'links', component: LinkpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LinkpageRoutingModule { }

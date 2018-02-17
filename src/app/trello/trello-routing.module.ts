import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrelloComponent } from './trello.component'

const routes: Routes = [
  { path: 'trello', component: TrelloComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TrelloRoutingModule { }

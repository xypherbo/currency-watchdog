import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { TrelloRoutingModule } from './trello-routing.module';
import { TrelloComponent } from './trello.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TrelloRoutingModule
  ],
  declarations: [TrelloComponent]
})
export class TrelloModule { }

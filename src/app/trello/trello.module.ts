import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { TrelloComponent } from './trello.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [TrelloComponent]
})
export class TrelloModule { }

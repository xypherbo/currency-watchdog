import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DatePipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { LandingComponent } from './component/landing/landing.component';
import { LinkpageComponent } from './component/linkpage/linkpage.component';
import { TrelloComponent } from './component/trello/trello.component';
import { BotcurrencyComponent } from './component/botcurrency/botcurrency.component';
import { store } from './common/stores/trello.store';
const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'links', component: LinkpageComponent },
  { path: 'trello', component: TrelloComponent },
  { path: 'currency', component: BotcurrencyComponent },
  { path: '**', component: LandingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LinkpageComponent,
    TrelloComponent,
    BotcurrencyComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    StoreModule.forRoot({store})
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

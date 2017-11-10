import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { LandingComponent } from './core/component/landing/landing.component';
import { LinkpageComponent } from './core/component/linkpage/linkpage.component';
import { TrelloComponent } from './core/component/trello/trello.component';

import { CoreModule } from './core';

const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'links', component: LinkpageComponent },
  { path: 'trello', component: TrelloComponent },
  { path: '**', component: LandingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LinkpageComponent,
    TrelloComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CoreModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

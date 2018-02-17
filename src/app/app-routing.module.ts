import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component'
import { LinkpageComponent } from "./linkpage/linkpage.component";
import { TrelloComponent } from "./trello/trello.component";

const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'links', component: LinkpageComponent },
    { path: 'trello', component: TrelloComponent },
    { path: '**', component: LandingComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

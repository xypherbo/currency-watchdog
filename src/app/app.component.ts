import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showNav: Boolean;

  constructor(private router: Router) {
    this.showNav = false;
    this.router.events.subscribe((e: Event) => {
      if (e instanceof NavigationStart) {
        this.showNav = false
      }
    })
  }

}

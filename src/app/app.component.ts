import { Component } from '@angular/core';
import { CurrencyService } from './services/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CurrencyService]
})
export class AppComponent {

  data: any = {};

  constructor(private _service: CurrencyService) {
    this._service.getPresentCurrency().subscribe(result => {
      console.log(result)
      this.data = result.result;
    })
  }
}

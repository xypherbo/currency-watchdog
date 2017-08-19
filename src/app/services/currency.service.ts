import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class CurrencyService {

  _header: any;

  constructor(private _http: Http, private _datepipe: DatePipe) {
    this._header = new Headers();
    this._header.append("api-key", "U9G1L457H6DCugT7VmBaEacbHV9RX0PySO05cYaGsm");
  }

  getPresentCurrency(): Observable<any> {
    let now = new Date();
    let day = now.getDay();
    let _start;
    if (day === 0 || day === 6) {
      let previous_day;
      if (day === 0) {
        previous_day = new Date().setDate(new Date().getDate() - 3);
      } else {
        previous_day = new Date().setDate(new Date().getDate() - 2);
      }
      _start = this._datepipe.transform(previous_day, 'yyyy-MM-dd');
    }
    let _end = this._datepipe.transform(now, 'yyyy-MM-dd');

    return this._http
      .get(`https://iapi.bot.or.th/Stat/Stat-ExchangeRate/DAILY_AVG_EXG_RATE_V1/?start_period=${_start}&end_period=${_end}&currency=USD`, {
        headers: this._header
      })
      .map(response => {
        return response.json();
      });
  }
}

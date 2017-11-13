import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { TrelloActions, TrelloState } from '../../store/trello';

@Component({
  selector: 'app-trello',
  templateUrl: './trello.component.html',
  styleUrls: ['./trello.component.css']
})
export class TrelloComponent implements OnInit {

  trelloKey: string;
  trelloToken: string;

  constructor(private store: Store<TrelloState>) {

  }

  getToken() {
    const newtab = window.open(`https://trello.com/1/authorize?key=${this.trelloKey}&name=HexagonalTrello&expiration=never&response_type=token`, '_blank');
  }

  getBoard() {
    this.store.dispatch({
      type: TrelloActions.GET_BOARD,
      payload: {
        key: this.trelloKey,
        token: this.trelloToken
      }
    });
  }

  ngOnInit() {
  }

}

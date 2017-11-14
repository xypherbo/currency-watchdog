import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { TrelloActions, TrelloState, Board } from '../../store/trello';

@Component({
  selector: 'app-trello',
  templateUrl: './trello.component.html',
  styleUrls: ['./trello.component.css']
})
export class TrelloComponent implements OnInit {

  trelloKey: string;
  trelloToken: string;
  board_list$: Observable<Board[]>;

  constructor(private store: Store<TrelloState>) {
    this.board_list$ = this.store.select<Board[]>(state => state.trello.board_list);
    this.board_list$.subscribe(console.log)
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

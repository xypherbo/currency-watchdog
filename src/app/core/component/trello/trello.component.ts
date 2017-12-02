import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/trello';

@Component({
  selector: 'app-trello',
  templateUrl: './trello.component.html',
  styleUrls: ['./trello.component.css']
})
export class TrelloComponent implements OnInit {

  trelloKey: string;
  trelloToken: string;
  board_list$: Observable<fromRoot.Board[]>;
  board_column$: Observable<fromRoot.BoardColumn[]>;

  constructor(private store: Store<fromRoot.TrelloState>) {
    this.board_list$ = this.store.select(fromRoot.selectBoardList);
    this.board_column$ = this.store.select(fromRoot.selectBoardColumnList);
  }

  getToken() {
    const newtab = window.open(`https://trello.com/1/authorize?key=${this.trelloKey}&name=HexagonalTrello&expiration=never&response_type=token`, '_blank');
  }

  getBoard() {
    this.store.dispatch({
      type: fromRoot.TrelloActions.GET_BOARD,
      payload: {
        key: this.trelloKey,
        token: this.trelloToken
      }
    });
  }

  getList(board) {
    this.store.dispatch({
      type: fromRoot.TrelloActions.GET_BOARD_COLUMN,
      payload: {
        key: this.trelloKey,
        token: this.trelloToken,
        board_id: board.id
      }
    });
  }

  ngOnInit() {
  }

}


import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TrelloActions, GetBoard, GetBoardColumn } from '../store/trello';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { TrelloService } from '../services/trello.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';


@Injectable()
export class TrelloEffects {
  // Listen for the 'LOGIN' action
  @Effect() getBoard$: Observable<TrelloActions> = this.actions$.ofType<GetBoard>(TrelloActions.GET_BOARD)
    .switchMap(action => this.trelloService.getBoards(action.payload.key, action.payload.token)
      .map(data => {
        return ({ type: TrelloActions.GET_BOARD_SUCCESS, payload: data });
      })
      .catch(() => of({ type: 'GET_BOARD_FAILED' }))
    );

  @Effect() getBoardColumn$: Observable<TrelloActions> = this.actions$.ofType<GetBoardColumn>(TrelloActions.GET_BOARD_COLUMN)
    .switchMap(action => this.trelloService.getBoardColumn(action.payload.key, action.payload.token, action.payload.board_id)
      .map(data => {
        return ({ type: TrelloActions.GET_BOARD_COLUMN_SUCCESS, payload: data });
      })
      .catch(() => of({ type: 'GET_BOARD_COLUMN_FAILED' }))
    );

  constructor(
    private actions$: Actions,
    private trelloService: TrelloService
  ) { }
}


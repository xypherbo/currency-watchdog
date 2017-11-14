
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TrelloActions, GetBoard } from '../store/trello';
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
    .switchMap(action => this.trelloService.getBoard(action.payload.key, action.payload.token)
      .map(data => {
        return ({ type: TrelloActions.GET_BOARD_SUCCESS, payload: data });
      })
      // If request fails, dispatch failed action
      .catch(() => of({ type: 'GET_BOARD_FAILED' }))
    );
  // If successful, dispatch success action with result



  constructor(
    private actions$: Actions,
    private trelloService: TrelloService
  ) { }
}


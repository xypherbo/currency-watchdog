
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TrelloActions } from '../store/trello';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { TrelloService } from '../api/trello.api';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';


@Injectable()
export class TrelloEffects {
  // Listen for the 'LOGIN' action
  @Effect() getBoard$: Observable<TrelloActions> = this.actions$.ofType(TrelloActions.GET_BOARD)
    .map(action => {

    })
    // If successful, dispatch success action with result
    .map(data => ({ type: 'LOGIN_SUCCESS', payload: data }))
    // If request fails, dispatch failed action
    .catch(() => of({ type: 'LOGIN_FAILED' }));


  constructor(
    private actions$: Actions
  ) { }
}


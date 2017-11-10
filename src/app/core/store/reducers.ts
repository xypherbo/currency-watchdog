import { Observable } from 'rxjs/Observable';
import { ActionReducerMap, Store } from '@ngrx/store';

import { TrelloState, TrelloActions, trello } from './trello';

export interface AppState {
    trello: TrelloState;
}

export let AppReducers: ActionReducerMap<AppState> = {
    trello
}

export let AppActions = [
    TrelloActions
]
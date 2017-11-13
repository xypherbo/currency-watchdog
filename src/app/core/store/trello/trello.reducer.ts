import { Action } from '@ngrx/store';
import { TrelloActions } from './trello.action';

export interface TrelloState {
    key: string;
    token: string;
    board_list: Array<any>;
}

const initialState: TrelloState = {
    key: '',
    token: '',
    board_list: []
};

interface UnsafeAction extends Action {
    payload?: any;
}

export function trello(state: TrelloState, action: UnsafeAction): TrelloState {
    switch (action.type) {
        case TrelloActions.GET_BOARD_SUCCESS:
            return {...state};
        case TrelloActions.GET_STAR_LIST:
            return {...state};
        default:
            return state;
    }
}

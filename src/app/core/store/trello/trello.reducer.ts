import { Action } from '@ngrx/store';
import { TrelloActions } from './trello.action';
import { Board } from './trello.model';

export interface TrelloState {
    trello: {
        key: string;
        token: string;
        board_list: Array<Board>;
    };
}

const initialState: TrelloState = {
    trello: {
        key: '',
        token: '',
        board_list: []
    }
};

interface UnsafeAction extends Action {
    payload?: any;
}

export function trello(state: TrelloState, action: UnsafeAction): TrelloState {
    switch (action.type) {
        case TrelloActions.GET_BOARD_SUCCESS:
            return Object.assign({}, state,
                {
                    trello: {
                        board_list: action.payload.boards
                    }
                });
        case TrelloActions.GET_STAR_LIST:
            return { ...state };
        default:
            return state;
    }
}

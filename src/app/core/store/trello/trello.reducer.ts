import { Action, createSelector, createFeatureSelector } from '@ngrx/store';
import { TrelloActions } from './trello.action';
import { Board } from './trello.model';

export interface TrelloState {
    key: string;
    token: string;
    board_list: Array<Board>;
}

const initialState: TrelloState = {
    key: '',
    token: '',
    board_list: []
};

interface UnsafeAction extends Action {
    payload?: any;
}

export function trello(state: TrelloState = initialState, action: UnsafeAction): TrelloState {
    switch (action.type) {
        case TrelloActions.GET_BOARD_SUCCESS:
            return Object.assign({}, state,
                {
                    board_list: action.payload.boards
                });
        case TrelloActions.GET_STAR_LIST:
            return { ...state };
        default:
            return state;
    }
}

export const selectTrello = createFeatureSelector<TrelloState>('trello')
export const selectBoardList = createSelector(selectTrello, (state: TrelloState) => state.board_list);

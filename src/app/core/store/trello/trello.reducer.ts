import { Action, createSelector, createFeatureSelector } from '@ngrx/store';
import { TrelloActions } from './trello.action';
import { Board, BoardColumn } from './trello.model';

export interface TrelloState {
    key: string;
    token: string;
    board_list: Array<Board>;
    selected_board_column: Array<BoardColumn>;
}

const initialState: TrelloState = {
    key: '',
    token: '',
    board_list: [],
    selected_board_column: []
};

interface UnsafeAction extends Action {
    payload?: any;
}

export function trello(state: TrelloState = initialState, action: UnsafeAction): TrelloState {
    switch (action.type) {
        case TrelloActions.GET_BOARD_SUCCESS:
            return Object.assign({}, state, {
                board_list: action.payload.boards
            });
        case TrelloActions.GET_BOARD_COLUMN_SUCCESS:
        console.log(action.payload);
            return Object.assign({}, state, {
                selected_board_column: action.payload.lists
            });
        default:
            return state;
    }
}

export const selectTrello = createFeatureSelector<TrelloState>('trello');
export const selectBoardList = createSelector(selectTrello, (state: TrelloState) => state.board_list);
export const selectBoardColumnList = createSelector(selectTrello, (state: TrelloState) => state.selected_board_column);

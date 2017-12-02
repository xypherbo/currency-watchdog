import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import * as Model from './trello.model';

export class TrelloActions {
    static GET_BOARD = '[Trello] GET_BOARD';
    static GET_BOARD_SUCCESS = '[Trello] GET_BOARD_SUCCESS';
    static GET_BOARD_COLUMN = '[Trello] GET_BOARD_COLUMN';
    static GET_BOARD_COLUMN_SUCCESS = '[Trello] GET_BOARD_COLUMN_SUCCESS';
}

export class GetBoard implements Action {
    public type = TrelloActions.GET_BOARD;
    constructor(public payload: Model.GetBoardPayload) { }
}

export class GetBoardColumn implements Action {
    public type = TrelloActions.GET_BOARD;
    constructor(public payload: Model.GetBoardColumnPayload) { }
}

export type Actions =
    | TrelloActions
    | GetBoard
    | GetBoardColumn;

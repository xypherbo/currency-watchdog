import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import * as Model from './trello.model';

export class TrelloActions {
    static GET_BOARD = '[Trello] GET_BOARD';
    static GET_STAR_LIST = '[Trello] GET_START_LIST';
}

export class GetBoard implements Action {
    public type = TrelloActions.GET_BOARD;
    constructor(public payload: Model.GetBoardPayload) { }
}

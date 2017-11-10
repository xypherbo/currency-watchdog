import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


const BASE_URL = 'https://api.trello.com/';

@Injectable()

export class TrelloService {

  boards: Observable<Array<Board>>;
  lists: Observable<Array<List>>;

  constructor(private http: Http, private store: Store<TrelloStore>) {
    this.boards = store.select('board_name');
    this.lists = store.select('list_name');
  }

  getBoard(key:String, token: String) {
    this.http.get(`${BASE_URL}/1/members/me?
    boards=starred&
    board_fields=name&
    organizations=all&
    organization_fields=displayName&
    key=${key}&
    token=${token}`)
      .map(res => res.json())
      .map(payload => ({ type: 'SET_STARED_BOARD_NAME', payload }))
      .subscribe(action => this.store.dispatch(action));
  }
}

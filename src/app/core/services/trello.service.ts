import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { Board } from '../store/trello/trello.model';

const BASE_URL = 'https://api.trello.com';

@Injectable()
export class TrelloService {

  constructor(private http: HttpClient) {
  }

  getBoards(key: String, token: String): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.get(`${BASE_URL}/1/members/me?boards=starred&board_fields=name&organizations=all&organization_fields=displayName&key=${key}&token=${token}`);
  }

  getBoardColumn(key: String, token: String, board_id: String): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.get(`${BASE_URL}/1/boards/${board_id}?lists=open&list_fields=name,desc&key=${key}&token=${token}`);
  }

  getBoardMembers(key: String, token: String, board_id: String): Observable<any>{
    return this.http.get(`${BASE_URL}/1/boards/${board_id}/members?key=${key}&token=${token}`);
  }
}

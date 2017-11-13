import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

const BASE_URL = 'https://api.trello.com/';

@Injectable()
export class TrelloService {

  constructor(private http: HttpClient) {
  }

  getBoard(key: String, token: String) {
    this.http.get(`${BASE_URL}/1/members/me?
    boards=starred&
    board_fields=name&
    organizations=all&
    organization_fields=displayName&
    key=${key}&
    token=${token}`)
      .subscribe(data => data);
  }
}
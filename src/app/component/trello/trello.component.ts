import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Board } from '../../common/model/board.model';
import { List } from '../../common/model/list.model';
import { TrelloStore } from '../../common/model/trello.model';
import { TrelloService } from '../../common/services/trello.service';

@Component({
  selector: 'app-trello',
  templateUrl: './trello.component.html',
  styleUrls: ['./trello.component.css'],
  providers: [TrelloService]
})
export class TrelloComponent implements OnInit {

  trelloKey: String;
  trelloToken: String;
  boards: Observable<Array<List>>;
  lists: Observable<Array<Board>>;

  constructor(private trelloService: TrelloService, private store: Store<TrelloStore>) {
    this.boards = store.select('board_name');
    this.lists = store.select('list_name');
  }

  getBoard() {
    this.trelloService.getBoard(this.trelloKey, this.trelloToken);
  }

  ngOnInit() {
  }

}

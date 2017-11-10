import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { TrelloActions , TrelloState} from '../../store/trello';

@Component({
  selector: 'app-trello',
  templateUrl: './trello.component.html',
  styleUrls: ['./trello.component.css']
})
export class TrelloComponent implements OnInit {

  trelloKey: String;
  trelloToken: String;

  constructor(private store: Store<TrelloState>) {

  }

  getBoard() {
  }

  ngOnInit() {
  }

}

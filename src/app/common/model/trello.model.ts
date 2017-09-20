import {Board} from './board.model';
import {List} from './list.model';

export interface TrelloStore {
  key: String;
  token: String;
  board_name: Board[];
  list_name: List[];
}

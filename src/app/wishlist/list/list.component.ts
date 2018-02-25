import { Component, OnInit } from '@angular/core';
import { WishlistItem } from '../wishlist.model'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: WishlistItem[];

  constructor() {
    this.list = [{
      name: "WINNER GLORY ตู้โชว์กระจก 42.5 CM. BK",
      link: "https://www.indexlivingmall.com/120015635.html",
      imageUrl: "https://www.indexlivingmall.com/media/catalog/product/cache/2/image/500x/9df78eab33525d08d6e5fb8d27136e95/1/2/120015635_glory_bk_1.jpg"
    }]
  }

  ngOnInit() {
  }

}

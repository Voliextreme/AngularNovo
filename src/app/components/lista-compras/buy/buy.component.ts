import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Article } from 'src/app/class/article';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  serviceList : ShoppingListService;
  constructor(private list: ShoppingListService) {
    this.serviceList = list;
  }

  ngOnInit(): void {
  }

  buyArt(article : Article){
    article.cart = true;
  }

}

import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Article } from 'src/app/class/article';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  serviceList : ShoppingListService;
  constructor(private list: ShoppingListService) {
    this.serviceList = list;
  }


  ngOnInit(): void {
  }

  addList(name:string, price:number){
    this.serviceList.shoppingList.push(new Article(name , price));
  }

}

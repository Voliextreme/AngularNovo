import { templateJitUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Article } from '../class/article';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

shoppingList: Array<Article> = new Array<Article>()


}

import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';


@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css']
})
export class ListaComprasComponent implements OnInit {


  serviceList : ShoppingListService;
  constructor(private list: ShoppingListService) {
    this.serviceList = list;
  }


  ngOnInit(): void {
  }


}

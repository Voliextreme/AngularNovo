import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evandref',
  templateUrl: './evandref.component.html',
  styleUrls: ['./evandref.component.css']
})
export class EvandrefComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  canal(tv, button){
    tv.src="assets/Images/"+button.id+".jpg";
  }

}

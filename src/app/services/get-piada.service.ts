import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetPiadaService {

  constructor(private httpAsk : HttpClient) { }


  link = "https://api.chucknorris.io/jokes/search?";

  getPiada(valoraPesquisar: string){
    return this.httpAsk.get(this.link, {
      params:{'query': valoraPesquisar}
    });
  }

  link2 = "https://api.chucknorris.io/jokes/random";
  getRandom(){
    console.log(this.httpAsk.get(this.link2));
    return this.httpAsk.get(this.link2);
  }



}

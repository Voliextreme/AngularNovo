import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GetAnimeService {

  constructor(private httpAsk : HttpClient) { }


  linkanime ="https://api.jikan.moe/v3/search/anime"

  getAnime(animeaPesquisar : string){
    return this.httpAsk.get(this.linkanime,{
      params: {'q': animeaPesquisar}
    });
  }

  linkbyid = "https://api.jikan.moe/v3/anime/";
  getInfoId(animeid: string){
    return this.httpAsk.get(this.linkbyid + animeid);
  }

}

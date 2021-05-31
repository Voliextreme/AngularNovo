import { Component, OnInit } from '@angular/core';
import { GetAnimeService } from 'src/app/services/get-anime.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {

  constructor(private animeService : GetAnimeService) { }

  ngOnInit(): void {
  }


  animes: any;
  getAnimes(animeaPesquisar: string){
    this.animeService.getAnime(animeaPesquisar).subscribe(data => {this.animes = data;
    console.log(this.animes.results.title)})
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { GetAnimeService } from 'src/app/services/get-anime.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private getAnime: GetAnimeService) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => this.getAnime.getInfoId(data.id).subscribe(x => console.log(x)));
  }

  titulo:string = "ola";
  descricao:string = "olaola";
  
  /* Routing */


}

import { Component, OnInit } from '@angular/core';
import { GetPiadaService } from 'src/app/services/get-piada.service';

@Component({
  selector: 'app-piada',
  templateUrl: './piada.component.html',
  styleUrls: ['./piada.component.css']
})
export class PiadaComponent implements OnInit {

  constructor(private askPiada : GetPiadaService) { }

  ngOnInit(): void {
  }

  piadas: any ;
  getRandomPiada(){
    this.askPiada.getRandom().subscribe(data => {this.piadas = data});
  }
  
  getPiadas(valoraPesquisar: string){
    this.askPiada.getPiada(valoraPesquisar).subscribe(data => {this.piadas = data});
  }

}

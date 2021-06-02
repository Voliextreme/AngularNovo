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

  piadas: any ="O que é que uma banana diz para a outra? Macacos me mordam!";
  resultado:any="";
  getRandomPiada(){
    //this.piada = this.chuckService.piadaDoServico;
    this.askPiada.getRandom().subscribe(
     data =>
     {
       this.resultado = data;
       this.piadas = this.resultado.value;
     }


   );
  }

  piadinha:any="";
  getPiadas(valoraPesquisar: string){
    this.askPiada.getPiada(valoraPesquisar).subscribe(data => {this.piadinha = data});

  }


}

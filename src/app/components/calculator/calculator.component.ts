import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  valor1 :number = 1;
  valor2 :number = 1;
  sinal : string;

  resultado ;
  calcula(){
    this.resultado = eval(this.valor1+ this.sinal +this.valor2);
  }
}

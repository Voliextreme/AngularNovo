import { Component, OnInit } from '@angular/core';
import { AgendaService } from 'src/app/services/agenda.service';

@Component({
  selector: 'app-clinica',
  templateUrl: './clinica.component.html',
  styleUrls: ['./clinica.component.css']
})
export class ClinicaComponent implements OnInit {

  phoneService : AgendaService;
  constructor(private pService: AgendaService) {
    this.phoneService = pService;
  }
  ngOnInit(): void {
  }

}

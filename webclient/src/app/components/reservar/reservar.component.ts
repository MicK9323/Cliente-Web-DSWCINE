import { ReservaService } from './../../services/reserva.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styles: []
})
export class ReservarComponent implements OnInit {

  titulo: string = 'Buscar Funciones';
  listaFechas: string[];

  constructor( private _reservaService: ReservaService ) { }

  ngOnInit() {
    this.listarFechas();
  }

  public listarFechas() {
    this._reservaService.getFechas().subscribe(
      fechas => {
        this.listaFechas = fechas;
        console.log(this.listaFechas);
      }
    );
  }

}

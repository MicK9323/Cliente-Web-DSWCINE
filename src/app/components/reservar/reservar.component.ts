import { Funcion } from './../../classes/funcion';
import { ReservaService } from './../../services/reserva.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styles: []
})
export class ReservarComponent implements OnInit {

  titulo: string = 'Buscar Funciones';
  listaFechas: any[];
  listaLocales: any[];
  listaFunciones: Funcion[] = null;

  constructor( private _reservaService: ReservaService ) { }

  ngOnInit() {
    this.listarFechas();
    this.listarLocales();
  }

  // listar fechas
  public listarFechas() {
    this._reservaService.obtenerFechas().subscribe(
      fechas => this.listaFechas = fechas
    );
  }

  // listar locales
  public listarLocales() {
    this._reservaService.obtenerLocales().subscribe(
      locales => this.listaLocales = locales
    );
  }

  // listar funciones
  public buscarFunciones(fecha, local) {
    this._reservaService.obtenerFunciones(fecha, local).subscribe(
      funciones => {
        if (funciones.length < 1) {
          this.listaFunciones = null;
        } else {
          this.listaFunciones = funciones;
        }
      }
    );
  }

}

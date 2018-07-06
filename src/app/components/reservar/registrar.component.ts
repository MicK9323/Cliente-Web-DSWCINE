import { ReservaService } from './../../services/reserva.service';
import { Cliente } from './../../classes/cliente';
import { Funcion } from './../../classes/funcion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styles: []
})
export class RegistrarComponent implements OnInit {

  funcion: Funcion;
  cliente: Cliente;

  constructor( private _reservaService: ReservaService ) { }

  ngOnInit() {
  }

}

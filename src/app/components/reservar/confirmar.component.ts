import { Reserva } from './../../classes/reserva';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservaService } from './../../services/reserva.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styles: []
})
export class ConfirmarComponent implements OnInit {

  titulo: string = 'Confirmación de Reserva';
  // Objeto para almacenar la confirmacion de la reserva
  reserva: Reserva = null;
  // Id de reserva
  id: string = '';

  constructor(
    private _reservaService: ReservaService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    this._activatedRoute.params.subscribe(parametros => {
      this.id = parametros['id'];
      this._reservaService
        .confirmarReserva(parametros['id'])
        .subscribe(reserva => {
          this.reserva = reserva;
        });
    });
  }

  ngOnInit() {}

  public imprimir() {

  }

}

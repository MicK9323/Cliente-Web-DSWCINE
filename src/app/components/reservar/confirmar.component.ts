import { Reserva } from './../../classes/reserva';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservaService } from './../../services/reserva.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jspdf from 'jspdf';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styles: []
})
export class ConfirmarComponent implements OnInit {

  @ViewChild('ticket') ticket: ElementRef;

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
    let doc = new jspdf();

    let elementHandler = {
      '#editor': function( element, renderer ) {
        return true;
      }
    };

    let ticket = this.ticket.nativeElement;

    doc.fromHTML(ticket.innerHTML, 15, 15, {
      'width': 190,
      'elementHandlers': elementHandler
    });

    doc.save('ticket.pdf');
  }

}

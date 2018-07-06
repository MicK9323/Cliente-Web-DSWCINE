import { ReservaService } from './../../services/reserva.service';
import { Cliente } from './../../classes/cliente';
import { Funcion } from './../../classes/funcion';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styles: []
})
export class RegistrarComponent implements OnInit {
  titulo: string = 'Reservar Entrada';
  // Objeto para almacenar datos de la funcion
  funcion: Funcion;
  // Objeto para almacenar datos del cliente
  cliente: Cliente = null;

  constructor(
    private _reservaService: ReservaService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    this._activatedRoute.params.subscribe(parametros => {
      this.funcion = this._reservaService.buscarFuncion(parametros['id']);
    });
  }

  ngOnInit() {}

  public validarCliente(dni: string) {
    this._reservaService.validarCliente(dni).subscribe(
      cliente => {
        if (cliente == null) {
          alert('El dni ingresado es incorrecto o no se encuentra registrado');
        } else {
          this.cliente = cliente;
        }
      }
    );
  }

  public registrarReserva() {
    this._reservaService.registrarReserva(this.funcion.id_funcion, this.cliente.dni).subscribe(
      reserva => {
        let id = reserva[0];
        this.mostrarConfirmacion(id);
      }
    );
  }

  public mostrarConfirmacion(id: string) {
    console.log(id);
    this._router.navigate(['/confirmar', id]);
  }

}

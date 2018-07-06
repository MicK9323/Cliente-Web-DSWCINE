import { Reserva } from './../classes/reserva';
import { Cliente } from './../classes/cliente';
import { Funcion } from './../classes/funcion';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { map } from 'rxjs/operators';
import { forEach } from '../../../node_modules/@angular/router/src/utils/collection';
import { isNgTemplate } from '../../../node_modules/@angular/compiler';

@Injectable()
export class ReservaService {

  // Lista de funciones
  private funciones: Funcion[];

  // URL ENDPOINT
  private ENDPOINT: String = 'http://webapirestcine.azurewebsites.net/api';

  // Headers
  // private headers = new HttpHeaders({'Content-Type': 'application-json'});

  constructor(
    private _httpClient: HttpClient
  ) { }

  // Lista de fechas
  obtenerFechas(): Observable<any[]> {
    let api: string = `${this.ENDPOINT}/listarfechas`;
    return this._httpClient.get(api).pipe(
      map( response => response as any[] )
    );
  }

  // Lista de locales
  obtenerLocales(): Observable<any[]> {
    let api: string = `${this.ENDPOINT}/listarlocales`;
    return this._httpClient.get(api).pipe(
      map( response => response as any[] )
    );
  }

  // listar funciones
  obtenerFunciones(fecha: string, local: string): Observable<Funcion[]> {
    let api: string = `${this.ENDPOINT}/listarfunciones?fecha=${fecha}&local=${local}`;
    return this._httpClient.get(api).pipe(
      map(response => {
        this.funciones = response as Funcion[];
        return response as Funcion[];
      })
    );
  }

  // validar dni de cliente
  validarCliente(dni: string): Observable<Cliente> {
    let api = `${this.ENDPOINT}/consultacliente?dni=${dni}`;
    return this._httpClient.get(api).pipe(
      map( response => {
        if (response == null) {
          return null;
        } else {
          return response as Cliente;
        }
      })
    );
  }

  // Registrar Reserva
  registrarReserva(funcion: string, dni: string): Observable<string> {
    let api = `${this.ENDPOINT}/registroreserva?funcion=${funcion}&dni=${dni}`;
    return this._httpClient.post(api, null).pipe(
      map( response => response as string )
    );
  }

  // Consultar Reserva
  confirmarReserva(id: string): Observable<Reserva> {
    let api = `${this.ENDPOINT}/consultareserva?id=${id}`;
    return this._httpClient.get(api).pipe(
      map( response => response as Reserva )
    );
  }

  // Buscar funcion dentro del arreglo de funciones
  buscarFuncion(id: string): Funcion {
    for (let item of this.funciones) {
      let _id = item.id_funcion;
      if (_id == id) {
        return item;
      }
    }
  }
}

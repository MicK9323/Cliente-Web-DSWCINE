import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ReservaService {

  // URL ENDPOINT
  private ENDPOINT: String = 'http://webapirestcine.azurewebsites.net/api';

  // Headers
  private headers = new HttpHeaders({'Content-Type': 'application-json'});

  constructor(
    private _httpClient: HttpClient
  ) { }

  // Lista de fechas
  getFechas(): Observable<string[]> {
    let api: string = `${this.ENDPOINT}/listarfechas`;
    return this._httpClient.get(api).pipe(
      map( response => response as string[] )
    );
  }


}

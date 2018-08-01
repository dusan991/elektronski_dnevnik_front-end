import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OdeljenjePredmetNastavnikService {

  url = environment.apiBaseUrl + 'odeljenje-predmet-nastavnik'
  constructor(
    private messageService : MessageService,
    private http : HttpClient
  ) { }

  addOdeljenjePredmetNastavnik(objekat : { idOdeljenja : number, idPredmeta : number, idNastavnika : number}) : Observable<any>
  {
    return this.http.post<any>(`${this.url}/odeljenje/${objekat.idOdeljenja}/predmet/${objekat.idPredmeta}/nastavnik/${objekat.idNastavnika}`, null).pipe(
      tap( () => this.log(`Dodata predmet"`)),
      catchError(this.handleError<any>('addOcena')));

  }

  getOdeljenjePredmetNastavnikByIdOdeljenja(idOdeljenja : number) : Observable<any>
  {
    return this.http.get<any>(`${this.url}/nastavnici-predmeti/${idOdeljenja}`).pipe(
      tap( () => this.log(`Dodata predmet"`)),
      catchError(this.handleError<any>('addOcena')));

  }

  getOdeljenjePredmetNastavnik() : Observable<any>
  {
    return this.http.get<any>(`${this.url}`).pipe(
      tap( () => this.log(`Dodata predmet"`)),
      catchError(this.handleError<any>('addOcena')));

  }

  deleteOdeljenjePredmetNastavnik(idOPN : number) : Observable<any>
  {
    return this.http.delete<any>(`${this.url}/${idOPN}`).pipe(
      tap( () => this.log(`Obrisan opn"`)),
      catchError(this.handleError<any>('addOcena')));

  }

  private log(message: string) {
    this.messageService.add('OcenaService: ' + message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import {Odeljenje } from '../models/Odeljenje';
import { MessageService } from './message.service';
import { environment } from '../../environments/environment';

@Injectable()

export class OdeljenjeService {

  odeljenjeUrl: string = environment.apiBaseUrl + 'odeljenje/';

  constructor(private httpClient: HttpClient, private messageService: MessageService) { }

  getOdeljenje(id: number): Observable<Odeljenje> {
    return this.httpClient
      .get<Odeljenje>(this.odeljenjeUrl + id)
      .pipe(
        tap(a => this.log(`Učitan odeljenje sa id "${a.idOdeljenja}"`)),
        catchError(this.handleError<Odeljenje>('getOdeljenje')));
  }

  getOdeljenja(): Observable<Odeljenje[]> {
    console.log(this.odeljenjeUrl);
    return this.httpClient
      .get<Odeljenje[]>(this.odeljenjeUrl)
      .pipe(
        tap(_ => this.log(`Učitani Odeljenja`)),
        catchError(this.handleError<Odeljenje[]>('getOdeljenja')));
  }

  addOdeljenje(odeljenje: Odeljenje): Observable<Odeljenje> {
    return this.httpClient
      .post<Odeljenje>(this.odeljenjeUrl, odeljenje)
      .pipe(
        tap(a => this.log(`Dodat odeljenje sa id "${a.idOdeljenja}"`)),
        catchError(this.handleError<Odeljenje>('addOdeljenje')));
  }

  updateOdeljenje(odeljenje: Odeljenje): Observable<Odeljenje> {
    return this.httpClient
      .put<Odeljenje>(this.odeljenjeUrl + odeljenje.idOdeljenja, odeljenje)
      .pipe(
        tap(a => this.log(`Izmenjeno odeljenje sa id "${a.idOdeljenja}"`)),
        catchError(this.handleError<Odeljenje>('updateOdeljenje')));
  }

  removeOdeljenje(idOdeljenja : number) : Observable<any>{
    return this.httpClient
      .delete(this.odeljenjeUrl +idOdeljenja)
      .pipe(
        tap(a => this.log(`Izbrisano odeljenje sa id "${idOdeljenja}"`)),
        catchError(this.handleError<Odeljenje>('updateOdeljenje')));
  }

  searchOdeljenje(term: string): Observable<Odeljenje[]> {
    return this.httpClient
      .get<Odeljenje[]>(`${this.odeljenjeUrl}?naziv=${term}`)
      .pipe(
        tap(_ => this.log(`Nadjena odeljenja sa nazivom "${term}"`)),
        catchError(this.handleError<Odeljenje[]>('searchOdeljenje', []))
    );
  }

  private log(message: string) {
    this.messageService.add('ArtikalService: ' + message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

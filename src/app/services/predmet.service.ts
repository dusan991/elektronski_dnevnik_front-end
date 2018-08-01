import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment"
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Predmet } from '../models/Predmet';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PredmetService {
  private predmetUrl = environment.apiBaseUrl + 'predmet/';
  
  constructor(private httpClient: HttpClient, private messageService: MessageService) { }

  getPredmet(idPredmeta: number): Observable<Predmet> {
    return this.httpClient
      .get<Predmet>(this.predmetUrl + idPredmeta)
      .pipe(
        tap(a => {
          this.log(`Učitan artikal sa id "${a.idPredmeta}"`)
        }),
        catchError(this.handleError<Predmet>('getPredmet')));
  }
  getPredmeti(): Observable<Predmet[]> {
    return this.httpClient
      .get<Predmet[]>(this.predmetUrl)
      .pipe(
        tap(a => {
          console.log('Vraceni predmeti',a)
          this.log(`Učitani predmeti`)}),
        catchError(this.handleError<Predmet[]>('getPredmeti')));
  }

  getPredmetiByIdOdeljenja(idOdeljenja : number): Observable<Predmet[]> {
    return this.httpClient
      .get<Predmet[]>(this.predmetUrl + `predmeti-odeljenja/${idOdeljenja}`)
      .pipe(
        tap(a => {
          console.log('Vraceni predmeti',a)
          this.log(`Učitani predmeti`)}),
        catchError(this.handleError<Predmet[]>('getPredmeti')));
  }

  addPredmet(predmet: Predmet): Observable<Predmet> {
    return this.httpClient
      .post<Predmet>(this.predmetUrl, predmet)
      .pipe(
        tap(a => this.log(`Dodat predmet sa id "${a.idPredmeta}"`)),
        catchError(this.handleError<Predmet>('addPredmet')));
  }

  removePredmet(idPredmeta : number): Observable<Predmet> {
    return this.httpClient
      .delete<Predmet>(this.predmetUrl + idPredmeta)
      .pipe(
        tap(a => this.log(`Izbrisan predmet sa id "${a.idPredmeta}"`)),
        catchError(this.handleError<Predmet>('addPredmet')));
  }

  updatePredmet(predmet: Predmet): Observable<Predmet> {
    return this.httpClient
      .put<Predmet>(this.predmetUrl +predmet.idPredmeta, predmet)
      .pipe(
        tap(a => this.log(`Izmenjen predmet sa id "${a.idPredmeta}"`)),
        catchError(this.handleError<Predmet>('updatePredmet')));
  }

  searchPredmet(term: string): Observable<Predmet[]> {
    return this.httpClient
      .get<Predmet[]>(`${this.predmetUrl}?naziv=${term}`)
      .pipe(
        tap(_ => this.log(`Nadjeni vredmet sa nizovom "${term}"`)),
        catchError(this.handleError<Predmet[]>('searchPredmet', []))
    );
  }

  private log(message: string) {
    this.messageService.add('PredmetService: ' + message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

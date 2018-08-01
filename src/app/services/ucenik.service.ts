import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Ucenik } from '../models/Ucenik';
import { MessageService } from './message.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UcenikService {

  private ucenikUrl = environment.apiBaseUrl + 'ucenik/';

  constructor(private httpClient: HttpClient, private messageService: MessageService) { }

  getUcenik(idUcenik: number): Observable<Ucenik> {
    return this.httpClient
      .get<Ucenik>(this.ucenikUrl + idUcenik)
      .pipe(
        tap(a => this.log(`Učitan artikal sa id "${a.idUcenika}"`)),
        catchError(this.handleError<Ucenik>('getUcenik')));
  }

  getUcenici(): Observable<Ucenik[]> {
    return this.httpClient
      .get<Ucenik[]>(this.ucenikUrl)
      .pipe(
        tap(_ => this.log(`Učitani ucenici`)),
        catchError(this.handleError<Ucenik[]>('getUcenici')));
  }

  getUceniciByIdOdeljenja(idOdeljenja: number): Observable<Ucenik[]> {
    return this.httpClient
      .get<Ucenik[]>(this.ucenikUrl + `ucenici-odeljenja/${idOdeljenja}`)
      .pipe(
        tap(_ => this.log(`Učitani ucenici`)),
        catchError(this.handleError<Ucenik[]>('getUcenici')));
  }

  addUcenik(ucenik: Ucenik, idRoditelja : number): Observable<Ucenik> {
    return this.httpClient
      .post<Ucenik>(this.ucenikUrl + idRoditelja, ucenik)
      .pipe(
        tap(a => this.log(`Dodat ucenik sa id "${a.idUcenika}"`)),
        catchError(this.handleError<Ucenik>('addUcenik')));
  }

  updateUcenik(ucenik: Ucenik): Observable<Ucenik> {
    
    console.log(ucenik);
    return this.httpClient
      .put<Ucenik>(this.ucenikUrl + ucenik.idUcenika, ucenik)
      .pipe(
        tap(a => this.log(`Izmenjen ucenik sa id "${a.idUcenika}"`)),
        catchError(this.handleError<Ucenik>('updateUcenik')));
  }

  promeniOdeljenje(idUcenika:number, idOdeljenja : number): Observable<Ucenik> {
    
    return this.httpClient
      .put<Ucenik>(this.ucenikUrl + `${idUcenika}/odeljenje/${idOdeljenja}`, null)
      .pipe(
        tap(a => this.log(`Izmenjen ucenik sa id "${a.idUcenika}"`)),
        catchError(this.handleError<Ucenik>('updateUcenik')));
  }

  getUceniciBezOdeljjenja(): Observable<Ucenik[]> {
    return this.httpClient
      .get<Ucenik[]>(this.ucenikUrl + 'ucenici-bez-odeljenja')
      .pipe(
        tap(_ => this.log(`Učitani ucenici`)),
        catchError(this.handleError<Ucenik[]>('getUcenici')));
  }

  searchUcenik(term: string): Observable<Ucenik[]> {
    return this.httpClient
      .get<Ucenik[]>(`${this.ucenikUrl}?naziv=${term}`)
      .pipe(
        tap(_ => this.log(`Nadjeni ucenik sa nizovom "${term}"`)),
        catchError(this.handleError<Ucenik[]>('searchUcenik', []))
      );
  }

  private log(message: string) {
    this.messageService.add('UcenikService: ' + message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

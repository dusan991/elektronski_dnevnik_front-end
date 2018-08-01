import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Roditelj } from '../models/Roditelj';
import { MessageService } from './message.service';
import { environment } from '../../environments/environment';
import { Ucenik } from '../models/Ucenik';


@Injectable({
  providedIn: 'root'
})
export class RoditeljService {

  private roditeljUrl = environment.apiBaseUrl + 'roditelj/';

  constructor(private httpClient: HttpClient, private messageService: MessageService) { }

  getRoditelj(idRoditelj: number): Observable<Roditelj> {
    return this.httpClient
      .get<Roditelj>(this.roditeljUrl + idRoditelj)
      .pipe(
        tap(a => this.log(`Učitan roditelj sa id "${a.idRoditelja}"`)),
        catchError(this.handleError<Roditelj>('getRoditelj')));
  }

  getRoditelja(): Observable<Roditelj[]> {
    return this.httpClient
      .get<Roditelj[]>(this.roditeljUrl)
      .pipe(
        tap(_ => this.log(`Učitani roditelj`)),
        catchError(this.handleError<Roditelj[]>('getRoditelj')));
  }

  getDecaRoditelja(idRoditelja : number): Observable<Ucenik[]> {
    return this.httpClient
      .get<Ucenik[]>(this.roditeljUrl + `ucenici/${idRoditelja}`)
      .pipe(
        tap(_ => this.log(`Učitani ucenici`)),
        catchError(this.handleError<Ucenik[]>('getUcenici')));
  }

  addRoditelj(roditelj: Roditelj): Observable<Roditelj> {
    return this.httpClient
      .post<Roditelj>(this.roditeljUrl, roditelj)
      .pipe(
        tap(a => this.log(`Dodat roditelj sa id "${a.idRoditelja}"`)),
        catchError(this.handleError<Roditelj>('addRoditelj')));
  }

  removeRoditelj(idRoditelja : number): Observable<Roditelj> {
    return this.httpClient
      .delete<Roditelj>(this.roditeljUrl + idRoditelja)
      .pipe(
        tap(a => this.log(`Izbrisan roditelj sa id "${a.idRoditelja}"`)),
        catchError(this.handleError<Roditelj>('addRoditelj')));
  }

  updateRoditelj(roditelj:Roditelj): Observable<Roditelj> {
    return this.httpClient
      .put<Roditelj>(this.roditeljUrl + roditelj.idRoditelja, roditelj)
      .pipe(
        tap(a => this.log(`Izmenjen roditelj sa id "${a.idRoditelja}"`)),
        catchError(this.handleError<Roditelj>('updateRoditelj')));
  }

  searchRoditelj(term: string): Observable<Roditelj[]> {
    return this.httpClient
      .get<Roditelj[]>(`${this.roditeljUrl}?naziv=${term}`)
      .pipe(
        tap(_ => this.log(`Nadjeni roditelj sa nizovom "${term}"`)),
        catchError(this.handleError<Roditelj[]>('searchRoditelj', []))
    );
  }

  private log(message: string) {
    this.messageService.add('RoditeljService: ' + message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

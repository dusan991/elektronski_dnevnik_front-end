import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Nastavnik } from '../models/Nastavnik';
import { MessageService } from './message.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NastavnikService {

  private nastavnikUrl = environment.apiBaseUrl + 'nastavnik/';

  constructor(private httpClient: HttpClient, private messageService: MessageService) { }

  getNastavnik(id: number): Observable<Nastavnik> {
    return this.httpClient
      .get<Nastavnik>(this.nastavnikUrl + id)
      .pipe(
        tap(a => this.log(`Učitan nastavnik sa id "${a.idNastavnika}"`)),
        catchError(this.handleError<Nastavnik>('getNastavnik')));
  }

  getNastavnici(): Observable<Nastavnik[]> {
    return this.httpClient
      .get<Nastavnik[]>(this.nastavnikUrl)
      .pipe(
        tap(_ => this.log(`Učitani nastavnici`)),
        catchError(this.handleError<Nastavnik[]>('getNastavnici')));
  }

  getNastavniciByIdOdeljenja(idOdeljenja: number): Observable<Nastavnik[]> {
    return this.httpClient
      .get<Nastavnik[]>(this.nastavnikUrl + `nastavnici-odeljenja/${idOdeljenja}`)
      .pipe(
        tap(_ => this.log(`Učitani nastavnici`)),
        catchError(this.handleError<Nastavnik[]>('getNastavnici')));
  }

  getOdeljenjaPredmeti(idNastavnika: number): Observable<any[]> {
    return this.httpClient
      .get<any[]>(this.nastavnikUrl + `odeljenja-predmeti/${idNastavnika}`)
      .pipe(
        tap(_ => this.log(`Učitani nastavnici`)),
        catchError(this.handleError<any[]>('any')));
  }

  addNastavnik(nastavnik: Nastavnik): Observable<Nastavnik> {
    return this.httpClient
      .post<Nastavnik>(this.nastavnikUrl, nastavnik)
      .pipe(
        tap(a => this.log(`Dodat nastavnik sa id "${a.idNastavnika}"`)),
        catchError(this.handleError<Nastavnik>('addNastavnik')));
  }

  removeNastavnik(idNastavnika: number): Observable<Nastavnik> {
    return this.httpClient
      .delete<Nastavnik>(this.nastavnikUrl + idNastavnika)
      .pipe(
        tap(a => this.log(`Izbrisan nastavnik sa id "${a.idNastavnika}"`)),
        catchError(this.handleError<Nastavnik>('addNastavnik')));
  }
  updateNastavnik(nastavnik: Nastavnik): Observable<Nastavnik> {
    return this.httpClient
      .put<Nastavnik>(this.nastavnikUrl + nastavnik.idNastavnika, nastavnik)
      .pipe(
        tap(a => this.log(`Izmenjen nastavnik sa id "${a.idNastavnika}"`)),
        catchError(this.handleError<Nastavnik>('updateNastavnik')));
  }

  searchNastavnici(term: string): Observable<Nastavnik[]> {
    return this.httpClient
      .get<Nastavnik[]>(`${this.nastavnikUrl}?naziv=${term}`)
      .pipe(
        tap(_ => this.log(`Nadjeni nastavnik sa nizovom "${term}"`)),
        catchError(this.handleError<Nastavnik[]>('searchNastavnici', []))
      );
  }

  private log(message: string) {
    this.messageService.add('ArtikalService: ' + message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

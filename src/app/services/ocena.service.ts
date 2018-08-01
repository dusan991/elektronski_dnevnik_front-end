import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Ocena } from '../models/Ocena';
import { tap, catchError } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OcenaService {

  ocenaURL : string = environment.apiBaseUrl + 'ocena'
  constructor(private http : HttpClient,
    private messageService : MessageService
  ) { }


  getOceneForUcenik(idUcenika : number){
    return this.http.get(`${this.ocenaURL}/ucenik/${idUcenika}`).pipe(
      tap( () => this.log(`Vracene ocene ucenika sa id "${idUcenika}"`)),
      catchError(this.handleError<Ocena>('getOcene')));
  }

  upisiOcenu(ocena : Ocena) : Observable<Ocena>
  {
    return this.http.post<Ocena>(`${this.ocenaURL}/ucenik/${ocena.ucenik}/odeljenjePredmetNastavnik/${ocena.odeljenjePredmetNastavnik}`, ocena).pipe(
      tap( () => this.log(`Dodata ocena uceniku sa id "${ocena.ucenik}"`)),
      catchError(this.handleError<Ocena>('addOcena')));

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

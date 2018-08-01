import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ucenik } from '../../models/Ucenik';
import { UcenikService } from '../../services/ucenik.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { NastavnikService } from '../../services/nastavnik.service';
import { PredmetService } from '../../services/predmet.service';
import { Nastavnik } from '../../models/Nastavnik';
import { Predmet } from '../../models/Predmet';
import { OdeljenjePredmetNastavnikService } from '../../services/odeljenje-predmet-nastavnik.service';
import { OdeljenjePredmetNastavnik } from '../../models/OdeljenjePredmetNastavnik';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-odeljenje-item',
  templateUrl: './odeljenje-item.component.html',
  styleUrls: ['./odeljenje-item.component.css']
})
export class OdeljenjeItemComponent implements OnInit {

  ucenici$: Observable<Ucenik[]>;
  uceniciBezOdeljenja$: Observable<Ucenik[]>;
  nastavnici$: Observable<Nastavnik[]>;
  predmeti$: Observable<Predmet[]>;
  idOdeljenja: number;
  opn: OdeljenjePredmetNastavnik[];

  noviUcenik: Ucenik;

  constructor(

    private uceniciService: UcenikService,
    private route: ActivatedRoute,
    private nastavniciService: NastavnikService,
    private predmetiService: PredmetService,
    private odeljenjePredmetNastavnik: OdeljenjePredmetNastavnikService,
    private authService : AuthService
  ) { }


  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(params => { this.idOdeljenja = +params.get('id'); this.ucenici$ = this.uceniciService.getUceniciByIdOdeljenja(+params.get('id')); return this.route.paramMap; }),
        switchMap(params => { this.uceniciBezOdeljenja$ = this.uceniciService.getUceniciBezOdeljjenja(); return this.route.paramMap; }),
        switchMap(params => this.odeljenjePredmetNastavnik.getOdeljenjePredmetNastavnikByIdOdeljenja(+params.get('id')))
      ).subscribe(data => this.opn = data);
  }

  deleteOPN(idOPN: number) {
    if (confirm("Da li zelite da obrisete predmet-nastavnik?"))
      this.odeljenjePredmetNastavnik.deleteOdeljenjePredmetNastavnik(idOPN)
        .subscribe();
  }


  obrisiUcenikaIzOdeljenja(ucenik: Ucenik) {
    if (confirm("Izbrisati ucenika iz ovog odeljenja?"))
      this.uceniciService.promeniOdeljenje(ucenik.idUcenika, 0)
        .subscribe();
  }

  dodajUcenika() {
    console.log(this.noviUcenik)
    this.uceniciService.promeniOdeljenje(this.noviUcenik.idUcenika, this.idOdeljenja)
      .subscribe();
  }

  get isAdmin() : boolean{
    return this.authService.role == "ROLE_ADMIN" ? true : false;
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Ucenik } from '../../models/Ucenik';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UcenikService } from '../../services/ucenik.service';
import { switchMap, map } from 'rxjs/operators';
import { OcenaService } from '../../services/ocena.service';
import { Ocena } from '../../models/Ocena';
import { Roditelj } from '../../models/Roditelj';
import { RoditeljService } from '../../services/roditelj.service';
import { AuthService } from '../../services/auth.service';
import { OdeljenjePredmetNastavnikService } from '../../services/odeljenje-predmet-nastavnik.service';

@Component({
  selector: 'app-ucenik-info',
  templateUrl: './ucenik-info.component.html',
  styleUrls: ['./ucenik-info.component.css']
})
export class UcenikInfoComponent implements OnInit {

  ucenik: Ucenik;
  predmeti: any[];
  dodavanjeOcene: boolean = false;
  ocena = {};
  roditelj: Roditelj;
  idOPN: number;

  constructor(
    private route: ActivatedRoute,
    private uceniciService: UcenikService,
    private ocenaService: OcenaService,
    private router: Router,
    private roditeljService: RoditeljService,
    private authService: AuthService,
    private opn: OdeljenjePredmetNastavnikService
  ) { }



  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(params => this.uceniciService.getUcenik(+params.get('id'))),
        switchMap(ucenik => { this.ucenik = ucenik; return this.ocenaService.getOceneForUcenik(ucenik.idUcenika); }),
        switchMap((data: any[]) => {
          this.predmeti = data;
          if (this.authService.role == "ROLE_NASTAVNIK")
            this.opn.getOdeljenjePredmetNastavnik().pipe(
              map(opnArray => {
                console.log(opnArray, this.authService.id);
                return opnArray.find(opn => opn.idNastavnika == this.authService.id && this.predmeti.map(predmet => predmet.idOdeljenjePredmetNastavnik).includes(opn.idOdeljenjePredmetNastavnik))
              })
            ).subscribe(opn => this.idOPN = opn.idOdeljenjePredmetNastavnik);

          console.log(this.predmeti);
          return this.roditeljService.getRoditelj(this.ucenik["idRoditelja"])
        })
      )
      .subscribe(roditelj => this.roditelj = roditelj);
  }

  public ispisiNizOcena(ocene: Ocena[]): string {
    return ocene.map(ocena => ocena.ocena).join(',');
  }

  get tipoviOcene(): string[] {
    return ["KONTROLNI", "PISMENI", "ZAKLJUCNA"];
  }

  dodajOcenu() {
    const idOPN: number = this.authService.role == "ROLE_ADMIN" ? this.ocena["idOdeljenjePredmetNastavnik"] : this.idOPN;
    const ocena: Ocena = new Ocena(null, this.ocena["ocena"], null, this.ocena["tipOcene"], this.ucenik.idUcenika, idOPN);
    console.log(ocena);
    this.ocenaService.upisiOcenu(ocena)
      .subscribe(response => response.ocena && this.router.navigate(['ucenik', `${this.ucenik.idUcenika}`]));
  }


  imaZakljucnuOcenu(predmet): boolean {
    return predmet.ocenaZakljucnaUcenika.length ? true : false;
  }

  get isAdmin(): boolean {
    return this.authService.role == 'ROLE_ADMIN' ? true : false;
  }

  get isNastavnik(): boolean {
    return this.authService.role == 'ROLE_NASTAVNIK' ? true : false;
  }

  get isGuest(): boolean {
    return this.authService.role == 'ROLE_UCENIK' || 'ROLE_RODITELJ' ? true : false;
  }

  get ocenaZakljucena(): boolean {
    if (this.authService.role == 'ROLE_NASTAVNIK') {
      return this.predmeti.find(predmet => predmet.idOdeljenjePredmetNastavnik == this.idOPN).ocenaZakljucnaUcenika.length ? true : false;
    }
    else return false;

  }

  get predmetiZaPrikaz() {
    if (this.authService.role == "ROLE_NASTAVNIK") {
      console.log(this.predmeti.find(predmet => predmet.idOdeljenjePredmetNastavnik == this.idOPN), this.idOPN);
      return [this.predmeti.find(predmet => predmet.idOdeljenjePredmetNastavnik == this.idOPN)];
    }
    else return this.predmeti;
  }

  get nastavnikUslov(): boolean {
    if (this.authService.role == "ROLE_NASTAVNIK") {
      if (this.idOPN)
        return true;
      else return false;
    }
    return true;
  }
}

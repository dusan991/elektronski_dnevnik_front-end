import { Component, OnInit } from '@angular/core';
import { Nastavnik } from '../../models/Nastavnik';
import { Predmet } from '../../models/Predmet';
import { NastavnikService } from '../../services/nastavnik.service';
import { ActivatedRoute } from '@angular/router';
import { PredmetService } from '../../services/predmet.service';
import { switchMap } from 'rxjs/operators';
import { OdeljenjeService } from '../../services/odeljenje.service';
import { Odeljenje } from '../../models/Odeljenje';
import { OdeljenjePredmetNastavnikService } from '../../services/odeljenje-predmet-nastavnik.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-predmet-nastavnik-add',
  templateUrl: './predmet-nastavnik-add.component.html',
  styleUrls: ['./predmet-nastavnik-add.component.css']
})
export class PredmetNastavnikAddComponent implements OnInit {

  idNastavnika: number;
  nastavnici: Nastavnik[];
  idOdeljenja: number;
  idPredmeta: number;
  predmeti: Predmet[];
  imeOdeljenja : String;

  constructor(
    private nastavnikService: NastavnikService,
    private predmetService: PredmetService,
    private odeljenjeService : OdeljenjeService,
    private odeljenjePredmetNastavnik : OdeljenjePredmetNastavnikService,
    private route: ActivatedRoute,
    private location : Location
  ) { }

  ngOnInit() {
    this.route.paramMap
    .pipe(
      switchMap(params => {this.idOdeljenja = +params.get('idOdeljenja'); return this.odeljenjeService.getOdeljenje(this.idOdeljenja);})
    )
      .subscribe( (odeljenje : Odeljenje) => this.imeOdeljenja = odeljenje.imeOdeljenja)

    this.nastavnikService.getNastavnici()
      .subscribe(data => this.nastavnici = data);

    this.predmetService.getPredmeti()
      .subscribe(data => this.predmeti = data)
  }

  dodajPredmet()
  {
    this.odeljenjePredmetNastavnik.addOdeljenjePredmetNastavnik({idOdeljenja : this.idOdeljenja, idPredmeta : this.idPredmeta, idNastavnika : this.idNastavnika})
      .subscribe( () => console.log("dodato"))
  }

  
  goBack() {
    this.location.back();
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Predmet } from '../../models/Predmet';
import { Router, ActivatedRoute } from '@angular/router';
import { PredmetService } from '../../services/predmet.service';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Nastavnik } from '../../models/Nastavnik';
import { NastavnikService } from '../../services/nastavnik.service';
import { Odeljenje } from '../../models/Odeljenje';

@Component({
  selector: 'app-predmet-add',
  templateUrl: './predmet-add.component.html',
  styleUrls: ['./predmet-add.component.css']
})
export class PredmetAddComponent implements OnInit {

  predmet: any = {};


  constructor(
    private predmetService: PredmetService,
    private location: Location,
  ) { }



  ngOnInit() {
  }

  dodajPredmet() {
    this.predmetService.addPredmet(this.predmet)
      .subscribe();
  }


  goBack() {
    this.location.back();
  }
}

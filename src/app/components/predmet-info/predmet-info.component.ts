import { Component, OnInit } from '@angular/core';
import { Predmet } from '../../models/Predmet';
import { ActivatedRoute, Router } from '@angular/router';
import { PredmetService } from '../../services/predmet.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-predmet-info',
  templateUrl: './predmet-info.component.html',
  styleUrls: ['./predmet-info.component.css']
})
export class PredmetInfoComponent implements OnInit {
  predmet: Predmet;

  constructor(
    private route : ActivatedRoute,
    private predmetService :PredmetService,
    private router : Router
  ) { }


  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(params => this.predmetService.getPredmet(+params.get('id')))
      )
      .subscribe(predmet => this.predmet = predmet)
  }

  izmeniPredmet() {
    this.predmetService.updatePredmet(this.predmet)
      .subscribe(response => this.router.navigate(['./..']));
  }

  izbrisiPredmet() {
    if (confirm("da li zelite da obriste nastavnika?"))
      this.predmetService.removePredmet(this.predmet.idPredmeta)
        .subscribe(response => this.router.navigate(['./..']))
  }

}

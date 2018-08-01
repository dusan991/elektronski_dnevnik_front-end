import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Predmet } from '../../models/Predmet';
import { PredmetService } from '../../services/predmet.service';

@Component({
  selector: 'app-predmet-list',
  templateUrl: './predmet-list.component.html',
  styleUrls: ['./predmet-list.component.css']
})
export class PredmetListComponent implements OnInit {

  predmeti$ : Observable<Predmet[]>
  constructor(
    private predmetService : PredmetService
  ) { }


  ngOnInit() {
    this.predmeti$ = this.predmetService.getPredmeti();
  }

}

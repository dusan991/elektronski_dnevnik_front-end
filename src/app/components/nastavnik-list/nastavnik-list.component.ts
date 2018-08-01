import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Nastavnik } from '../../models/Nastavnik';
import { NastavnikService } from '../../services/nastavnik.service';

@Component({
  selector: 'app-nastavnik-list',
  templateUrl: './nastavnik-list.component.html',
  styleUrls: ['./nastavnik-list.component.css']
})
export class NastavnikListComponent implements OnInit {

  nastavnici$ : Observable<Nastavnik[]>
  constructor(
    private nastavnikService : NastavnikService
  ) { }


  ngOnInit() {
    this.nastavnici$ = this.nastavnikService.getNastavnici();
  }

}

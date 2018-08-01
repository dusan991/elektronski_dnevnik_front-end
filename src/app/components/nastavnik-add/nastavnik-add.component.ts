import { Component, OnInit } from '@angular/core';
import { Nastavnik } from '../../models/Nastavnik';
import { NastavnikService } from '../../services/nastavnik.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nastavnik-add',
  templateUrl: './nastavnik-add.component.html',
  styleUrls: ['./nastavnik-add.component.css']
})
export class NastavnikAddComponent implements OnInit {

  nastavnik : any = {};
  constructor(
    private nastavnikService : NastavnikService,
    private location : Location
  ) { }

  ngOnInit() {
  }

  dodajNastavnika()
  {
    this.nastavnikService.addNastavnik(this.nastavnik)
      .subscribe( () => this.location.back());
  }

  goBack()
  {
    this.location.back();
  }

}

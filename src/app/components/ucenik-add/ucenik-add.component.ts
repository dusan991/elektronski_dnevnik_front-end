import { Component, OnInit } from '@angular/core';
import { Ucenik } from '../../models/Ucenik';
import { UcenikService } from '../../services/ucenik.service';
import { Location } from '@angular/common';
import { Roditelj } from '../../models/Roditelj';
import { Observable } from 'rxjs';
import { RoditeljService } from '../../services/roditelj.service';

@Component({
  selector: 'app-ucenik-add',
  templateUrl: './ucenik-add.component.html',
  styleUrls: ['./ucenik-add.component.css']
})
export class UcenikAddComponent implements OnInit {

  ucenik: any = {};
  idRoditelja: number;
  roditelji: Roditelj[];

  constructor(
    private ucenikService: UcenikService,
    private location: Location,
    private roditeljService: RoditeljService
  ) { }

  ngOnInit() {
    this.roditeljService.getRoditelja().subscribe( data => this.roditelji = data);
  }

  dodajUcenika() {
    this.ucenikService.addUcenik(this.ucenik, this.idRoditelja)
      .subscribe(() => this.location.back());


  }

  goBack() {
    this.location.back();
  }

}

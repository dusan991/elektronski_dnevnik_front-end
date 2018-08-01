import { Component, OnInit } from '@angular/core';
import { Roditelj } from '../../models/roditelj';
import { RoditeljService } from '../../services/roditelj.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-roditelj-add',
  templateUrl: './roditelj-add.component.html',
  styleUrls: ['./roditelj-add.component.css']
})
export class RoditeljAddComponent implements OnInit {

  roditelj : any = {};
  constructor(
    private roditeljService : RoditeljService,
    private location : Location
  ) { }

  ngOnInit() {
  }

  dodajRoditelja()
  {
    console.log(this.roditelj);
    this.roditeljService.addRoditelj(this.roditelj)
      .subscribe( () => this.location.back());
  }

  goBack()
  {
    this.location.back();
  }

}

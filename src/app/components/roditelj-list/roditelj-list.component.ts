import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Roditelj} from '../../models/Roditelj';
import { RoditeljService } from '../../services/roditelj.service';

@Component({
  selector: 'app-roditelj-list',
  templateUrl: './roditelj-list.component.html',
  styleUrls: ['./roditelj-list.component.css']
})
export class RoditeljListComponent implements OnInit {

  roditelji$ : Observable<Roditelj[]>
  constructor(
    private roditeljService : RoditeljService
  ) { }


  ngOnInit() {
    this.roditelji$ = this.roditeljService.getRoditelja();
  }
}

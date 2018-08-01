import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UcenikService } from '../../services/ucenik.service';
import { Observable } from 'rxjs';
import { Ucenik } from '../../models/Ucenik';
import { RoditeljService } from '../../services/roditelj.service';

@Component({
  selector: 'app-ucenik-list',
  templateUrl: './ucenik-list.component.html',
  styleUrls: ['./ucenik-list.component.css']
})
export class UcenikListComponent implements OnInit {

  ucenici$: Observable<any[]>;

  constructor(private authService: AuthService,
    private ucenikService: UcenikService,
    private roditeljService: RoditeljService
  ) { }

  ngOnInit() {
    switch (this.authService.role) {
      case 'ROLE_ADMIN':
        this.ucenici$ = this.ucenikService.getUcenici();
        break;
      case 'ROLE_RODITELJ':
        this.ucenici$ = this.roditeljService.getDecaRoditelja(this.authService.id);
        break;
      default: this.ucenici$ = this.ucenikService.getUcenici();
        break;
    }
  }

  get isAdmin() :  boolean
  {
    return this.authService.role == 'ROLE_ADMIN' ? true : false;
  }
}

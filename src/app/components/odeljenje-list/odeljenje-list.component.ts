import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Odeljenje } from '../../models/Odeljenje';
import { OdeljenjeService } from '../../services/odeljenje.service';
import { AuthService } from '../../services/auth.service';
import { map, switchMap } from 'rxjs/operators';
import { NastavnikService } from '../../services/nastavnik.service';

@Component({
  selector: 'app-odeljenje-list',
  templateUrl: './odeljenje-list.component.html',
  styleUrls: ['./odeljenje-list.component.css']
})
export class OdeljenjeListComponent implements OnInit {

  odeljenja$: Observable<Odeljenje[]>;
  dodavanjeOdeljenja: boolean;
  selectedOdeljenje: Odeljenje;
  editovanje: boolean = false;

  data: any;

  constructor(
    private odeljenjeServ: OdeljenjeService,
    private authService: AuthService,
    private nastavnikService: NastavnikService
  ) { }

  ngOnInit() {
    switch (this.authService.role) {
      case 'ROLE_ADMIN':
        this.odeljenja$ = this.odeljenjeServ.getOdeljenja();
        break;
      case 'ROLE_NASTAVNIK':
        this.odeljenja$ = this.nastavnikService.getOdeljenjaPredmeti(this.authService.id).pipe(
          switchMap((data) => {
            this.data = data;
            console.log(data);
            return this.odeljenjeServ.getOdeljenja()
          }),
          map(odeljenja => odeljenja.filter(odeljenje => this.data.map(item => item["imeOdeljenja"]).includes(odeljenje.imeOdeljenja)))
        );
    }

  }



  deleteOdeljenje(idOdeljenje: number) {
    if (confirm("Da li ste sigurni da zelite da obriste odeljenje?")) {
      this.odeljenjeServ.removeOdeljenje(idOdeljenje)
        .subscribe();
    }
  }

  otkazano() {
    this.dodavanjeOdeljenja = false;
    this.editovanje = false;
    this.selectedOdeljenje = null;
  }

  edit(odeljenje: Odeljenje) {
    this.editovanje = true;
    this.selectedOdeljenje = odeljenje;

  }

  get isAdmin(): boolean {
    return this.authService.role == "ROLE_ADMIN" ? true : false;
  }
}

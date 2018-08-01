import { Component, OnInit } from '@angular/core';
import { NastavnikService } from '../../services/nastavnik.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Nastavnik } from '../../models/Nastavnik';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-nastavnik-info',
  templateUrl: './nastavnik-info.component.html',
  styleUrls: ['./nastavnik-info.component.css']
})
export class NastavnikInfoComponent implements OnInit {

  constructor(
    private nastavnikService: NastavnikService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  nastavnik: Nastavnik;

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(params => this.nastavnikService.getNastavnik(+params.get('id')))
      )
      .subscribe(nastavnik => this.nastavnik = nastavnik)
  }

  izmeniNastavnika() {
    this.nastavnikService.updateNastavnik(this.nastavnik)
      .subscribe(response => this.router.navigate(['./..']));
  }

  izbrisiNastavnika() {
    if (confirm("da li zelite da obrisete nastavnika?"))
      this.nastavnikService.removeNastavnik(this.nastavnik.idNastavnika)
        .subscribe(response => this.router.navigate(['./..']))
  }
}

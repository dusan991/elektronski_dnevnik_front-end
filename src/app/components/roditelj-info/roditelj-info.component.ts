import { Component, OnInit } from '@angular/core';
import { RoditeljService } from '../../services/roditelj.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Roditelj } from '../../models/Roditelj';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-roditelj-info',
  templateUrl: './roditelj-info.component.html',
  styleUrls: ['./roditelj-info.component.css']
})
export class RoditeljInfoComponent implements OnInit {

  constructor(
    private roditeljService: RoditeljService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  roditelj: Roditelj;

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(params => this.roditeljService.getRoditelj(+params.get('id')))
      )
      .subscribe(roditelj => this.roditelj = roditelj)
  }

  izmeniRoditelja() {
    this.roditeljService.updateRoditelj(this.roditelj)
      .subscribe(response => this.router.navigate(['./..']));
  }

  izbrisiRoditelja() {
    if (confirm("da li zelite da obrisete roditelja?"))
      this.roditeljService.removeRoditelj(this.roditelj.idRoditelja)
        .subscribe(response => this.router.navigate(['./..']))
  }
}

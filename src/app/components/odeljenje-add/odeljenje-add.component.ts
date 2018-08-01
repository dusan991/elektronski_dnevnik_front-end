import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Odeljenje } from '../../models/Odeljenje';
import { OdeljenjeService } from '../../services/odeljenje.service';

@Component({
  selector: 'app-odeljenje-add',
  templateUrl: './odeljenje-add.component.html',
  styleUrls: ['./odeljenje-add.component.css']
})
export class OdeljenjeAddComponent implements OnInit {

  constructor(
    private odeljenjeServ: OdeljenjeService
  ) { }

  @Output()
  otkazano: EventEmitter<any> = new EventEmitter<any>();


  @Input()
  editovanje: boolean = false;
  @Input()
  odeljenje: any = {};

  ngOnInit() {
  }

  saveOdeljenje(): void {
    if (!this.editovanje) {
      this.odeljenjeServ.addOdeljenje(this.odeljenje)
        .subscribe(
        );
    }

    else {
      this.odeljenjeServ.updateOdeljenje(this.odeljenje)
        .subscribe();
    }
  }
}

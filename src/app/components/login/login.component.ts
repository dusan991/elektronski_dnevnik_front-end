import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UcenikService } from '../../services/ucenik.service';
import { find, map } from 'rxjs/operators';
import { Ucenik } from '../../models/Ucenik';
import { RoditeljService } from '../../services/roditelj.service';
import { Roditelj } from '../../models/Roditelj';
import { NastavnikService } from '../../services/nastavnik.service';
import { Nastavnik } from '../../models/Nastavnik';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};

  wrongPassword: boolean = false;
  error: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private uceniciService: UcenikService,
    private roditeljService: RoditeljService,
    private nastavnikService: NastavnikService
  ) { }

  ngOnInit() {
  }

  login() {
    this.authService
      .login(this.user.username, this.user.password)
      .subscribe(
        data => {
          console.log(data);
          if (data) {
            this.authService.saveCredentials(this.user.username, this.user.password, data['role']);

            console.log(this.authService.role);
            switch (this.authService.role) {
              case 'ROLE_ADMIN': this.router.navigate(['/odeljenja']);
                break;
              case 'ROLE_UCENIK':
                this.uceniciService.getUcenici().pipe(
                  map((ucenici: Ucenik[]) => ucenici.find(ucenik => ucenik.korisnickoImeUcenika == this.user.username))
                )
                  .subscribe(
                    (ucenik: Ucenik) => {
                      this.router.navigate(['ucenik', ucenik.idUcenika]);
                      this.authService.id = ucenik.idUcenika;
                      localStorage.setItem('id', `${this.authService.id}`);
                    }
                  );
                break;
              case 'ROLE_RODITELJ':
                this.roditeljService.getRoditelja().pipe(
                  map((roditelji: Roditelj[]) => roditelji.find(roditelj => roditelj.korisnickoImeRoditelja == this.user.username))
                )
                  .subscribe(
                    (roditelj: Roditelj) => {
                      this.router.navigate(['ucenici']);
                      this.authService.id = roditelj.idRoditelja;
                      localStorage.setItem('id', `${this.authService.id}`);
                    }
                  );
                break;

              case 'ROLE_NASTAVNIK':
                this.nastavnikService.getNastavnici().pipe(
                  map((nastavnici: Nastavnik[]) => nastavnici.find(nastavnik => nastavnik.korisnickoImeNastavnika == this.user.username))
                )
                  .subscribe(
                    (nastavnik: Nastavnik) => {
                      this.router.navigate(['odeljenja']);
                      this.authService.id = nastavnik.idNastavnika;
                      localStorage.setItem('id', `${this.authService.id}`);
                    }
                  );
                break;

              default: this.router.navigate(['/nidje'])
                break;
            }


          } else {
            console.error(data);
          }
        },
        error => {
          error.status == 401 ? this.wrongPassword = true : this.error = true
        }
      );
  }

}

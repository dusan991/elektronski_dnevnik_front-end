import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private auth : AuthService) { }

  ngOnInit() {
  }

  logout()
  {
    this.auth.logout();
  }

  get ulogovan() : boolean{
    return this.auth.ulogovan;
  }

  get isAdmin() : boolean{
    return this.auth.role == 'ROLE_ADMIN' ? true : false;
  }
}

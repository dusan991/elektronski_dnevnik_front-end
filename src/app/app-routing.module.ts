import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { OdeljenjeListComponent } from './components/odeljenje-list/odeljenje-list.component';
import { OdeljenjeItemComponent } from './components/odeljenje-item/odeljenje-item.component';
import { LoginGuardService } from './guards/login-guard.service';
import { LoginAgainGuardService } from './guards/login-again-guard.service';
import { UcenikInfoComponent } from './components/ucenik-info/ucenik-info.component';
import { NastavnikInfoComponent } from './components/nastavnik-info/nastavnik-info.component';
import { PredmetInfoComponent } from './components/predmet-info/predmet-info.component';
import { PredmetAddComponent } from './components/predmet-add/predmet-add.component';
import { NastavnikListComponent } from './components/nastavnik-list/nastavnik-list.component';
import { NastavnikAddComponent } from './components/nastavnik-add/nastavnik-add.component';
import { PredmetListComponent } from './components/predmet-list/predmet-list.component';
import { PredmetNastavnikAddComponent } from './components/predmet-nastavnik-add/predmet-nastavnik-add.component';
import { UcenikAddComponent } from './components/ucenik-add/ucenik-add.component';
import { UcenikListComponent } from './components/ucenik-list/ucenik-list.component';
import { RoditeljListComponent } from './components/roditelj-list/roditelj-list.component';
import { RoditeljInfoComponent } from './components/roditelj-info/roditelj-info.component';
import { RoditeljAddComponent } from './components/roditelj-add/roditelj-add.component';


const routes : Route[]=
[
  {
    path : 'roditelj/add',
    component : RoditeljAddComponent,
    canActivate : [LoginGuardService]
  },
  {
    path : 'ucenik/add',
    component : UcenikAddComponent,
    canActivate : [LoginGuardService]
  },
  {
    path : 'nastavnik/add',
    component : NastavnikAddComponent,
    canActivate : [LoginGuardService]
  },
  {
    path : ':idOdeljenja/predmet/add',
    component : PredmetNastavnikAddComponent,
    canActivate : [LoginGuardService]
  },
  {
    path : 'predmet/add',
    component : PredmetAddComponent,
    canActivate : [LoginGuardService]
  },
  {
    path : 'roditelj/:id',
    component : RoditeljInfoComponent,
    canActivate : [LoginGuardService]
  },
  {
    path : 'predmet/:id',
    component : PredmetInfoComponent,
    canActivate : [LoginGuardService]
  },
  {
    path : 'nastavnik/:id',
    component : NastavnikInfoComponent,
    canActivate : [LoginGuardService]
  },
  {
    path : 'ucenik/:id',
    component : UcenikInfoComponent,
    canActivate : [LoginGuardService],
    runGuardsAndResolvers : 'always'
  },
  {
    path : 'odeljenje/:id',
    component : OdeljenjeItemComponent,
    canActivate : [LoginGuardService]
  },
  {
    path: 'roditelji',
    component : RoditeljListComponent,
    canActivate : [LoginGuardService]
  },
  {
    path: 'ucenici',
    component : UcenikListComponent,
    canActivate : [LoginGuardService]
  },
  {
    path: 'predmeti',
    component : PredmetListComponent,
    canActivate : [LoginGuardService]
  },
  {
    path: 'nastavnici',
    component : NastavnikListComponent,
    canActivate : [LoginGuardService]
  },
  {
    path: 'odeljenja',
    component : OdeljenjeListComponent,
    canActivate : [LoginGuardService]
  },
  {
    path:'login',
    component : LoginComponent,
    canActivate : [LoginAgainGuardService]
  },
  {
    path : '',
    redirectTo : 'login',
    pathMatch : 'full'
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation : 'reload'})
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

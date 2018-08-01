import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http/";
import { OdeljenjeService } from './services/odeljenje.service';
import {PredmetService} from "./services/predmet.service"
import { FormsModule } from '@angular/forms';
import { MessageService } from './services/message.service';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatToolbarModule, MatListModule, MatIconModule, MatExpansionModule, MatTableModule, MatSelectModule } from "@angular/material";
import { NavigationComponent } from './components/navigation/navigation.component';
import { OdeljenjeListComponent } from './components/odeljenje-list/odeljenje-list.component';
import { OdeljenjeItemComponent } from './components/odeljenje-item/odeljenje-item.component';
import { httpInterceptorProviders } from './interceptors';
import { OdeljenjeAddComponent } from './components/odeljenje-add/odeljenje-add.component';
import { UcenikInfoComponent } from './components/ucenik-info/ucenik-info.component';
import { NastavnikInfoComponent } from './components/nastavnik-info/nastavnik-info.component';
import { PredmetInfoComponent } from './components/predmet-info/predmet-info.component';
import { PredmetAddComponent } from './components/predmet-add/predmet-add.component';
import { NastavnikListComponent } from './components/nastavnik-list/nastavnik-list.component';
import { NastavnikAddComponent } from './components/nastavnik-add/nastavnik-add.component';
import { PredmetNastavnikAddComponent } from './components/predmet-nastavnik-add/predmet-nastavnik-add.component';
import { PredmetListComponent } from './components/predmet-list/predmet-list.component';
import { RoditeljListComponent } from './components/roditelj-list/roditelj-list.component';
import { RoditeljInfoComponent } from './components/roditelj-info/roditelj-info.component';
import { RoditeljAddComponent } from './components/roditelj-add/roditelj-add.component';
import { UcenikListComponent } from './components/ucenik-list/ucenik-list.component';
import { UcenikAddComponent } from './components/ucenik-add/ucenik-add.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    OdeljenjeListComponent,
    OdeljenjeItemComponent,
    OdeljenjeAddComponent,
    UcenikInfoComponent,
    NastavnikInfoComponent,
    PredmetInfoComponent,
    PredmetAddComponent,
    NastavnikListComponent,
    NastavnikAddComponent,
    PredmetNastavnikAddComponent,
    PredmetListComponent,
    RoditeljListComponent,
    RoditeljInfoComponent,
    RoditeljAddComponent,
    UcenikListComponent,
    UcenikAddComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    MatSelectModule
  ],
  providers: [
    OdeljenjeService,
    PredmetService,
    MessageService,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

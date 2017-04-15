import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//importar carga y configuracion en la memoria web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './heroDetailComponent';
import { HeroService } from './hero.service';
import { HeroesComponent } from './Heroescomponent';

import { AppRoutingModel } from './app-routing.model';


@NgModule({

  imports:  [ 
    BrowserModule,
    FormsModule, 
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModel,
  ],
  declarations: [ 
    AppComponent, 
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    ],
  bootstrap: [  AppComponent ],
    providers :[ HeroService ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


// import components app
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';

import { TeamModule } from './team/team.module';
import { PlayerModule } from './player/player.module';
import { ErrorModule } from './error/error.module';
import { CoreModule } from './core/core.module';


const MODULES: any = [
  BrowserModule,
  HttpModule,
  AppRoutingModule,
  HttpClientModule,
  TeamModule,
  PlayerModule,
  ErrorModule,
  CoreModule
];

const COMPONENTS = [
  AppComponent,
  LoginComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...MODULES
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

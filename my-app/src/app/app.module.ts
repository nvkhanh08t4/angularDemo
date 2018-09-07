import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';
import { PlayerListComponent } from './player/components/player-list/player-list.component';
import { TeamModule } from './team/team.module';
import { PlayerModule } from './player/player.module';
import { ErrorModule } from './error/error.module';
import { CoreModule } from './core/core.module';

const modules: any = [
  BrowserModule,
  HttpModule,
  AppRoutingModule,
  HttpClientModule,
  TeamModule,
  PlayerModule,
  ErrorModule,
  CoreModule
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PlayerListComponent,
  ],
  imports: [
    ...modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

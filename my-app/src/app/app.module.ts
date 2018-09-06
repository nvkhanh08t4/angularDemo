import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';
import { PlayerListComponent } from './player/components/player-list/player-list.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { SearchComponent } from './shared/components/search/search.component';
import { PageNotFoundComponent } from './error/components/page-not-found/page-not-found.component';
import { TeamModule } from './team/team.module';
import { PlayerModule } from './player/player.module';

const modules: any = [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  TeamModule,
  PlayerModule
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PlayerListComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    MainLayoutComponent,
    SearchComponent,
    PageNotFoundComponent
  ],
  imports: [
    ... modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

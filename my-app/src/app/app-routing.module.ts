import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TeamRoutingModule } from './team/team-routing.module';
import { routesConfigPlayer } from './player/player-routing.module';
import { PageNotFoundComponent } from './error/components/page-not-found/page-not-found.component';


const routesConfig: Routes = [
  {
    path: '',
    redirectTo: 'teams',
    pathMatch: 'full'
  },
  {
    path: "**",
    redirectTo: 'error',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [ CommonModule, TeamRoutingModule, RouterModule.forRoot(routesConfig, { useHash: false }) ],
  exports: [ RouterModule ],
  providers: [],
})
export class AppRoutingModule {}

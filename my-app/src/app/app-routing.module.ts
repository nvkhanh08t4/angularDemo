import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TeamRoutingModule } from './team/team-routing.module';
import { TeamListComponent } from './team/components/team-list/team-list.component';
import { TeamDetailComponent } from './team/components/team-detail/team-detail.component';
import { routesConfigPlayer } from './player/player-routing.module';


const routesConfig: Routes = [
  {
    path: '',
    redirectTo: 'team',
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

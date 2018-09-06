import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamComponent } from './pages/team/team.component';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';

import { TeamRoutingModule } from './team-routing.module';
import { PlayerModule } from './../player/player.module';
import { TeamListComponent } from './components/team-list/team-list.component';
@NgModule({
  imports: [
    CommonModule,
    TeamRoutingModule,
    PlayerModule
  ],
  declarations: [
    TeamComponent,
    TeamDetailComponent,
    TeamListComponent
  ]
})
export class TeamModule { }

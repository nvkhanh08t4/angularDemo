import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamComponent } from './pages/team/team.component';
import { TeamRoutingModule } from './team-routing.module';
import { PlayerModule } from './../player/player.module';
import { TeamListComponent } from './components/team-list/team-list.component';
import { SharedModule } from '../shared/shared.module';
import { TeamDetailComponent } from './pages/team-detail/team-detail.component';

const MODULES = [
  CommonModule,
  TeamRoutingModule,
  PlayerModule,
  SharedModule
]

const COMPONENTS: any[] = [
  TeamComponent,
  TeamDetailComponent,
  TeamListComponent
]
@NgModule({
  imports: [
    ...MODULES
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})

export class TeamModule { }

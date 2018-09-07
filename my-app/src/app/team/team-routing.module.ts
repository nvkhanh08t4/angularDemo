import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TeamModule } from './team.module'
import { TeamComponent } from './pages/team/team.component';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';

import { routesConfigPlayer } from './../player/player-routing.module'
import { PlayerDetailComponent } from './../player/pages/player-detail/player-detail.component'
import { PlayerComponent } from './../player/pages/player/player.component'

import { TeamListComponent } from './components/team-list/team-list.component';
import { MainLayoutComponent } from '../shared/components/main-layout/main-layout.component';

const routesConfig: Routes = [
  {
    path: 'team',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: TeamComponent
      },
    ]
  },
  {
    path: 'team/:id',
    component: MainLayoutComponent,
    children: [
      ...routesConfigPlayer
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [ CommonModule, RouterModule.forChild(routesConfig) ],
  exports: [ RouterModule ],
})
export class TeamRoutingModule {}

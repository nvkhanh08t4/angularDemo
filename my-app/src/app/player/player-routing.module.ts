import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PlayerModule } from './../player/player.module';
import { PlayerDetailComponent } from './../player/pages/player-detail/player-detail.component'
import { PlayerListComponent } from './components/player-list/player-list.component';
import { TeamDetailComponent } from '../team/components/team-detail/team-detail.component';

export const routesConfigPlayer: Routes = [
  {
    path: '',
    component: TeamDetailComponent,
    children: [
      {
        path: '',
        component: PlayerListComponent
      },
    ]
  },
  {
    path: 'player',
    component: PlayerDetailComponent,
    children: [
      {
        path: 'edit',
        component: PlayerDetailComponent,
        data: { title: 'edit' }
      },
      {
        path: 'new',
        component: PlayerDetailComponent,
        data: { title: 'new' }
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routesConfigPlayer)],
  exports: [RouterModule],
})
export class PlayerRoutingModule { }

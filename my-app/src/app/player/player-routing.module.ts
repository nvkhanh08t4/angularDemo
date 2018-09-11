import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PlayerModule } from './../player/player.module';
import { PlayerDetailComponent } from './../player/pages/player-detail/player-detail.component'
import { PlayerListComponent } from './pages/player-list/player-list.component';
import { TeamDetailComponent } from '../team/pages/team-detail/team-detail.component';

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
    path: 'players/:id',
    component: PlayerDetailComponent,
    children: [
      {
        path: '',
        component: PlayerDetailComponent,
        data: { title: 'add' },
      },
      {
        path: 'edit',
        component: PlayerDetailComponent,
        data: { title: 'edit' }
      }
    ]
  },
  {
    path: 'players/add',
    component: PlayerDetailComponent,
    data: { title: 'add' }
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routesConfigPlayer)],
  exports: [RouterModule],
})

export class PlayerRoutingModule { }

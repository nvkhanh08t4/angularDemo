import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PlayerModule } from './../player/player.module';
import { PlayerDetailComponent } from './../player/pages/player-detail/player-detail.component'

export const routesConfigPlayer: Routes = [
  {
    path: 'player',
    component: PlayerDetailComponent,
    // children: [
    //   { path: 'detail', component: PlayerDetailComponent },
    //   { path: 'edit', component:  PlayerDetailComponent },
    //   { path: 'new', component:  PlayerDetailComponent }
    // ]
  }
];

@NgModule({
  imports: [ CommonModule , RouterModule.forChild(routesConfigPlayer)],
  exports: [ RouterModule ],
})
export class PlayerRoutingModule {}

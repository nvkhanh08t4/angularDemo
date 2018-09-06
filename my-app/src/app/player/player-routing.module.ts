import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PlayerModule } from './../player/player.module';
import { PlayerDetailComponent } from './../player/pages/player-detail/player-detail.component'
import { PlayerComponent } from './pages/player/player.component';

export const routesConfigPlayer: Routes = [
  {
    //path: 'team/:id/player',
    path: 'player',
   // component: PlayerDetailComponent,
    children: [
      { path: '', redirectTo: 'edit', pathMatch: 'full' },
      { path: 'detail', component: PlayerComponent },
      { path: 'edit', component: PlayerDetailComponent },
      { path: 'new', component:  PlayerComponent }
    ]
  }
];

@NgModule({
  imports: [ CommonModule , RouterModule.forChild(routesConfigPlayer)],
  exports: [ RouterModule ],
})
export class PlayerRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerComponent } from './pages/player/player.component';
import { PlayerDetailComponent } from './pages/player-detail/player-detail.component';
import { PlayerRoutingModule } from './player-routing.module';
import { SharedModule } from '../shared/shared.module';

const modules: any[] = [
  CommonModule,
  PlayerRoutingModule,
  SharedModule
]

const components: any[] = [
  PlayerComponent,
  PlayerDetailComponent
]
@NgModule({
  imports: [
    ...modules
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class PlayerModule { }

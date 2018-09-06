import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './pages/player/player.component';
import { PlayerDetailComponent } from './pages/player-detail/player-detail.component';
import { PlayerRoutingModule } from './player-routing.module';
@NgModule({
  imports: [
    CommonModule,
    PlayerRoutingModule
  ],
  declarations: [
    PlayerComponent,
    PlayerDetailComponent
  ],
  exports: [
    PlayerComponent,
    PlayerDetailComponent
  ]
})
export class PlayerModule { }

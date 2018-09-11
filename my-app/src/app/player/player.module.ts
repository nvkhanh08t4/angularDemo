import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// import third party library
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

import { PlayerDetailComponent } from './pages/player-detail/player-detail.component';
import { PlayerRoutingModule } from './player-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PlayerListComponent } from './pages/player-list/player-list.component';

const MODULES: any[] = [
  CommonModule,
  ReactiveFormsModule,
  PlayerRoutingModule,
  SharedModule,
  ConfirmationPopoverModule.forRoot({
    confirmButtonType: 'danger'
  })
]

const COMPONENTS: any[] = [
  PlayerListComponent,
  PlayerDetailComponent
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

export class PlayerModule { }

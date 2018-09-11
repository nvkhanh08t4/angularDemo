import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TeamRoutingModule } from './team/team-routing.module';

const ROUTERCONFIG: Routes = [
  {
    path: '',
    redirectTo: 'teams',
    pathMatch: 'full'
  },
  {
    path: "**",
    redirectTo: 'error',
    pathMatch: 'full'
  }
];

const MODULES = [
  CommonModule,
  TeamRoutingModule,
  RouterModule.forRoot(ROUTERCONFIG, { useHash: false })
]

@NgModule({
  imports: [
    ...MODULES
  ],
  exports: [
     RouterModule
  ],
})

export class AppRoutingModule {}

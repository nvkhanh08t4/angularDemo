import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../shared/components/main-layout/main-layout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const ROUTERCONFIG: Routes = [
  {
    path: 'error',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: PageNotFoundComponent
      }
    ]
  }
]

const MODULES = [
  CommonModule,
  RouterModule.forChild(ROUTERCONFIG)
]

@NgModule({
  imports: [
    ...MODULES
  ],
  exports: [
    RouterModule],
})

export class ErrorRoutingModule { }

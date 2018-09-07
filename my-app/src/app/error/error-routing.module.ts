import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../shared/components/main-layout/main-layout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routesConfigError: Routes = [
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

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routesConfigError)],
  exports: [RouterModule],
  providers: [],
})
export class ErrorRoutingModule { }

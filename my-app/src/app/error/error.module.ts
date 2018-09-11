import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SharedModule } from '../shared/shared.module';
import { ErrorRoutingModule } from './error-routing.module';

const MODULES = [
  CommonModule,
  ErrorRoutingModule,
  SharedModule,
];

const COMPONENT = [
  PageNotFoundComponent
]

@NgModule({
  imports: [
     ...MODULES
  ],
  declarations: [
    ...COMPONENT
  ],
  exports: [
    ...COMPONENT
  ]
})

export class ErrorModule { }

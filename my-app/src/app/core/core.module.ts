import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseService } from './services/base.service';

const MODULES = [
  CommonModule
]

@NgModule({
  imports: [
    ...MODULES
  ],
  declarations: [],
})

export class CoreModule { }

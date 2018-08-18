import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToturialComponent }  from './toturial.component';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, ToturialComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

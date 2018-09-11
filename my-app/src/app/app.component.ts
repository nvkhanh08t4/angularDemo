import { Component } from '@angular/core';

import { AppConstant } from './app.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = AppConstant.TITLE;
}

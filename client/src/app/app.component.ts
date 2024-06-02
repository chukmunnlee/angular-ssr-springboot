import { Component, OnInit, Optional, inject } from '@angular/core';
import {INIT_VALUE} from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  initValue = inject(INIT_VALUE, { optional: true })

  message = "not set"

  ngOnInit(): void {
    console.info('>>> initValue: ', this.initValue)
    if (!!this.initValue)
      this.message = this.initValue['message']
  }
}

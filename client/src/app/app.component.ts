import { Component, Inject, OnInit, inject } from '@angular/core';
import {INIT_VALUE} from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  initValue = inject(INIT_VALUE)

  message = "not set"

  //constructor(@Inject(INIT_VALUE) private initValue: any) { }

  ngOnInit(): void {
    console.info('>>> initValue: ', this.initValue)
    this.message = this.initValue.message
  }
}

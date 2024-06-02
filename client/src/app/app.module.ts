import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

export const INIT_VALUE = new InjectionToken<any>('INIT_VALUE')

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ BrowserModule ],
  providers: [
    {
      provide: INIT_VALUE,
      //@ts-ignore
      useFactory: () => window.INIT_VALUE
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

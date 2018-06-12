import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AstronautComponent } from './astronaut/astronaut.component';
import { MissionControlComponent } from './mission-control/mission-control.component';

@NgModule({
  declarations: [
    AppComponent,
    AstronautComponent,
    MissionControlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

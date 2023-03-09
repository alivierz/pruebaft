import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaIdScanComponent } from './prueba-id-scan/prueba-id-scan.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaIdScanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

declare global {
  var FaceTecSDK:  any
}

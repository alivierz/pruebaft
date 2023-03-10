import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaIdScanComponent } from './prueba-id-scan/prueba-id-scan.component';
import { PruebaIdMatchComponent } from './prueba-id-match/prueba-id-match.component';
import { PruebaEnrollmentComponent } from './prueba-enrollment/prueba-enrollment.component';
import { PruebaAutenticateComponent } from './prueba-autenticate/prueba-autenticate.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaIdScanComponent,
    PruebaIdMatchComponent,
    PruebaEnrollmentComponent,
    PruebaAutenticateComponent
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

// import { AngularSampleApp } from './../assets/angular-sample-controller';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo-app';

  data: any = false



  changeData(){
    this.data = true
  }

  initProcess(){
    // AngularSampleApp.onLivenessCheckPressed()
  }


  // initScanPhotoProcess(){
  //   AngularSampleApp.onPhotoIDScanProcessor()
  // }
}

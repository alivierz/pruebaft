import { Component } from '@angular/core';
import { Config } from 'src/assets/Config';
import { SampleAppUtilities } from "src/assets/utilities/SampleAppUtilities";
import { EnrollmentProcessor } from 'src/assets/processors/EnrollmentProcessor';

@Component({
  selector: 'app-prueba-enrollment',
  templateUrl: './prueba-enrollment.component.html',
  styleUrls: ['./prueba-enrollment.component.css']
})
export class PruebaEnrollmentComponent {

  latesPhotoProcesor!: EnrollmentProcessor;

  constructor(){

  }
  status: boolean = false

  ngOnInit():void {
      FaceTecSDK.setResourceDirectory("/assets/core-sdk/FaceTecSDK.js/resources");

      // Set the directory path for required FaceTec Browser SDK images.
      FaceTecSDK.setImagesDirectory("/assets/core-sdk/FaceTec_images");

      // Initialize FaceTec Browser SDK and configure the UI features.
      FaceTecSDK.initializeInDevelopmentMode(Config.DeviceKeyIdentifier,Config.PublicFaceScanEncryptionKey,function(initializedSuccessfully: boolean) {
        if(initializedSuccessfully) {
          SampleAppUtilities.enableControlButtons();
          SampleAppUtilities.setOCRLocalization();

        }
        SampleAppUtilities.displayStatus(FaceTecSDK.getFriendlyDescriptionForFaceTecSDKStatus(FaceTecSDK.getStatus()));
      });
  }


  initProcess() {
    const initSession = (sessionToken: any) =>{
      this.latesPhotoProcesor = new EnrollmentProcessor(sessionToken as string, PruebaEnrollmentComponent as any, this.onCompletePhotoIdScan);
    }
    this.getSessionToken(initSession)
  };



  getSessionToken(sessionTokenCallback: (sessionToken?: string)=>void) {
    const XHR = new XMLHttpRequest();
    XHR.open("GET", Config.BaseURL + "/session-token");
    XHR.setRequestHeader("X-Device-Key", Config.DeviceKeyIdentifier);
    XHR.setRequestHeader("X-User-Agent", FaceTecSDK.createFaceTecAPIUserAgentString(""));
    XHR.onreadystatechange = function() {
      if(this.readyState === XMLHttpRequest.DONE) {
        let sessionToken = "";
        try {
          // Attempt to get the sessionToken from the response object.
          sessionToken = JSON.parse(this.responseText).sessionToken;
          // Something went wrong in parsing the response. Return an error.
          if(typeof sessionToken !== "string") {
             SampleAppUtilities.handleErrorGettingServerSessionToken();
            return;
          }
        }
        catch {
          // Something went wrong in parsing the response. Return an error.
           SampleAppUtilities.handleErrorGettingServerSessionToken();
          return;
        }
        sessionTokenCallback(sessionToken);
      }
    };

    XHR.onerror = function() {
       SampleAppUtilities.handleErrorGettingServerSessionToken();
    };
    XHR.send();
  }





  onCompletePhotoIdScan(value: any) {
    console.log(value)
    SampleAppUtilities.showMainUI();

    if(!this.latesPhotoProcesor.isSuccess()) {

      // Show early exit message to screen.  If this occurs, please check logs.
      SampleAppUtilities.displayStatus("Session exited early, see logs for more details.");

      return;
    }

    // Show successful message to screen
    SampleAppUtilities.displayStatus("Success");
  }

}


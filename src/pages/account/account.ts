import { Component } from '@angular/core';

import { AlertController, NavController, ToastController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { UserData } from '../../providers/user-data';

import { Camera, BLE } from 'ionic-native';

declare var cordova: any;

declare var window: any;

//Angularfire2
import { AngularFire  } from 'angularfire2';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  username: string;
  uid: any;

  constructor(
    public alertCtrl: AlertController,
    public nav: NavController,
    public userData: UserData,
    public af: AngularFire,
    public toastCtrl: ToastController
  ) {

  }

  ngAfterViewInit() {
    this.getUsername();
  }

  enableBLE(){
      BLE.enable();
  }

  disableBLE(){
      BLE.showBluetoothSettings();
  }


  updatePicture() {
    Camera.getPicture({ sourceType: 0}).then((imageData) => {
     let toast = this.toastCtrl.create({
       message:   ImageData + 'Image Data successful',
       duration: 6000,
       position: 'middle'
     });
     toast.present();
    }, (err) => {
     // Handle error
   } );
    console.log('Clicked to update picture' + ImageData);
  }

  getFileEntry(imgUri) {
    window.resolveLocalFileSystemURL(imgUri, function success(fileEntry) {

          // Do something with the FileEntry object, like write to it, upload it, etc.
          // writeFile(fileEntry, imgUri);
          console.log("got file: " + fileEntry.fullPath);
          // displayFileData(fileEntry.nativeURL, "Native URL");

      }, function () {
        // If don't get the FileEntry (which may happen when testing
        // on some emulators), copy to a new FileEntry.
          // createNewFileEntry(imgUri);
      });
  }

  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing
  changeUsername() {
    let alert = this.alertCtrl.create({
      title: 'Change Username',
      buttons: [
        'Cancel'
      ]
    });
    alert.addInput({
      name: 'username',
      value: this.username,
      placeholder: 'username'
    });
    alert.addButton({
      text: 'Ok',
      handler: data => {
        this.userData.setUsername(data.username);
        this.getUsername();
      }
    });

    alert.present();
  }

  getUsername() {
    this.userData.getUsername().then((username) => {
      this.username = username;
    });
  }

  changePassword() {
    let authData = JSON.parse(localStorage.getItem("firebase:authUser:AIzaSyAAtcKO33syRnUKRfhuWet3UCQ1bw9M5Mw:[DEFAULT]"));
    let uid = authData.uid;

    let toast = this.toastCtrl.create({
      message:  'UID: ' + uid,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
    console.log('Clicked to change password');
  }

  logout() {
    this.af.auth.logout();
    this.userData.logout();
    this.nav.setRoot(LoginPage);

    let toast = this.toastCtrl.create({
      message:  'Logged Out',
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }
}

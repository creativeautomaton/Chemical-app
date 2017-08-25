import { Component } from '@angular/core';
import { App, NavController, ModalController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { AppData } from '../../providers/app-data';

//Angularfire2
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable  } from 'angularfire2';
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html'
})
export class SplashPage {
  signupObservable: FirebaseObjectObservable<any>;
  links: any;

  constructor(
    public app: App,
    public navCtrl: NavController,
    public af: AngularFire,
    public appData: AppData,
    public modalCtrl: ModalController
) {
  this.links = [
    {
      title: ' Hazelwood School District link',
      content: 'Your Hazelwood School District App will only search for your Transmitter(s) for locations assistance within Bluetooth connectivity range.  This is an acceptable and effective method for indoor locating of items such as remote control, indoor cat, etc. Items which regularly leave the house, consider Crowd-searching.'
    }
  ]
}

  ionViewDidLoad() {
    console.log('Loaded SplashPage Page');
      // this.app.setTitle('Hazelwood School District');
      // this.vendorLinks = [];
    }


  continueButton() {
    this.navCtrl.push(TabsPage, { tabIndex: 1});
  }



}

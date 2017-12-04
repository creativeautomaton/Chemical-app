import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController, NavController } from 'ionic-angular';

import { AppData } from '../../providers/app-data';


//Angularfire2
import { AngularFire,  FirebaseListObservable } from 'angularfire2';
import { AuthService } from '../../providers/auth-service';


@Component({
  selector: 'page-assessment-detail',
  templateUrl: 'assessment-detail.html'
})
export class AssessmentDetailPage {

  detailData: any;
  detailKey: any;

  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public appData: AppData,
    public af: AngularFire,
    public auth: AuthService,
    public modalCtrl: ModalController,
    public platform: Platform
  ) {

    let detailData = [];
    let detailKey = [];

     // this.detailData = details[this.navParams.get('assessments')];
     // this.detailData = this.navParams.get('assessmentDetail');
     // this.detailKey = this.navParams.get('keys');
     // console.log(navParams.get('keys'));
     // console.log(navParams.get('assessmentDetail'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssessmentDetailPage');
    console.log(this.detailData);
    console.log(this.detailKey);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}

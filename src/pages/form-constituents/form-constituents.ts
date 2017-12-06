import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the FormConstituentsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-form-constituents',
  templateUrl: 'form-constituents.html'
})
export class FormConstituentsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormConstituentsPage');
  }

}

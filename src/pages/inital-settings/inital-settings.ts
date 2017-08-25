import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';

import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DisclaimerPage } from '../disclaimer/disclaimer';

import { AppData } from '../../providers/app-data';
//Angularfire2
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable  } from 'angularfire2';
import { AuthService } from '../../providers/auth-service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'page-inital-settings',
  templateUrl: 'inital-settings.html'
})
export class InitalSettingsPage {

  private searching : FormGroup;
  searchingItemObservable: FirebaseObjectObservable<any>;
  crowd: false;
  personal: false;

  constructor(
    public app: App,
    public appData: AppData,
    public navCtrl: NavController,
    private formBuilder: FormBuilder,
    public af: AngularFire,
    private auth: AuthService ) {

       this.searching = this.formBuilder.group({
          crowd: false,
          personal: false
       });
       this.crowd = this.searching.value.crowd
       this.personal = this.searching.value.personal
    }

  ionViewDidLoad() {
      this.app.setTitle('Inital Settings');
      console.log('Hello InitalSettingsPage Page');
  }

 logForm( ) {

   let pushJSON = {
     firsttime: false,
     search: {
       crowd: this.searching.value.crowd,
       personal:  this.searching.value.personal
     }
   }
   console.log(
     'pushJSON: ', pushJSON
   );

   let authData = JSON.parse(localStorage.getItem("firebase:authUser:AIzaSyALklZRUyyYtO2rSzjvGE6wq3k2u3-lX7k:[DEFAULT]"));
   let uid = authData.uid;
   this.searchingItemObservable = this.af.database.object('/users/' + uid );
   this.searchingItemObservable.update(pushJSON);
   console.log(
     'Crowd: ', this.searching.value.crowd,
     'Personal: ', this.searching.value.personal
   );
   this.navCtrl.push(DisclaimerPage);
 }

}

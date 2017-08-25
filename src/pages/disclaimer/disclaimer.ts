import { Component } from '@angular/core';
import { App,  NavController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { AppData } from '../../providers/app-data';
import { SplashPage } from '../splash/splash';

//Angularfire2
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable  } from 'angularfire2';
import { AuthService } from '../../providers/auth-service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'page-disclaimer',
  templateUrl: 'disclaimer.html'
})
export class DisclaimerPage {

    private disclaimer : FormGroup;
    disclaimerItemObservable: FirebaseObjectObservable<any>;
    disclaim: boolean;

  constructor(
    public app: App,
    public appData: AppData,
    public navCtrl: NavController,
    private formBuilder: FormBuilder,
    public af: AngularFire,
    private auth: AuthService
  ) {

     this.disclaimer = this.formBuilder.group({
        accept: ['']
     });
   }

  ionViewDidLoad() {
    this.app.setTitle('Disclaimer');
    console.log('Hello DisclaimerPage Page');
  }

  disclaimerForm() {
    let pushJSON = {
      disclaimer:    this.disclaimer.value.accept
    }
    console.log(
      'pushJSON: ', pushJSON
    );

    let authData = JSON.parse(localStorage.getItem("firebase:authUser:AIzaSyALklZRUyyYtO2rSzjvGE6wq3k2u3-lX7k:[DEFAULT]"));
    let uid = authData.uid;
    this.disclaimerItemObservable = this.af.database.object('/users/' + uid );
    this.disclaimerItemObservable.update(pushJSON);
    console.log(
        'disclaimer: ' , this.disclaimer.value.accept
    );
    this.navCtrl.push(SplashPage);
  }

}

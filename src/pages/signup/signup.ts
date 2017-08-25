import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';

//import { TabsPage } from '../tabs/tabs';
import { PaymentPage } from '../payment/payment';
import { AppData } from '../../providers/app-data';
import { UserData } from '../../providers/user-data';

//Angularfire2
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable  } from 'angularfire2';
import { AuthService } from '../../providers/auth-service';

declare var firebase;

@Component({
  selector: 'page-login',
  templateUrl: 'signup.html'
})
export class SignupPage {
  signup: {username?: string, password?: string, zipcode?: string, subscription?: boolean} = {};
  submitted = false;
  signupObservable: FirebaseObjectObservable<any>;

  sampleObservable: FirebaseListObservable<any>;

  constructor(
    public navCtrl: NavController,
    public appData: AppData,
    public userData: UserData,
    public modalCtrl: ModalController,
    public af: AngularFire,
    public auth$: AuthService
  )
    { }

  addSampleUserData(): void {

    this.af.auth.subscribe( auth => {
      console.log(" UID:" + auth.uid);
       let uid = this.auth$.id();
       this.signupObservable = this.af.database.object( '/users/' + uid );
    });
    // let authData = JSON.parse(localStorage.getItem("firebase:authUser:AIzaSyAAtcKO33syRnUKRfhuWet3UCQ1bw9M5Mw:[DEFAULT]"));
  }

  onSignup(form) {
    this.submitted = true;

    if (form.valid) {
      this.userData.signup(this.signup.username);

          firebase.auth().createUserWithEmailAndPassword(this.signup.username, this.signup.password)
          .then((success) => {
                  //this.confData.loadUserData();
                  console.log('Signup worked' + success.uid);

                  setTimeout(() => {
                    this.signupObservable = this.af.database.object( '/users/' + success.uid );

                     this.signupObservable.update({
                              "role" : "basic",
                              "firsttime" : true
                     });


                     //this.sampleObservable = this.af.database.list( '/users/' + success.uid + '/devices/map/' );
                     // let authData = JSON.parse(localStorage.getItem("firebase:authUser:AIzaSyAAtcKO33syRnUKRfhuWet3UCQ1bw9M5Mw:[DEFAULT]"));
                      //this.afdata = this.af.database.object('/users/' + authData.uid );

                  }, 1500);

                  setTimeout(() => {
                          let sampleJSON = {
                               "key" : 0
                             }
                            this.sampleObservable = this.af.database.list('/users/' + success.uid + '/devices/map/' );

                            this.sampleObservable.push( sampleJSON ).then((snap) => {
                                 let update = firebase.database().ref('/users/' + success.uid + '/devices/map/' + snap.key );
                                 update.update({ key: snap.key});
                                 console.log('snap.key', snap.key)
                                 //update.push({ geofence: { key: fenceData} });
                              });
                  }, 3000);
            }).catch( (error) => {
                      // Handle Errors here.
                      var errorCode = error.name;
                      var errorMessage = error.message;
                    if (errorCode == 'auth/weak-password') {
                      alert('The password is too weak. Must be atleast 6 Characters.');
                    } else {
                      alert(errorMessage);
                    }
                    console.log(error);
              });
    }
  }
  presentModal() {
    let modal = this.modalCtrl.create(PaymentPage);
    modal.present();
  }

}

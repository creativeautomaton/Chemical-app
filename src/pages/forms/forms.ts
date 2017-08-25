import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ToastController } from 'ionic-angular';

import { PaymentPage } from '../payment/payment';
import { AppData } from '../../providers/app-data';
import { UserData } from '../../providers/user-data';
import {Geolocation} from 'ionic-native';

//Angularfire2
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable  } from 'angularfire2';
import { AuthService } from '../../providers/auth-service';

declare var firebase;

@Component({
  selector: 'page-forms',
  templateUrl: 'forms.html'
})
export class FormsPage {
  addCustomer: {
      name?: string,
      address?: string,
      city?: string
      state?: string
      zipcode?: string,
      type?: string,
      yard?: string,
      subscription?: boolean
  } = {};
  submitted = false;
  addCustomerObservable: FirebaseListObservable<any>;
  geolocation: {lat?: number, lng?: number, timestamp?: number} = {};

  public pushJSONString: any;

  constructor(
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    public appData: AppData,
    public userData: UserData,
    public modalCtrl: ModalController,
    public af: AngularFire,
    public auth$: AuthService
  )
    { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormsPage');
  }

  onAddCustomer(form) {
    this.submitted = true;

    if (form.valid) {
          this.userData.signup(this.addCustomer.name);

                    let authData = JSON.parse(localStorage.getItem("firebase:authUser:AIzaSyALklZRUyyYtO2rSzjvGE6wq3k2u3-lX7k:[DEFAULT]"));
                    let uid = authData.uid;
                    this.addCustomerObservable = this.af.database.list('/users/' + uid + '/customers/' );

                    let pushJSON = {
                       type: 'Residential',
                       name: "Zach and Claire",
                       pets: [
                               { name: 'oso', type: 'dog'},
                               { name: 'olive', type: 'cat'}
                             ],
                       yard: 'medium',
                       chemicals: [
                                     { name: 'nitrogen', use: 'fertilizer', frequency: '2 weeks'},
                                     { name: 'Agent Orange', use: 'Geonocide', frequency: '1955-75'},
                                     { name: 'hydrogen', use: 'waterizer', frequency: '20 minutes'}
                                  ],
                       address: '4962 fyler ave',
                       city: 'Saint Louis',
                       state: 'mo',
                       zip: '63139',
                       lastJob: '4/12/2017',
                       time: '5:40am',
                       lat: '38.44500',
                       lng: '-90.5543',
                       key: '00000001',
                       photo: 'http://www.taylorstreesandturf.com/wp-content/uploads/2014/03/Lawn-Care.jpg'
                     }

                     this.addCustomerObservable.push( pushJSON ).then((snap) => {
                         firebase.database().ref('/users/' + uid + '/customers/' + snap.key ).update({ key: snap.key});
                            let pushJSONString = JSON.stringify(pushJSON);

                            let toast = this.toastCtrl.create({
                              message:   pushJSONString + '\n      jsonPushdata',
                              duration: 10000,
                              position: 'middle',
                              cssClass: "toast-message"
                            });
                            toast.present();
                       }).catch((error) => {
                             let toast = this.toastCtrl.create({
                               message: 'Adding Customer Failed' + error,
                               duration: 7000,
                               position: 'middle',
                               cssClass: "toast-message"
                             });
                      });
                    }


                  // if (this.addCustomer.subscription = true) {
                  //     // this.presentModal();
                  //     console.log('Pro account checked.');
                  // } else {
                  //   // this.navCtrl.push(TabsPage);
                  // }

      }
}

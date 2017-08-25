import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

//import { TabsPage } from '../tabs/tabs';
import { UserData } from '../../providers/user-data';
import {PayPal, PayPalPayment, PayPalConfiguration} from "ionic-native";
/*
  Generated class for the Payment page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html'
})
export class PaymentPage {
  signup: {username?: string, password?: string, zipcode?: string, subscription?: boolean} = {};
  submitted = false;

  constructor(public navCtrl: NavController, public userData: UserData, public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello PaymentPage Page');
  }
  close() {
    this.viewCtrl.dismiss();
  }

  onPaymentsubmit(form) {
    this.submitted = true;

    if (form.valid) {
          //this.userData.signup(this.signup.username);
          //this.navCtrl.push(TabsPage);

          PayPal.init({
            "PayPalEnvironmentProduction": "YOUR_PRODUCTION_CLIENT_ID",
            "PayPalEnvironmentSandbox": "ARnQc6-m2qYDfFmdfYo4JtmvieXrm_ao3dwBAA8-zWXv8mBAKB0FgEEYCeCu0n9ko0KR7OssQ6af-VMb"
          }).then(() => {
            // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
            PayPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
              // Only needed if you get an "Internal Service Error" after PayPal login!
              //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
            })).then(() => {
              let payment = new PayPalPayment('5.00', 'USD', 'Description', 'Enhanced Subscription');
              PayPal.renderSinglePaymentUI(payment).then(() => {
                // Successfully paid

                // Example sandbox response
                //
                // {
                //   "client": {
                //     "environment": "sandbox",
                //     "product_name": "PayPal iOS SDK",
                //     "paypal_sdk_version": "2.16.0",
                //     "platform": "iOS"
                //   },
                //   "response_type": "payment",
                //   "response": {
                //     "id": "PAY-1AB23456CD789012EF34GHIJ",
                //     "state": "approved",
                //     "create_time": "2016-10-03T13:33:33Z",
                //     "intent": "sale"
                //   }
                // }
              }, () => {
                // Error or render dialog closed without being successful
              });
            }, () => {
              // Error in configuration
            });
          }, () => {
            // Error in initialization, maybe PayPal isn't supported or something else
          });
    }



  }

}
